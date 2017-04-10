import { connect } from "react-most";

import addAssetPackageModel from "./model";
import addAssetPackageView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const addAssetPackage = connect(function (value) {
  return addAssetPackageModel(value);
})(addAssetPackageView);

export { addAssetPackage as default };
