const path = require('path')

const json = require('@rollup/plugin-json')
const resolve = require('@rollup/plugin-node-resolve')
const commonjs = require("@rollup/plugin-commonjs")


module.exports = {
  input: path.resolve(__dirname, './index.cjs'),
  output: {
    file: path.resolve(__dirname, './bin/index.js'),
    format: 'cjs'
  },
  plugins: [
    json(),
    resolve(),
    commonjs()]
}