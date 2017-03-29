const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dirVars = require('../base/dir-vars.config.js');
const includeDirs = [dirVars.srcRootDir];
const svgDirs = [
  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  // path.resolve(__dirname, 'src/my-project-svg-foler'),  // 2. 自己私人的 svg 存放目录
];

module.exports = [
  {
    test: require.resolve('jquery'),
    loader: 'expose?$!expose?jQuery',
  },
  {
    test: /\.css$/,
    include: includeDirs,
    loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&minimize&-autoprefixer!postcss'),
  },
  {
    test: /\.less$/,
    include: includeDirs,
    loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]&minimize&-autoprefixer!postcss!less'),
  },
  {
    test: /\.jsx?$/,
    include: includeDirs,
    exclude: /(node_modules|bower_components)/,
    extensions: ['', '.web.js', '.json', '.jsx', '.js'],
    loader: 'babel-loader',
    query: {
      presets: ['es2015-loose', 'es2015', 'react'],
      cacheDirectory: true,
      plugins: ['transform-runtime', 'transform-object-assign', [
        "import", {
          libraryName: 'antd-mobile',
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
    test: /\.(svg)$/i,
    loader: 'svg-sprite',
    include: svgDirs,  // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
  },
];
