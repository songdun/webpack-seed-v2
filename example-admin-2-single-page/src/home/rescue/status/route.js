import { connect } from "react-most";

import rescueIndexModel from "./model";
import rescueIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const rescueIndex = connect(function (value) {
  return rescueIndexModel(value);
})(rescueIndexView);

export { rescueIndex as default };
