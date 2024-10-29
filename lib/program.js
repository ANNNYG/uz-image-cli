const { program } = require('commander')
const prompts = require('prompts')
const chalk = require('chalk')

const { readSettings, writeSettings } = require('../utils/index')

const version = require('../package.json').version

const NEED_CHECK_CONFIG = [
  { key: "TINIFY_KEY", message: "Tinify Key" },
  { key: "REGION", message: "region" },
  { key: "ACCESS_KEY_ID", message: "Access key Id" },
  { key: "ACCESS_KEY_SECRET", message: "Access key Secret" },
  { key: "BUCKET", message: "Bucket" },
  { key: "FILE_OSS_PATH", message: "文件上到OSS的目录" },
  { key: "OSS_PATH", message: "OSS的域名" }
]

const NEED_SET_CONFIG = []

const settings = readSettings()

const startProgram = () => {
  program
    .name('upload-cli')
    .description('welcome to use upload-cli')
    .version(`upload-cli version: ${version}`)

  program
    .option('-z, --zip', 'zip your image')
    .option('-u, --upload', 'upload your image to OSS')
  program.parse(process.argv);

  const options = program.opts();
  const filePath = program.args[0]

  return { ...options, filePath }
}

const handleCheck = async (key, message = '') => {
  if (settings[key]) return
  NEED_SET_CONFIG.push({ type: "text", name: key, message: chalk.blue(`请输入你的${message}:`) })
}

const checkConfig = async () => {
  NEED_CHECK_CONFIG.forEach(item => handleCheck(item.key, item.message))
  if (NEED_SET_CONFIG.length > 0) {
    const response = await prompts([...NEED_SET_CONFIG])
    writeSettings(response)
  }
}


module.exports = {
  startProgram,
  checkConfig
}





