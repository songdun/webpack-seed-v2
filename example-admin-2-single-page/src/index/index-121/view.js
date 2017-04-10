import React from "react";
import styles from "./style.less";

import Router from "srcDir/common/router/route";

const image = require("./images/home-background.jpg");

// 创建react组件
const View = () => (
  <div className={styles.container}>
    <header className={styles.header}></header>
    <nav className={styles.nav}>
      <Router />
    </nav>
    <article id="contentContainer" className={styles.content}>
      <img className={styles.img} alt="homeBackground" src={image} />
      <input type="file" accept="audio/*" capture="microphone" />
    </article>
  </div>
);

export { View as default };
