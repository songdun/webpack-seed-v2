import React from "react";
import ReactDOM from "react-dom";

import Most from "react-most";

import IndexPage from "srcDir/index/index-121/view";
// import AddAssetPage from "srcDir/assetManagement/addAsset/index/route";


// 渲染到页面
module.exports = ReactDOM.render(
  <Most>
    <IndexPage />
  </Most>, document.getElementById("root")
);
