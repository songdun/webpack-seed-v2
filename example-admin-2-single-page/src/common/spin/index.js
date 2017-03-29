import React from "react";
import { ActivityIndicator } from "antd-mobile";
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
        <ActivityIndicator
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
