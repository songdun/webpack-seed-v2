import React from "react";
// import ReactDOM from "react-dom";

import styles from "./style.less";
import { List, Flex, Steps } from "antd-mobile";
const Step = Steps.Step;
// import { createForm } from "rc-form";


// const checkLocation = () => {
//   ReactDOM.render(
//     <Map />, document.getElementById("contentContainer")
//   );
// };

// 创建react组件
const View = (props) => {
  console.info("救援状态");
  console.info(props);
  // const { getFieldProps } = props.form;
  // const { back2refresh } = props.router;


  return (
    <List className={styles.wrapper}>
      <List.Item wrap className={styles.header}>
        <Flex justify="between">
          <Flex.Item className={styles.listNumber}>救援单号: 2017032615880101</Flex.Item>
          <Flex.Item className={styles.cancel}>取消救援</Flex.Item>
        </Flex>
      </List.Item>
      <List.Item wrap platform="android" className={styles.nav}>
        <Flex justify="between" align="baseline">
          <Flex.Item className={styles.status}>救援发出</Flex.Item>
          <Flex.Item className={styles.status}>中心派单</Flex.Item>
          <Flex.Item className={styles.status}>正在援救</Flex.Item>
          <Flex.Item className={styles.status}>等待评价</Flex.Item>
        </Flex>
      </List.Item>
      <List.Item wrap className={styles.body}>
        <Steps size="small" current="3" className={styles.steps}>
          <Step title="救援请求已发出" description="2017/03/09 11:22" />
          <Step title="中心已确认，等待派单" description="2017/03/09 11:23" />
          <Step title="已派单，某某汽修厂  联系电话：18801518987" description="2017/03/09 11:24" />
          <Step title="救援评价" description="" />
        </Steps>
        <div className={styles.evaluate}>去评价</div>
      </List.Item>
    </List>
  );
};

export { View as default };
