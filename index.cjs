#!/usr/bin/env node
const { startProgram, checkConfig } = require("./lib/program.cjs")
const { handleZip } = require("./lib/zip.cjs")
const { handleUpload } = require('./lib/upload.cjs')

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

