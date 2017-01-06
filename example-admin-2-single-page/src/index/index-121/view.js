import React from "react";
import styles from "./style.less";
// import { Menu, Icon } from "antd";

import Router from "srcDir/common/router/route";

// 创建react组件
const View = () => (
  <div className={styles.container}>
    <header className={styles.header}></header>
    <nav className={styles.nav}>
      <Router />
    </nav>
    <article id="contentContainer" className={styles.content}></article>
  </div>
);

export { View as default };
