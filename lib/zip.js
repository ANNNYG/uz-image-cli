const path = require('path')
const tinify = require('tinify')
const chalk = require('chalk')

const { readSettings } = require('../utils/index.js')

const settings = readSettings()

const handleZip = async (filePath) => {
  const key = settings.TINIFY_KEY
  tinify.key = key

  const source = await tinify.fromFile(filePath);
  const basename = `[zip]${path.basename(filePath)}`;
  const downloadPath = path.resolve(filePath, '../')

  await source.toFile(`${downloadPath}/${basename}`);
  console.log(chalk.blue('图片压缩成功'))
  return downloadPath
}

module.exports = {
  handleZip
}