import React from "react";
import ReactDOM from "react-dom";

import Most from "react-most";

import IndexPage from "srcDir/index/index-121/view";

// import fetch from "srcDir/common/model/itemModel/fetch";

// import store from "store2";

// const origin = window.location.origin;
// if (!store.session.get("logined")) {
//   // console.log("跳转到登录页面");
//   window.location.href = origin + "/login/login/page.html";
//   // 渲染到页面
//   module.exports = false;
// } else {
// 	// 渲染到页面
//   module.exports = ReactDOM.render(
//     <Most>
//       <IndexPage />
//     </Most>, document.getElementById("root")
// 	);
// }

// 防抖
import { attach } from "fastclick";
attach(document.body);
// 微信
import "srcDir/common/weichat/index";

module.exports = ReactDOM.render(
  <Most>
    <IndexPage />
  </Most>, document.getElementById("root")
);
