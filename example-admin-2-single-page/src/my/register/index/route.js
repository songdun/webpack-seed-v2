import { connect } from "react-most";

import registerIndexModel from "./model";
import registerIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const registerIndex = connect(function (value) {
  return registerIndexModel(value);
})(registerIndexView);

export { registerIndex as default };
