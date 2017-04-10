import React from "react";

import styles from "./style.less";
import { List, Button, Flex } from "antd-mobile";
// import moment from "moment";
// import "moment/locale/zh-cn";
import history from "srcDir/common/router/history";
// import fetch from "srcDir/common/model/itemModel/fetch";

const defaultImg = require("srcDir/images/repare-1.png");

const evaluate = () => {
  history.push("/evaluate");
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
            <span className={styles.skill}>底盘</span>
          </p>
          <Button className={styles.bespeak}>支付</Button>
        </List.Item>
        <List.Item>
          <p><span className={styles.itemName}>工单编号：</span>2017032615880101</p>
        </List.Item>
        <List.Item>
          <p><span className={styles.itemName}>客户姓名：</span>李先生</p>
          <p><span className={styles.itemName}>联系电话：</span>18155601791</p>
          <p><span className={styles.itemName}>车牌号：</span>京Q2390</p>
          <p><span className={styles.itemName}>发动机号：</span>Q239011</p>
          <p><span className={styles.itemName}>底盘号：</span>Q239330</p>
          <p><span className={styles.itemName}>车型：</span>福特F-150</p>
          <p><span className={styles.itemName}>行驶里程：</span>1280公里</p>
        </List.Item>
        <List.Item>
          <p><span className={styles.itemName}>预约时间：</span>2017年03月15日 13时</p>
          <p><span className={styles.itemName}>进场时间：</span>2017年03月15日 15时</p>
          <p><span className={styles.itemName}>交车时间：</span>2017年03月17日 09时</p>
        </List.Item>
        <List.Item>
          <p><span>维修技师：</span>张某某</p>
          <p>处理过程描述：</p>
          <p style={{ whiteSpace: "normal" }}>1.前轮定位角失准，前束过大。2.1.前轮定位角失准，前束过大。1.前轮定位角失准，前束过大。1.前轮定位角失准，前束过大。1.前轮定位角失准，前束过大。</p>
        </List.Item>
        <List.Item>
          <p>工时费详情：</p>
          <Flex justify="center">
            <Flex.Item className={styles.flex}>
              001
            </Flex.Item>
            <Flex.Item>
              前轮定位角调节
            </Flex.Item>
            <Flex.Item className={styles.right}>
              <span className={styles.redText}>100.00</span>
            </Flex.Item>
          </Flex>
          <Flex justify="center">
            <Flex.Item className={styles.flex}>
              002
            </Flex.Item>
            <Flex.Item>
              前轮胎修补充气
            </Flex.Item>
            <Flex.Item className={styles.right}>
              <span className={styles.redText}>200.00</span>
            </Flex.Item>
          </Flex>
          <Flex justify="center">
            <Flex.Item className={styles.right}>
              <span className={styles.fw400}>合计：</span><span className={styles.redText}>300.00</span>
            </Flex.Item>
          </Flex>
        </List.Item>
        <List.Item>
          <p>配件费详情：</p>
          <Flex justify="center">
            <Flex.Item className={styles.flex}>
              001
            </Flex.Item>
            <Flex.Item>
              前轮定位角调节
            </Flex.Item>
            <Flex.Item className={styles.right}>
              <span className={styles.redText}>100.00</span>
            </Flex.Item>
          </Flex>
          <Flex justify="center">
            <Flex.Item className={styles.flex}>
              002
            </Flex.Item>
            <Flex.Item>
              前轮胎修补充气
            </Flex.Item>
            <Flex.Item className={styles.right}>
              <span className={styles.redText}>200.00</span>
            </Flex.Item>
          </Flex>
          <Flex justify="center">
            <Flex.Item className={styles.right}>
              <span className={styles.fw400}>合计：</span><span className={styles.redText}>300.00</span>
            </Flex.Item>
          </Flex>
        </List.Item>
        <List.Item>
          <p>总计：<span className={styles.redText}>600.00</span></p>
          <p>折扣：<span className={styles.redText}>8</span>折</p>
          <p><span className={styles.fw400}>最终价格：</span><span className={styles.redText}>560.00</span></p>
          <Button className={styles.bespeak} onClick={evaluate}>订单评价</Button>
        </List.Item>
      </List>
    </div>
  );
};

export { View as default };
