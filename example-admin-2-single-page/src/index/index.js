// import React from 'react';
// import ReactDOM from 'react-dom';

import { connect } from "react-most";

import indexModel from "./models/index";
import indexView from "./views/index";

// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
// eslint-disable-next-line
const MostTypeNSearch = connect(function (value) {
	return indexModel(value);
})(indexView);

export { MostTypeNSearch as default };
