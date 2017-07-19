import route from "srcDir/common/route/index";

import model from "./model";
import view from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
// const addAssetIndex = connect(function (value) {
//   return addAssetIndexModel(value);
// })(addAssetIndexView);

// export { addAssetIndex as default };

export default route({ model, view });
