import React from "react";
import ReactDOM from "react-dom";

import Most from "react-most";

import IndexPage from "./index/index";
// import AddAssetPage from './pages/assetManagement/addAsset/index/route';

// 渲染到页面
module.exports = ReactDOM.render(
	<Most>
		<IndexPage />
	</Most>, document.getElementById("root")
);
