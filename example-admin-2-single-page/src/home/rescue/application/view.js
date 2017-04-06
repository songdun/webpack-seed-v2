import React from "react";
import ReactDOM from "react-dom";
import Cookies from "js-cookie";

import styles from "./style.less";
import { List, Flex, TextareaItem } from "antd-mobile";
import { createForm } from "rc-form";
import Map from "srcDir/home/rescue/checkLocation/check.js";
import history from "srcDir/common/router/history";


const checkLocation = () => {
  ReactDOM.render(
    <Map />, document.getElementById("contentContainer")
  );
};

const submit = () => {
  history.push("/rescueStatus");
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
          问题描述：
        </div>
        <div className={styles.item}>
          <TextareaItem
            {...getFieldProps("count", {
              initialValue: "",
            })}
            rows={5}
            count={100}
            placeholder="请输入..."
          />
        </div>
      </List.Item>
      <List.Item wrap platform="android" onClick={checkLocation} style={{ textAlign: "center" }}>
        <div className={styles.getLocation}></div>
        <div className={styles.locationAddress}>
          <span className={styles.locationIcon}></span>
          <span className={styles.address}>{Cookies.get("locationAddress")}</span>
        </div>
      </List.Item>
      <List.Item wrap className={styles.blank}>
      </List.Item>
      <List.Item wrap className={styles.button}>
        <Flex>
          <Flex.Item onClick={back2refresh}>
            <div style={{ textAlign: "center" }}>取消</div>
          </Flex.Item>
          <Flex.Item onClick={submit}>
            <div style={{ textAlign: "center", color: "#fff" }}>救援</div>
          </Flex.Item>
        </Flex>
      </List.Item>
    </List>
  );
});

export { View as default };
