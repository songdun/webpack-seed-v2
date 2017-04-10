import { connect } from "react-most";

import userInfoIndexModel from "./model";
import userInfoIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const userInfoIndex = connect(function (value) {
  return userInfoIndexModel(value);
})(userInfoIndexView);

export { userInfoIndex as default };
