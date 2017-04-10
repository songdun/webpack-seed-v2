import React from "react";

import styles from "./style.less";
import { List, Picker } from "antd-mobile";
// import history from "srcDir/common/router/history";
// import fetch from "srcDir/common/model/itemModel/fetch";

const cityData = [
  {
    value: "001",
    label: "黑龙江",
    children: [
      {
        value: "001-001",
        label: "哈尔滨",
      }, {
        value: "001-002",
        label: "佳木斯",
      }
    ]
  }, {
    value: "002",
    label: "吉林",
  }
];
const onCityChange = (val) => {
  console.log("onCityChange");
  console.log(val);
};

// 创建react组件
const View = (props) => {
  // console.info("+++++++++++++++++++");
  console.info(props);


  return (
    <div>
      <List>
        <List.Item
          multipleLine
          align="top"
          wrap
        >
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>大成汽修连锁</h3>
          <p style={{ textAlign: "justify" }}>
          吉林省大陈汽车服务有限公司拥有"大陈放心汽车维修连锁"商标所有权，目前已发展连锁联盟企业企业吉林省地区上百家，面对维修行业新态势，大陈放心汽车维修连锁以全新的经营模式与理念，寻求志同道合的盟友，共同寻求商用车后市场的可持续发展之路，引领行业新风向，掀起行业新变革，共同实现汽配维修行业的成功转型升级和共赢。
          </p>
        </List.Item>
        <Picker
          data={cityData}
          cols={2}
          value={["001", "001-002"]}
          onChange={onCityChange}
        >
          <List.Item
            className={styles.city}
            arrow="horizontal"
            multipleLine
            platform="android"
            onClick={() => {}}
          >
            连锁店
          </List.Item>
        </Picker>
        <List.Item
          multipleLine
          platform="android"
        >
        1. 大成连锁NO.001店
        </List.Item>
        <List.Item
          multipleLine
          platform="android"
        >
        2. 大成连锁NO.002店
        </List.Item>
      </List>
    </div>
  );
};

export { View as default };
