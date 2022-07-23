import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export const buildWebpackBaseConfig = (paths) => ({
  entry: [path.resolve(paths.src, 'index.tsx')],
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(paths.build),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: [
          {
            loader: 'imports-loader',
            options: {
              imports: ['named preact h', 'named preact Fragment'],
            },
          },
          'swc-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        use: ['svg-url-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: path.join(paths.files, 'index.html'),
    }),
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.tsx', '.ts', '.js', '.json'],
  },
})
