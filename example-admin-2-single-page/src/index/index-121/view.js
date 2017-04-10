import React from "react";
import styles from "./style.less";

import Router from "srcDir/common/router/route";
import ModalFrame from "srcDir/common/modalFrame/route";
import Menu from "srcDir/common/menu/route";
import store from "store2";
// 发送请求时添加Spin
import Spin from "srcDir/common/spin/index";
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
        <Spin />
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

// class View extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false
//     };
//   }
//   componentDidMount() {
//     const _this = this;
//     const { state } = _this;
//     window.a = this;
//     window.addEventListener("ajaxLoadStart", function (e) {
//       console.log("loadstart");
//       console.log(e.detail.responseURL); // XHR 返回的内容
//       if (!state.loading) {
//         state.loading = true;
//         _this.forceUpdate();
//       }
//     });
//     window.addEventListener("ajaxLoadEnd", function (e) {
//       console.log("loadend");
//       console.log(e.detail.responseURL); // XHR 返回的内容
//       setTimeout(() => {
//         if (state.loading) {
//           state.loading = false;
//           _this.forceUpdate();
//         }
//       }, 1000);
//     });
//   }
//   render() {
//     return (
//       <div>
//         <ModalFrame>
//           <Router>
//             <div className={styles.container}>
//               <header className={styles.header}></header>
//               <nav className={styles.nav}>
//                 <Menu />
//               </nav>
//               <article id="contentContainer" className={styles.content} >
//                 <img className={styles.img} alt="homeBackground" src={image} />
//                 {
//                   /*
//                 <input type="file" accept="audio/*" capture="microphone" />
//                   */
//                 }
//               </article>
//             </div>
//           </Router>
//         </ModalFrame>
//         <Spin
//           spinning={this.state.loading}
//           delay={500}
//           size="large"
//           tip="loading..."
//           style={{
//             position: "fixed",
//             left: "50%",
//             top: "50%",
//             zIndex: "2000"
//           }}
//         />

//       </div>
//     );
//   }
// }


export { View as default };
