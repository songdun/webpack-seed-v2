import { connect } from "react-most";

import orderIndexModel from "./model";
import orderIndexView from "../view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const orderIndex = connect(function (value) {
  return orderIndexModel(value);
})(orderIndexView);

export { orderIndex as default };
