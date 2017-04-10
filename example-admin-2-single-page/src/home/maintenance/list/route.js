import { connect } from "react-most";

import listIndexModel from "./model";
import listIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const listIndex = connect(function (value) {
  return listIndexModel(value);
})(listIndexView);

export { listIndex as default };
