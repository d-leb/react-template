import ora from 'ora'
import rm from 'rimraf'
import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'

import { paths } from './utils.mjs'
import { buildWebpackConfig } from '../config/webpack.devel.config.mjs'

console.clear()
console.log("Begin build...")

const spinner = ora("Building for development...\n")
spinner.start()

const webpackConfig = buildWebpackConfig(paths)
const { devServer: devServerConfig } = webpackConfig

rm(paths.build, (rmError) => {
   if (rmError) {
     throw rmError
   }

  const compiler = webpack(webpackConfig, (webpackError, stats) => {
    spinner.stop()

    if (webpackError) {
      throw webpackError
    }

    console.log("Build complete.\n")

    process.stdout.write(`${
        stats.toString({
          colors: true,
          modules: false,
          children: false,
          chunks: false,
          chunkModules: false
        })
      }\n\n`)

    const server = new webpackDevServer(devServerConfig, compiler)
    server.start();
  })
})
