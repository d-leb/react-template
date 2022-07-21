import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

export const buildWebpackBaseConfig = (paths) => ({
  entry: [path.resolve(paths.src, 'index.js')],
  output: {
    filename: '[name].[fullhash].js',
    path: path.resolve(paths.build)
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      template: path.join(paths.files, 'index.html')
    })
  ],
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.js']
  }
})
