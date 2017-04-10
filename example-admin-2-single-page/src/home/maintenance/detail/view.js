import React from "react";

import styles from "./style.less";
import { List, Button, Tabs, Popup, Icon, DatePicker } from "antd-mobile";
import moment from "moment";
import "moment/locale/zh-cn";
// import history from "srcDir/common/router/history";
// import fetch from "srcDir/common/model/itemModel/fetch";

const defaultImg = require("srcDir/images/repare-1.png");

// const detail = () => {
//   history.push("/maintenance/detail");
// };

const zhNow = moment().locale("zh-cn").utcOffset(8);
const minDate = zhNow;
const maxDate = moment().add(14, "days").locale("zh-cn")
.utcOffset(8);

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

const onDateChange = (val) => {
  console.log("onDateChange");
  console.log(val.format("YYYY-MM-DD"));
};

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
        <div className={styles.radio}>
          <input id="type1" type="radio" name="type" />
          <label htmlFor="type1">预约保养</label>
        </div>
        <div className={styles.radio}>
          <input id="type2" type="radio" name="type" />
          <label htmlFor="type2">预约维修</label>
        </div>
        <div className={styles.radio}>
          <input id="type3" type="radio" name="type" />
          <label htmlFor="type3">钣金喷漆</label>
        </div>
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
        <DatePicker
          mode="date"
          title="选择日期"
          minDate={minDate}
          maxDate={maxDate}
          onChange={onDateChange}
        >
          <List.Item
            className={styles.chooseDate}
            arrow="horizontal"
            multipleLine
            platform="android"
            onClick={() => {}}
          >
            请选择日期
          </List.Item>
        </DatePicker>
      </div>
      <div className={styles.flex}>
        <div className={styles.radio}>
          <input id="time1" type="radio" name="time" />
          <label htmlFor="time1">08:00-10:00</label>
        </div>
        <div className={styles.radio}>
          <input id="time2" type="radio" name="time" />
          <label htmlFor="time2">10:00-12:00</label>
        </div>
        <div className={styles.radio}>
          <input id="time3" type="radio" name="time" />
          <label htmlFor="time3">12:00-14:00</label>
        </div>
        <div className={styles.radio}>
          <input id="time4" type="radio" name="time" />
          <label htmlFor="time4">14:00-16:00</label>
        </div>
        <div className={styles.radio}>
          <input id="time5" type="radio" name="time" />
          <label htmlFor="time5">16:00-18:00</label>
        </div>
        <div className={styles.radio}>
          <input id="time6" type="radio" name="time" />
          <label htmlFor="time6">18:00-20:00</label>
        </div>
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
