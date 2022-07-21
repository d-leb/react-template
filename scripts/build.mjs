import ora from 'ora'
import rm from 'rimraf'
import webpack from 'webpack'

import { paths } from './utils.mjs'
import { buildWebpackConfig } from '../config/webpack.prod.config.mjs'

console.log('Begin build...')

const spinner = ora('Building for production...\n')
spinner.start()

const webpackConfig = buildWebpackConfig(paths)

rm(paths.build, (rmError) => {
  if (rmError) {
    throw rmError
  }

  webpack(webpackConfig, (webpackError, stats) => {
    spinner.stop()

    if (webpackError) {
      throw webpackError
    }

    console.log('Build complete.\n')

    process.stdout.write(
      `${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      })}\n\n`
    )
  })
})
