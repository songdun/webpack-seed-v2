import React from "react";
// import ReactDOM from "react-dom";
import history from "srcDir/common/router/history";

import styles from "./style.less";
import { List, TextareaItem } from "antd-mobile";

import { createForm } from "rc-form";

import Rate from "antd/lib/rate";
import "antd/lib/rate/style/index.css";


// const checkLocation = () => {
//   ReactDOM.render(
//     <Map />, document.getElementById("contentContainer")
//   );
// };
const submit = () => {
  history.push("/home");
};

// 创建react组件
const View = createForm()((props) => {
  console.info("评价");
  console.info(props);
  const { getFieldProps } = props.form;
  // const { back2refresh } = props.router;


  return (
    <List>
      {
      /*
      <List.Item wrap>
        <Flex justify="between">
          <Flex.Item className={styles.imageOut}>
            <img className={styles.image} alt="img" />
          </Flex.Item>
          <Flex.Item className={styles.description}>
            <Flex justify="between">
              <span className={styles.text}>描述相符</span>
              <Rate />
              <span className={styles.text}>非常好</span>
            </Flex>
          </Flex.Item>
        </Flex>
      </List.Item>
    */
    }
      <List.Item wrap platform="android">
        <TextareaItem
          {...getFieldProps("count", {
            initialValue: "",
          })}
          rows={5}
          count={100}
          placeholder="该服务满足您的期待吗？请说一说它的优点和美中不足的地方吧"
        />
      </List.Item>
      <List.Item wrap className={styles.body}>
        <div className={styles.evaluateTitle}>救援评价：</div>
        <div><span className={styles.evaluateText}>救援速度</span> <Rate /></div>
        <div><span className={styles.evaluateText}>服务态度</span> <Rate /></div>
        <div className={styles.lastEvaluate}><span className={styles.evaluateText}>专业程度</span> <Rate /></div>
      </List.Item>
      <List.Item wrap className={styles.body}>
        <div className={styles.evaluate} onClick={submit}>评价</div>
      </List.Item>
    </List>
  );
});

export { View as default };
