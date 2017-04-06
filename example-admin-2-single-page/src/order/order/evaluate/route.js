import { connect } from "react-most";

import evaluateIndexModel from "./model";
import evaluateIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const evaluateIndex = connect(function (value) {
  return evaluateIndexModel(value);
})(evaluateIndexView);

export { evaluateIndex as default };
