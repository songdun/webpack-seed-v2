import React from "react";

import styles from "./style.less";
import { List, Picker, DatePicker, Modal } from "antd-mobile";
const prompt = Modal.prompt;
import moment from "moment";
import "moment/locale/zh-cn";
// import history from "srcDir/common/router/history";
// import fetch from "srcDir/common/model/itemModel/fetch";

const myUser = <img className={styles.userImg} src={require("srcDir/images/my-default-img.png")} alt="头像" />;


// const editUserInfo = () => {
//   console.log("/userInfo");
//   history.push("/userInfo");
// };

const getPhoto = () => {
  window.wx.chooseImage({
    count: 1, // 默认9
    sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
    sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
    success: function (res) {
      const localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
      alert(JSON.stringify(localIds));
    }
  });
};

const inputModal = (obj = {}) => {
  prompt(obj.title, obj.message,
    [
      { text: "取消" },
      {
        text: "提交",
        onPress: value => {
          console.log(`输入的内容:${value}`);
          if (obj.callback && typeof obj.callback === "function") {
            obj.callback();
          }
        }
      },
    ],
    "default",
    obj.defaultValue
  );
};

const genderData = [
  {
    value: "a",
    label: "男",
  }, {
    value: "b",
    label: "女",
  }
];

const truckType = [
  {
    value: "B1",
    label: "B1",
  }, {
    value: "B2",
    label: "B2",
  }, {
    value: "C1",
    label: "C1",
  }, {
    value: "C2",
    label: "C2",
  }
];
const onGenderChange = (val) => {
  console.log("onGenderChange");
  console.log(val);
};
const onDateChange = (val) => {
  console.log("onDateChange");
  console.log(val.format("YYYY-MM-DD"));
};

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
          onClick={getPhoto}
        >
          <img className={styles.licenseImg} alt="驾照" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1491458346933&di=ce824818c97dca65d1d734f22d902ed8&imgtype=0&src=http%3A%2F%2Fimg.amberedu.com%2FUserWriter%2F2014%2F04%2F27%2Fl_c89cfe54-ae10-4d7a-ad0d-095bfe13b8ed.jpg" />
        </List.Item>
        <List.Item
          extra={myUser}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={getPhoto}
        >
          头像
        </List.Item>
        <List.Item
          extra={"李木"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => inputModal({
            title: "真实姓名",
            defaultValue: "李木"
          })}
        >
          真实姓名
        </List.Item>
        <List.Item
          extra={"13845512857"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => inputModal({
            title: "手机号",
            defaultValue: "13845512857"
          })}
        >
          手机号
        </List.Item>
        <Picker
          data={genderData}
          cols={1}
          value={["b"]}
          onChange={onGenderChange}
        >
          <List.Item
            arrow="horizontal"
            multipleLine
            platform="android"
            onClick={() => {}}
          >
            性别
          </List.Item>
        </Picker>
        <List.Item
          extra={"李小木"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => inputModal({
            title: "昵称",
            defaultValue: "李小木"
          })}
        >
          昵称
        </List.Item>
        <Picker
          data={truckType}
          cols={1}
          value={["C1"]}
          onChange={onGenderChange}
        >
          <List.Item
            arrow="horizontal"
            multipleLine
            platform="android"
            onClick={() => {}}
          >
            准驾车型
          </List.Item>
        </Picker>
        <DatePicker
          mode="date"
          title="选择日期"
          value={moment("2018-12-03 00:00:00", "YYYY-MM-DD Z").utcOffset(8)}
          onChange={onDateChange}
        >
          <List.Item
            arrow="horizontal"
            multipleLine
            platform="android"
            onClick={() => {}}
          >
            有效期限
          </List.Item>
        </DatePicker>
      </List>
    </div>
  );
};

export { View as default };
