import TerserPlugin from 'terser-webpack-plugin';

export default {
  mode: 'production',
  entry: './src/scripts/index.js',
  devtool: 'cheap-source-map',
  optimization: {
    minimize: true,
    usedExports: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true
          },
          format: {
            comments: false
          }
        },
        extractComments: false
      })
    ]
  },
  output: {
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
