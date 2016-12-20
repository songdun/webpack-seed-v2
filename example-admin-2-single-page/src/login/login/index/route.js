import { connect } from "react-most";

import loginIndexModel from "./model";
import loginIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const loginIndex = connect(function (value) {
  return loginIndexModel(value);
})(loginIndexView);

export { loginIndex as default };
