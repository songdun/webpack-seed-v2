import React from "react";
import { Spin } from "antd";
import styles from "./style.less";

class View extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   loading: true,
  //   // };
  // }
  componentDidMount() {
    // const _this = this;
    // const { state } = _this;
    window.a = this;
    window.addEventListener("ajaxLoadStart", function () {
      $(".js-loading").css({ display: "block" });
    });
    window.addEventListener("ajaxLoadEnd", function () {
      $(".js-loading").css({ display: "none" });
    });
  }
  render() {
    return (
      <div className={`${styles.loading} js-loading`}>
        <Spin
          className={styles.spin}
          spinning={1}
          size="large"
          tip="loading..."
        />
      </div>
    );
  }
}


export { View as default };
