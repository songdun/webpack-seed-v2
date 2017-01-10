import { connect } from "react-most";

import modalFrameModel from "./model";
import modalFrameView from "./view";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
const modalFrame = connect(function (value) {
  return modalFrameModel(value);
})(modalFrameView);

export { modalFrame as default };
