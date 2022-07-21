import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { buildWebpackConfig } from './webpack.prod.config.mjs'

export const buildWebpackAnalyzeConfig = (paths) => {
  const webpackProdConfig = buildWebpackConfig(paths)

  return {
    ...webpackProdConfig,
    plugins: [...webpackProdConfig.plugins, new BundleAnalyzerPlugin()],
  }
}
