#!/usr/bin/env node
const { startProgram, checkConfig } = require("./lib/program.js")
const { handleZip } = require("./lib/zip.js")
const { handleUpload } = require('./lib/upload.js')

const start = async () => {
  await checkConfig()
  const option = startProgram()

  const isZip = !!option.zip
  const isUpload = !!option.upload
  let filePath = option.filePath

  if (isZip) filePath = handleZip(filePath)
  if (isUpload) handleUpload(filePath)
}

start()

