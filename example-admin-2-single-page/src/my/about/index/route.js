import { connect } from "react-most";

import aboutIndexModel from "./model";
import aboutIndexView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const aboutIndex = connect(function (value) {
  return aboutIndexModel(value);
})(aboutIndexView);

export { aboutIndex as default };
