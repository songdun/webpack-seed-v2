import React from "react";
import ReactDOM from "react-dom";

import Most from "react-most";

// import IndexPage from "srcDir/index/index";
import AddAssetPage from "srcDir/assetManagement/addAsset/index/route";


// 渲染到页面
module.exports = ReactDOM.render(
  <Most>
    <AddAssetPage />
  </Most>, document.getElementById("root")
);
