import { connect } from "react-most";

import addAssetIndexModel from "./model";
import addAssetIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const addAssetIndex = connect(function (value) {
  return addAssetIndexModel(value);
})(addAssetIndexView);

export { addAssetIndex as default };
