import React from "react";
import ReactDOM from "react-dom";

import styles from "./style.less";
import { List, Flex, TextareaItem } from "antd-mobile";
import { createForm } from "rc-form";
import Map from "srcDir/home/rescue/checkLocation/view.js";

const checkLocation = () => {
  ReactDOM.render(
    <Map />, document.getElementById("contentContainer")
  );
};

// 创建react组件
const View = createForm()((props) => {
  // console.info("order/tab");
  // console.info(props);
  const { getFieldProps } = props.form;
  const { back2refresh } = props.router;


  return (
    <List className={styles.wrapper}>
      <List.Item wrap>
        <div className={styles.item}>
          车主姓名：李某某
        </div>
        <div className={styles.item}>
          联系电话：18801480027
        </div>
        <div className={styles.item}>
          问题描述：2017032615880101
        </div>
        <div className={styles.item}>
          <TextareaItem
            {...getFieldProps("count", {
              initialValue: "请输入...",
            })}
            rows={5}
            count={100}
          />
        </div>
      </List.Item>
      <List.Item wrap platform="android" onClick={checkLocation} style={{ textAlign: "center" }}>
        <div className={styles.getLocation}></div>
        <div className={styles.locationAddress}>
          <span className={styles.locationIcon}></span>
          <span className={styles.address}>吉林省长春市亚泰大街001号</span>
        </div>
      </List.Item>
      <List.Item wrap className={styles.blank}>
      </List.Item>
      <List.Item wrap className={styles.button}>
        <Flex>
          <Flex.Item onClick={back2refresh}>
            <div style={{ textAlign: "center" }}>取消</div>
          </Flex.Item>
          <Flex.Item>
            <div style={{ textAlign: "center", color: "#fff" }}>救援</div>
          </Flex.Item>
        </Flex>
      </List.Item>
    </List>
  );
});

export { View as default };
