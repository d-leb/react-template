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
        maxSize: 204800,
      },
    },
    performance: {
      hints: 'warning',
      maxAssetSize: 204800,
      maxEntrypointSize: 327680,
    },
    plugins: [...webpackBaseConfig.plugins, new CompressionPlugin()],
  }
}
