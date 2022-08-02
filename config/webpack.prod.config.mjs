import CompressionPlugin from 'compression-webpack-plugin'

import { buildWebpackBaseConfig } from './webpack.base.config.mjs'

export const buildWebpackConfig = (paths) => {
  const webpackBaseConfig = buildWebpackBaseConfig(paths)

  return {
    mode: 'production',
    ...webpackBaseConfig,
    devtool: false,
    externals: {
      '@axe-core/react': 'devtools',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxSize: 200000,
      },
    },
    performance: {
      hints: 'warning',
      maxAssetSize: 250000,
      maxEntrypointSize: 250000,
    },
    plugins: [...webpackBaseConfig.plugins, new CompressionPlugin()],
  }
}
