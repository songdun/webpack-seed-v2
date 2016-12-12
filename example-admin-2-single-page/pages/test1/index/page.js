require('cp');
require('!!bootstrap-webpack!bootstrapConfig');
require('lessDir/base.less');
require('./page.less');
const config = require('configModule');

$(() => {
  /* global IS_PRODUCTION:true */ // 由于ESLint会检测没有定义的变量，因此需要这一个`global`注释声明IS_PRODUCTION是一个全局变量(当然在本例中并不是)来规避warning
  if (!IS_PRODUCTION) {
    console.log('test1-page');
    console.log(config.API_ROOT);
    console.info(12312);
  }
});
