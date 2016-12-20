import React from "react";
import ReactDOM from "react-dom";

import Most from "react-most";

import LoginPage from "srcDir/login/login/index/route";


// 渲染到页面
module.exports = ReactDOM.render(
  <Most>
    <LoginPage />
  </Most>, document.getElementById("root")
);
