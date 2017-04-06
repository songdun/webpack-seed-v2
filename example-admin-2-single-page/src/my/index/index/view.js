import React from "react";

import styles from "./style.less";
import { List } from "antd-mobile";
import history from "srcDir/common/router/history";
// import fetch from "srcDir/common/model/itemModel/fetch";

// const defaultImg = require("srcDir/images/my-default-img.png");
const myUser = require("srcDir/images/my-user.png");
const myTruck = require("srcDir/images/my-truck.png");
// const myOrder = require("srcDir/images/my-order.png");
// const myCheck = require("srcDir/images/my-check.png");
// const mySys = require("srcDir/images/my-sys.png");
const myAbout = require("srcDir/images/my-about.png");

const editUserInfo = () => {
  console.log("/userInfo");
  history.push("/userInfo");
};

const register = () => {
  history.push("/register");
};

const editTruckInfo = () => {
  history.push("/truckInfo");
};

const about = () => {
  history.push("/about");
};

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
          // thumb={defaultImg}
          multipleLine
          onClick={() => editUserInfo()}
        >
          18109913069
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={myUser}
          multipleLine
          platform="android"
          onClick={() => register()}
        >
          用户注册
        </List.Item>
        <List.Item
          arrow="horizontal"
          thumb={myTruck}
          multipleLine
          platform="android"
          onClick={() => editTruckInfo()}
        >
          卡车档案
        </List.Item>
        {/*
          <List.Item
            arrow="horizontal"
            thumb={myOrder}
            multipleLine
            platform="android"
            onClick={() => {}}
          >
            未完成订单
          </List.Item>
          <List.Item
            arrow="horizontal"
            thumb={myCheck}
            multipleLine
            platform="android"
            onClick={() => {}}
          >
            待评价订单
          </List.Item>
        */}
        {/*
        <List.Item
          arrow="horizontal"
          thumb={mySys}
          multipleLine
          platform="android"
          onClick={() => {}}
        >
          系统设置
        </List.Item>
        */}
        <List.Item
          arrow="horizontal"
          thumb={myAbout}
          multipleLine
          platform="android"
          onClick={() => about()}
        >
          关于
        </List.Item>
      </List>
    </div>
  );
};

export { View as default };
