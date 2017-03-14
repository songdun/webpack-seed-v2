import React from "react";
import styles from "./style.less";

import Router from "srcDir/common/router/route";
import ModalFrame from "srcDir/common/modalFrame/route";
import Menu from "srcDir/common/menu/route";
import store from "store2";
// 获取码表并存入seesionStorage以提供给select组件数据
import getCodeMap from "srcDir/common/model/codeMapModel/index";
getCodeMap({
  url: "/sys/dict/list",
  // params: {
  //   pcode: pcode
  // },
  success: (res) => {
    const codeMap = JSON.parse(res.entity).obj;
    const newCodeMap = JSON.stringify(codeMap);
    const oldCodeMap = JSON.stringify(store.session.get("codeMap"));
    if (newCodeMap !== oldCodeMap) {
      store.session.set("codeMap", codeMap);
    }
  }
});
// import { MemoryRouter } from "react-router";

const image = require("./images/home-background.jpg");

// 创建react组件
const View = () => (
  <ModalFrame>
    <Router>
      <div className={styles.container}>
        <header className={styles.header}></header>
        <nav className={styles.nav}>
          <Menu />
        </nav>
        <article id="contentContainer" className={styles.content} >
          <img className={styles.img} alt="homeBackground" src={image} />
          {
            /*
          <input type="file" accept="audio/*" capture="microphone" />
            */
          }
        </article>
      </div>
    </Router>
  </ModalFrame>
);

export { View as default };
