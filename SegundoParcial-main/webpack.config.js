const path = require('path');
const html = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {   
        Calculos: './src/pages/Calc/Calculos.js',
        GenPassword: './src/pages/Gen_Password/GenPassword.js',
        imgViewer: './src/pages/Img/imgViewer.js',
        Calculos: './src/pages/TaskList/TaskList.js',
        Calculos: './src/pages/UnitConvert/UnitConvert.js',
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js']
    },
    module: {
        rules: [
          {
          test: /\.html$/,
          use: ["html-loader"],
          },
        ],
      },
      plugins: [
        new html({
          inject: true,
          template: './src/index.html',
          filename: './index.html',
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          },  
        }),
        new html({
          inject: true,
          template: './src/pages/calc/Calculos.html',
          filename: './pages/calc/Calculos.html',
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          }, 
        }),
        new html({
          inject: true,
          template: './src/pages/Gen_Password/GenPassword.html',
          filename: './pages/Gen_Password/GenPassword.html',
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          }, 
        }),
        new html({
          inject: true,
          template: './src/pages/Img/ImgViewer.html',
          filename: './pages/Img/ImgViewer.html',
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          }, 
        }),
        new html({
          inject: true,
          template: './src/pages/TaskList/TaskList.html',
          filename: './pages/Tasklist/TaskList.html',
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          }, 
        }),
        new html({
          inject: true,
          template: './src/pages/UnitConvert/UnitConvert.html',
          filename: './pages/UnitConvert/UnitConvert.html',
          minify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          }, 
        }),
      ]
};