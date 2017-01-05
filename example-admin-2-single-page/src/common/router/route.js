import { connect } from "react-most";

import routerModel from "./model";
import routerView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const router = connect(function (value) {
  return routerModel(value);
})(routerView);

export { router as default };
