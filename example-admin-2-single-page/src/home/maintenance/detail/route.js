import { connect } from "react-most";

import detailIndexModel from "./model";
import detailIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const detailIndex = connect(function (value) {
  return detailIndexModel(value);
})(detailIndexView);

export { detailIndex as default };
