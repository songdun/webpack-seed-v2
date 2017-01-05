import React from "react";
import ReactDOM from "react-dom";
import Most from "react-most";
// import styles from "./style.less";
// import { Menu, Icon } from "antd";
// import { BrowserRouter, Match, Link } from "react-router";
import { BrowserRouter } from "react-router";

// const SubMenu = Menu.SubMenu;

/**
 * 加载路由
 *
 * @param {[type]} componentPath [路由地址]
 *
 * @return {[type]} [路由对应页面组件]
 */
// const home = (componentPath) => {
//       // require("srcDir/" + val + "/route.js")
//       // console.log(require("srcDir/" + componentPath + "/route.js"))
//   const RoutePage = require("srcDir/" + componentPath + "/route.js");
//   console.info("123123");
//   return <RoutePage />;
// };


// const RoutePage = require("srcDir/assetManagement/addAsset/index/route.js");
//   console.info(RoutePage);
//   ReactDOM.render(
//     <Most>
//       <RoutePage />
//     </Most>, document.getElementById("root")
//   );
//   return true;
// const RoutePage = require("srcDir/assetManagement/addAsset/index/route.js");
import AddAssetPage from "srcDir/assetManagement/addAsset/index/route";
// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// );
const click = () => {
  ReactDOM.render(
    <Most>
      <AddAssetPage />
    </Most>, document.getElementById("root")
  );
};

// 创建react组件
const View = (props) => {
  console.log(props);
  return (
    <BrowserRouter>
      <div>
        <div onClick={click}>123123
        {/*
        <Menu
          mode="inline"
          theme={"dark"}
          className={props.className ? `${styles.menu} ${props.className}` : styles.menu}
        >
          {
            props.results && Object.keys(props.results.MenuList).map(
              (value, index) =>
                <SubMenu key={`sub${value}`} title={<span><Icon type={props.results.MenuIcon[index]} /><span>{value}</span></span>}>
                {
                  props.results.MenuList[value].map(
                    (val, inx) =>
                      <Menu.Item key={`${value}-${inx}`}>
                        <Link to={val.path}>{val.name}</Link>
                        {
                          console.log(val.component)
                        }
                      </Menu.Item>
                  )
                }
                </SubMenu>
            )
          }
        </Menu>
        {
          props.results && Object.keys(props.results.MenuList).map(
            (value) =>
              props.results.MenuList[value].map(
                (val) =>
                  <Match
                    exactly
                    pattern={val.path}
                    component={Home}
                  />

              )
          )
        }
      */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export { View as default };
