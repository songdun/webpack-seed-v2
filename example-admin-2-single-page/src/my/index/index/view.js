import React from "react";

import styles from "./style.less";
import { List } from "antd-mobile";
// import fetch from "srcDir/common/model/itemModel/fetch";

const defaultImg = require("srcDir/images/my-default-img.png");
const myUser = require("srcDir/images/my-user.png");
const myTruck = require("srcDir/images/my-truck.png");
const myOrder = require("srcDir/images/my-order.png");
const myCheck = require("srcDir/images/my-check.png");
const mySys = require("srcDir/images/my-sys.png");
const myAbout = require("srcDir/images/my-about.png");


// 创建react组件
const View = (props) => {
  // console.info("+++++++++++++++++++");
  console.info(props);


  return (
    <div>
      <List className={styles.my}>
        <List.Item
          className={styles.userInfo}
          arrow="horizontal"
          thumb={defaultImg}
          multipleLine
          onClick={() => {}}
        >
          18109913069
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={myUser}
          multipleLine
          onClick={() => {}}
        >
          用户注册
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={myTruck}
          multipleLine
          onClick={() => {}}
        >
          卡车档案
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={myOrder}
          multipleLine
          onClick={() => {}}
        >
          未完成订单
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={myCheck}
          multipleLine
          onClick={() => {}}
        >
          待评价订单
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={mySys}
          multipleLine
          onClick={() => {}}
        >
          系统设置
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={myAbout}
          multipleLine
          onClick={() => {}}
        >
          关于
        </List.Item>
      </List>
    </div>
  );
};

export { View as default };
