import { connect } from "react-most";

import myIndexModel from "./model";
import myIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const myIndex = connect(function (value) {
  return myIndexModel(value);
})(myIndexView);

export { myIndex as default };
