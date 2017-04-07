import React from "react";

import styles from "./style.less";
import { List, Button, Tabs } from "antd-mobile";
// import history from "srcDir/common/router/history";
// import fetch from "srcDir/common/model/itemModel/fetch";

const defaultImg = require("srcDir/images/repare-1.png");

// const detail = () => {
//   history.push("/maintenance/detail");
// };

// 创建react组件
const View = (props) => {
  // console.info("+++++++++++++++++++");
  console.info(props);


  return (
    <div>
      <List className={styles.list}>
        <List.Item
          className={styles.userInfo}
          // arrow="horizontal"
          thumb={defaultImg}
          multipleLine
          // onClick={() => detail()}
        >
          <h3 className={styles.title}>XXX汽修厂</h3>
          <p>
            <span className={styles.skill}>发动机</span>
            <span className={styles.skill}>变速箱</span>
          </p>
          <Button className={styles.bespeak}>在线预约</Button>
        </List.Item>
        <List.Item>
          <p className={styles.distance}>5.8km</p>
          <p className={styles.distance}>吉林省长春市亚泰大街001号</p>
          <Tabs defaultActiveKey="1" animated={false}>
            <Tabs.TabPane tab="介绍" key="1">
              <div className={styles.info}>
                <p>客户名：孙师傅</p>
                <p>维修时间： 2017-03-19</p>
                <p>车牌号：京Q2390</p>
                <p>车型：福特F-150</p>
              </div>
            </Tabs.TabPane>
          </Tabs>
        </List.Item>
      </List>
    </div>
  );
};

export { View as default };
