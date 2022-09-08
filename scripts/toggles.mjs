import { readFile, writeFile } from 'fs'
import rm from 'rimraf'

import { files, paths } from './utils.mjs'

const args = process.argv.slice(2)
const [toggleItem, state] = args
const isEnable = state === 'enable'

if (!isEnable && state !== 'disable') {
  throw `Unexpected state: ${state}`
}

const toggleNodeModules = (enable) => {
  readFile(files.yarnrc, (readError, fileData) => {
    if (readError) {
      throw readError
    }

    const matchEnabled = 'nodeLinker: node-modules'
    const matchDisabled = '# nodeLinker: node-modules'
    const matchString = enable ? matchDisabled : matchEnabled
    const replaceString = `${enable ? '' : '# '}nodeLinker: node-modules`
    const prevFileData = fileData.toString()

    if (!enable && new RegExp(matchDisabled, 'g').test(prevFileData)) {
      console.log('node_modules is already disabled.')
      return
    }

    if (enable && !new RegExp(matchDisabled, 'g').test(prevFileData)) {
      console.log('node_modules is already enabled.')
      return
    }

    const newFileData = prevFileData.replace(RegExp(matchString, 'g'), replaceString)
    console.log('Updating yarnrc...')
    writeFile(files.yarnrc, newFileData, (writeError) => {
      if (writeError) {
        throw writeError
      }
      console.log('   updated.')

      if (!enable) {
        console.log('Removing node_modules directory...')
        rm(paths.nodeModules, (rmError) => {
          if (rmError) {
            throw rmError
          }
          console.log('   removed.')
        })
      }
    })
  })
}

switch (toggleItem) {
  case 'node_modules':
    toggleNodeModules(isEnable)
    break
  default:
    console.log(`Unsupported toggle item: ${toggleItem}`)
    break
}
