const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  entry: {
    'polyfills': './client/src/polyfills.ts',
    'app': './client/src/main.ts'
  },
  output:{
    path: path.resolve(__dirname, 'client/dist'),     // путь к каталогу выходных файлов - папка public
    publicPath: '/',
    filename: '[name].[fullhash].js'
  },
  devServer: {
    historyApiFallback: true,
    port: 4200,
    open: true
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module:{
    rules:[   //загрузчик для ts
      {
        test: /\.ts$/, // определяем тип файлов
        use: [
          {
            loader: 'ts-loader',
            options: { configFile: path.resolve(__dirname, 'tsconfig.json') }
          },
          'angular2-template-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[fullhash].[ext]',
        }
      },
      {
        test: /\.css$/,
        exclude: path.resolve(__dirname, 'src/app'),
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src/app'),
        loader: 'raw-loader'
      }
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core/,
      path.resolve(__dirname, 'src'), // каталог с исходными файлами
      {} // карта маршрутов
    ),
    new HtmlWebpackPlugin({
      template: 'client/src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false
      }
    })
  ]
}