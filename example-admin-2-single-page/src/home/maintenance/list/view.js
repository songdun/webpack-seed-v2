import React from "react";

import styles from "./style.less";
import { List } from "antd-mobile";
import history from "srcDir/common/router/history";
// import fetch from "srcDir/common/model/itemModel/fetch";

const defaultImg = require("srcDir/images/repare-1.png");

const detail = () => {
  history.push("/maintenance/detail/2");
};

// 创建react组件
const View = (props) => {
  // console.info("+++++++++++++++++++");
  console.info(props);


  return (
    <div>
      <List className={styles.list}>
        <List.Item
          className={styles.userInfo}
          arrow="horizontal"
          thumb={defaultImg}
          multipleLine
          onClick={() => detail()}
        >
          <h3 className={styles.title}>XXX汽修厂</h3>
          <p>
            <span className={styles.skill}>发动机</span>
            <span className={styles.skill}>变速箱</span>
          </p>
          <p className={styles.distance}>距离2公里</p>
        </List.Item>
      </List>
      <List className={styles.list}>
        <List.Item
          className={styles.userInfo}
          arrow="horizontal"
          thumb={defaultImg}
          multipleLine
          onClick={() => detail()}
        >
          <h3 className={styles.title}>XXX汽修厂</h3>
          <p>
            <span className={styles.skill}>发动机</span>
            <span className={styles.skill}>变速箱</span>
          </p>
          <p className={styles.distance}>距离2公里</p>
        </List.Item>
      </List>
    </div>
  );
};

export { View as default };
