const fs = require('fs')
const path = require('path')

const yaml = require('js-yaml')

const SETTING_PATH = '../conf/settings.yaml'
const PATH = path.resolve(__dirname, SETTING_PATH)

const readSettings = (filePath = PATH) => {
  try {
    const data = fs.readFileSync(filePath, 'utf8')
    const settingsData = yaml.load(data)
    return settingsData ? settingsData : {}
  } catch (error) {
    console.error('配置文件读取失败', error)
  }
}

const writeSettings = (data, filePath = PATH) => {
  try {
    const yamlStr = yaml.dump(data);
    fs.appendFileSync(filePath, yamlStr, 'utf8')
  } catch (error) {
    console.error('配置文件写入失败')
  }
}

module.exports = {
  readSettings,
  writeSettings,
}