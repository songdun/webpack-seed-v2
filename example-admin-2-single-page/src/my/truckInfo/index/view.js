import React from "react";

import styles from "./style.less";
import { List, Picker, DatePicker, Modal } from "antd-mobile";
const prompt = Modal.prompt;
import moment from "moment";
import "moment/locale/zh-cn";
// import history from "srcDir/common/router/history";
// import fetch from "srcDir/common/model/itemModel/fetch";

// const myUser = <img className={styles.userImg} src={require("srcDir/images/my-default-img.png")} alt="头像" />;


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
          {/*
          <img className={styles.licenseImg} alt="驾照" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1491464600&di=6074ed808b75fe7fcde6001d17778bcb&src=http://www.lawcert.com/static/Upload/material/loan-44/CLXSZ/1-89364.jpg" />
          */}
        </List.Item>
        {/*
        <List.Item
          extra={myUser}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={getPhoto}
        >
          车辆照片
        </List.Item>
        */}
        <List.Item
          extra={"京Q1234"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => inputModal({
            title: "车牌号",
            defaultValue: "京Q1234"
          })}
        >
          车牌号
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
            车辆类型
          </List.Item>
        </Picker>
        <List.Item
          extra={"李某"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => inputModal({
            title: "所有人",
            defaultValue: "李某"
          })}
        >
          所有人
        </List.Item>
        <List.Item
          extra={"商用"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => inputModal({
            title: "使用性质",
            defaultValue: "商用"
          })}
        >
          使用性质
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
            车辆型号
          </List.Item>
        </Picker>
        <List.Item
          extra={"2020018"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => inputModal({
            title: "车辆识别码",
            defaultValue: "2020018"
          })}
        >
          车辆识别码
        </List.Item>
        <List.Item
          extra={"C123123"}
          arrow="horizontal"
          multipleLine
          platform="android"
          onClick={() => inputModal({
            title: "发动机号",
            defaultValue: "C123123"
          })}
        >
          发动机号
        </List.Item>
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
            注册时间
          </List.Item>
        </DatePicker>
      </List>
    </div>
  );
};

export { View as default };
