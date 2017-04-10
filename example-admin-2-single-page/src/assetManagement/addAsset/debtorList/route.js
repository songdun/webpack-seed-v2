import { connect } from "react-most";

import debtorIndexModel from "./model";
import debtorIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
// const debtorIndex = connect(function (value) {
//   return debtorIndexModel(value);
// })(debtorIndexView);

const debtorIndex = (id) => connect(function (value) {
  return debtorIndexModel(id)(value);
})(debtorIndexView);

export { debtorIndex as default };
