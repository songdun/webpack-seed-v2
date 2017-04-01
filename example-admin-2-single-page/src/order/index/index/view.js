import React from "react";

// import styles from "./style.less";
import Tab from "srcDir/common/tab/";
const TabConf = {
  defaultKey: "3", // 初始化展示tab
  tabs: [{
    title: "未完成订单",
    key: "1",
    path: "",
  }, {
    title: "待评价订单",
    key: "2",
    path: "",
  }, {
    title: "所有订单",
    key: "3",
    path: "order/order/all",
  }]
};

// 创建react组件
const View = () => {
  console.info("order/tab");
  // console.info(props);


  return (
    <div>
      <Tab conf={TabConf} />
    </div>
  );
};

export { View as default };
