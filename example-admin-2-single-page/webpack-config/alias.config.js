var path = require('path');
var dirVars = require('./base/dir-vars.config.js');
module.exports = {
  // 模块别名的配置，为了使用方便，一般来说所有模块都是要配置一下别名的
  /* 各种目录 */
  srcRootDir: dirVars.srcRootDir,
  configDir: dirVars.configDir,
  srcDir: dirVars.srcDir,
  /* components */
  src: path.resolve(dirVars.srcDir, 'index'),
  /* logic */
  cm: path.resolve(dirVars.logicDir, 'common.module'),
  cp: path.resolve(dirVars.logicDir, 'common.page'),


  /* config */
  configModule: path.resolve(dirVars.configDir, 'common.config'),
};
