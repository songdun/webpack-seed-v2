import React from "react";

import styles from "./style.less";
import { List } from "antd-mobile";
// import history from "srcDir/common/router/history";
// import fetch from "srcDir/common/model/itemModel/fetch";

const myUser = <img className={styles.userImg} src={require("srcDir/images/my-default-img.png")} alt="头像" />;


// const editUserInfo = () => {
//   console.log("/userInfo");
//   history.push("/userInfo");
// };

// 创建react组件
const View = (props) => {
  // console.info("+++++++++++++++++++");
  console.info(props);


  return (
    <div>
      <List className={styles.my}>
        <List.Item
          className={styles.license}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => {}}
        >
          <img className={styles.licenseImg} alt="驾照" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491458346933&di=ce824818c97dca65d1d734f22d902ed8&imgtype=0&src=http%3A%2F%2Fimg.amberedu.com%2FUserWriter%2F2014%2F04%2F27%2Fl_c89cfe54-ae10-4d7a-ad0d-095bfe13b8ed.jpg" />
        </List.Item>
        <List.Item
          extra={myUser}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => {}}
        >
          头像
        </List.Item>
        <List.Item
          extra={"李木"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => {}}
        >
          真实姓名
        </List.Item>
        <List.Item
          extra={"13845512857"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => {}}
        >
          手机号
        </List.Item>
        <List.Item
          extra={"男"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => {}}
        >
          性别
        </List.Item>
        <List.Item
          extra={"李小木"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => {}}
        >
          昵称
        </List.Item>
        <List.Item
          extra={"C1"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => {}}
        >
          准驾车型
        </List.Item>
        <List.Item
          extra={"2020/03/18"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => {}}
        >
          有效期限
        </List.Item>
      </List>
    </div>
  );
};

export { View as default };
