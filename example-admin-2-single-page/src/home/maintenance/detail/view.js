import React from "react";

import styles from "./style.less";
import { List, Button, Tabs, Popup, Icon, Tag } from "antd-mobile";
import moment from "moment";
import "moment/locale/zh-cn";
// import history from "srcDir/common/router/history";
// import fetch from "srcDir/common/model/itemModel/fetch";

const defaultImg = require("srcDir/images/repare-1.png");

// const detail = () => {
//   history.push("/maintenance/detail");
// };

const isIPhone = new RegExp("\\biPhone\\b|\\biPod\\b", "i").test(window.navigator.userAgent);
let maskProps;
if (isIPhone) {
  // Note: the popup content will not scroll.
  maskProps = {
    onTouchStart: e => e.preventDefault(),
  };
}

const onClose = () => {
  Popup.hide();
};

const renderTag = (arr) => arr.map((i) => (
  <Tag className={styles.tag}>
    {
      moment().add(i, "days").locale("zh-cn")
      .utcOffset(8)
      .format("dddd")
    }
  </Tag>
));

const onClick = () => {
  Popup.show(<div>
    <List
      className={styles.poplist}
      renderHeader={() => (
        <div style={{ position: "relative" }}>
          项目选择
          <span
            style={{
              position: "absolute", right: 3, top: -5,
            }}
            onClick={() => onClose()}
          >
            <Icon type="cross" />
          </span>
        </div>)}
    >
      <div className={styles.flex}>
        <Tag className={styles.tag}>预约保养</Tag>
        <Tag className={styles.tag}>预约维修</Tag>
        <Tag className={styles.tag}>钣金喷漆</Tag>
      </div>
    </List>
    <List
      className={styles.poplist}
      renderHeader={() => (
        <div style={{ position: "relative" }}>
          时间选择
        </div>)}
    >
      <div className={styles.flex}>
        <Tag className={styles.tag}>今天(
        {
          moment().locale("zh-cn").utcOffset(8)
          .format("dddd")
        }
        )</Tag>
        <Tag className={styles.tag}>明天(
        {
          moment().add(1, "days").locale("zh-cn")
          .utcOffset(8)
          .format("dddd")
        }
        )</Tag>
      </div>
      <div className={styles.flex}>
        {
          renderTag([2, 3, 4, 5, 6])
        }
      </div>
      <div className={styles.flex}>
        <Tag className={styles.tag}>08:00-10:00</Tag>
        <Tag className={styles.tag}>10:00-12:00</Tag>
        <Tag className={styles.tag}>12:00-14:00</Tag>
        <Tag className={styles.tag}>14:00-16:00</Tag>
        <Tag className={styles.tag}>16:00-18:00</Tag>
        <Tag className={styles.tag}>18:00-20:00</Tag>
      </div>
    </List>
    <Button type="primary" onClick={() => onClose()} style={{ borderRadius: "0" }}>确认预约</Button>
  </div>, { animationType: "slide-up", maskProps, maskClosable: false });
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
          <Button className={styles.bespeak} onClick={onClick}>在线预约</Button>
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
