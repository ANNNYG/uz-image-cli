const path = require('path')
const oss = require('ali-oss')
const chalk = require('chalk')
const clipboardy = require('copy-paste')

const { readSettings } = require('../utils/index.js')

const settings = readSettings()

const handleUpload = (filePath) => {
  const ossConfigObj = {
    region: settings['REGION'],
    accessKeyId: settings['ACCESS_KEY_ID'],
    accessKeySecret: settings['ACCESS_KEY_SECRET'],
    bucket: settings['BUCKET']
  }

  const fileOssPath = settings['FILE_OSS_PATH']
  const ossPath = settings['OSS_PATH']

  const client = oss({ ...ossConfigObj })

  const uploadFilePath = `${new Date()
    .toISOString()
    .slice(0, 10)
    .replace(/\-/g, "")}${Math.random().toString(16).slice(2)}.${path
      .extname(filePath)
      .slice(1)}`;

  const fileName = `${fileOssPath}/${uploadFilePath}`

  client
    .put(fileName, filePath, {
      timeout: 300000,
    })
    .then(() => {
      clipboardy.copy(
        `https://${ossPath}/${fileOssPath}/${uploadFilePath}`,
        () => {
          console.log(chalk.magenta(`https://${ossPath}/${fileOssPath}/${uploadFilePath}`))
          console.log(chalk.blue('图片地址已经复制'))
        }
      );
    })
}

module.exports = {
  handleUpload
}