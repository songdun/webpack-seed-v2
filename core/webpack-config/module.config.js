const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dirVars = require('./base/dir-vars.config.js');
const includeDirs = [dirVars.coreDir];
module.exports = {
  preLoaders: [{
    test: /\.js$/,
    loader: 'eslint',
    include: includeDirs,
    exclude: [/bootstrap/],
  }],

  loaders: [
    {
      test: require.resolve('jquery'),
      loader: 'expose?$!expose?jQuery',
    },
    {
      test: /\.css$/,
      include: [dirVars.coreDir, dirVars.vendorDir, dirVars.antdDir],
      loader: ExtractTextPlugin.extract('css?minimize&-autoprefixer!postcss'),
    },
    {
      test: /\.less$/,
      include: includeDirs,
      loader: ExtractTextPlugin.extract('css?minimize&-autoprefixer!postcss!less'),
    },
    {
      test: /\.jsx?$/,
      include: includeDirs,
      exclude: /(node_modules|bower_components)/,
      extensions: ['.jsx', '.js'],
      loader: 'babel-loader',
      query: {
        presets: ['es2015-loose', 'es2015', 'react'],
        cacheDirectory: true,
        plugins: ['transform-runtime', 'transform-object-assign', [
          "import", {
            libraryName: 'antd',
            style: 'css',
          }
        ]],
      },
    },
    {
      test: /\.html$/,
      include: includeDirs,
      loader: 'html',
    },
    {
      test: /\.ejs$/,
      include: includeDirs,
      loader: 'ejs',
    },
    {
      // 图片加载器，雷同file-loader，更适合图片，可以将较小的图片转成base64，减少http请求
      // 如下配置，将小于8192byte的图片转成base64码
      test: /\.(png|jpg|gif)$/,
      include: includeDirs,
      loader: 'url?limit=8192&name=./static/img/[hash].[ext]',
    },
    {
      // 专供iconfont方案使用的，后面会带一串时间戳，需要特别匹配到
      test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
      include: includeDirs,
      loader: 'file?name=./static/fonts/[name].[ext]',
    },
  ],
};
