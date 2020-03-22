const path = require('path');
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry point
  entry: './index.ts',
  // 出力するパス
  output: {
    path: `${__dirname}/../build/`,
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ]
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
      },
      {
        test: /\.css$/,
        use: [ 
          'vue-style-loader', 
          'css-loader'
        ]

      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          },
        ]
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /(node_modules)/
      },
    ]
  },
  resolve: {
    modules: ["src", "node_modules"],
    extensions: ['.js', '.vue', 'sass', 'scss', 'css'],
    alias: {
      '@component': path.resolve(__dirname, 'component')
    }
  },
  // プラグインを列挙
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/../index.html`
    }),
    // vue-loaderを使用するために必須
    new VueLoaderPlugin(),
    new CleanWebpackPlugin(),
  ],
};