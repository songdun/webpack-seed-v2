import { connect } from "react-most";

import homeIndexModel from "./model";
import homeIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const homeIndex = connect(function (value) {
  return homeIndexModel(value);
})(homeIndexView);

export { homeIndex as default };
