import { connect } from "react-most";

import menuModel from "./model";
import menuView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const menu = connect(function (value) {
  return menuModel(value);
})(menuView);

export { menu as default };
