import { connect } from "react-most";

import truckInfoIndexModel from "./model";
import truckInfoIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const truckInfoIndex = connect(function (value) {
  return truckInfoIndexModel(value);
})(truckInfoIndexView);

export { truckInfoIndex as default };
