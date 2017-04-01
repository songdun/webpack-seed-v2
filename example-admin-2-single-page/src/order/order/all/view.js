import React from "react";

import styles from "./style.less";
import { List } from "antd-mobile";
import Rate from "antd/lib/rate";
import "antd/lib/rate/style/index.css";

// 创建react组件
const View = () => {
  console.info("order/tab");
  // console.info(props);


  return (
    <List>
      <List.Item wrap>
        <div className={styles.item}>
          救援时间：2017/03/15<span className={styles.status} >已完成</span>
        </div>
        <div className={styles.item}>
          类型：<span className={styles.rescueKinds}>救援</span>
        </div>
        <div className={styles.item}>
          救援单号：2017032615880101
        </div>
        <div className={styles.item}>
          维修店名称：某某维修店
        </div>
        <div className={styles.item}>
          评价：<Rate />
        </div>
      </List.Item>
    </List>
  );
};

export { View as default };
