import React from "react";

import styles from "./style.less";
import { Carousel, Flex, Button, List } from "antd-mobile";
// import fetch from "srcDir/common/model/itemModel/fetch";
import openMap from "srcDir/common/weichat/openMap";
import Cookies from "js-cookie";
import history from "srcDir/common/router/history";

const banner = require("srcDir/images/banner.png");

const locationDefault = JSON.stringify({
  latitude: "35.9",
  longitude: "116.4"
});
const getLocationName = (location = locationDefault) => {
  let locationName = "中国";
  if (location === null || location === "") {
    location = locationDefault;
  }
  const { latitude = "", longitude = "" } = JSON.parse(location);
  const locationStr = `${latitude},${longitude}`;
  // console.info(locationStr);
  const data = {
    location: locationStr,
    /* 换成自己申请的key */
    key: "4ODBZ-3TYR4-XJ6UA-XREVY-M5UPO-R6FF3",
    get_poi: 0
  };
  const url = "http://apis.map.qq.com/ws/geocoder/v1/?";
  data.output = "jsonp";
  $.ajax({
    async: false,
    type: "get",
    dataType: "jsonp",
    data: data,
    jsonp: "callback",
    jsonpCallback: "QQmap",
    url: url,
    success: function (json) {
      // console.log(json.result.address_component.city);
      locationName = json.result.address_component.city;
      $("#locationName").find(".am-flexbox-item").eq(0)
      .text(locationName);
    },
    // error: function () {
    //   alert("服务端错误，请刷新浏览器后重试");
    // }

  });
  return locationName;
};


// 创建react组件
const View = (props) => {
  console.info("home/index/index");
  console.info(props);
  const applyRescue = () => {
    console.log("applyRescue");
    history.push("/applyRescue");
  };

  return (
    <div>
      <div id="locationName">
        <Flex className={styles.header}>
          <Flex.Item onClick={openMap}>
            {
              getLocationName(Cookies.get("location"))
            }
          </Flex.Item>
          <Flex.Item>
          关于我们
          </Flex.Item>
        </Flex>
      </div>
      <Carousel
        className="my-carousel" autoplay={0} infinite selectedIndex={0} dots={false}
        // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
        // afterChange={index => console.log("slide to", index)}
      >
        <a key={"AiyWuByWklrrUDlFignR"} >
          <img
            className={styles.swiperimg}
            alt="pic"
            src={banner}
          />
        </a>
        <a key={"TekJlZRVCjLFexlOCuWn"} >
          <img
            className={styles.swiperimg}
            alt="pic"
            src={"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=74255388,1481111428&fm=23&gp=0.jpg"}
          />
        </a>
        <a key={"AiyWuByWklrrUDlFignR"} >
          <img
            className={styles.swiperimg}
            alt="pic"
            src={"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490607688875&di=214ea0c9f73d2c6c081b10c0b296243a&imgtype=0&src=http%3A%2F%2Fpic33.nipic.com%2F20130927%2F6400131_130359365000_2.jpg"}
          />
        </a>
      </Carousel>
      <Flex justify="around" className={styles.buttons}>
        <Button className={styles.button} inline onClick={applyRescue} />
        <Button className={styles.button} inline />
        <Button className={styles.button} inline />
      </Flex>
      <List>
        <List.Item wrap platform="android" onClick={() => {}}>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap platform="android" onClick={() => {}}>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap platform="android" onClick={() => {}}>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap platform="android" onClick={() => {}}>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap platform="android" onClick={() => {}}>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap platform="android" onClick={() => {}}>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
        <List.Item wrap platform="android" onClick={() => {}}>
          <div className={styles.title}>
            单行模式，文字超长则隐藏；文本内容文本内容文本内容文本内容
          </div>
          <div className={styles.text}>
            多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容多行模式，文字超长则换行；文本内容文本内容文本内容文本内容文本内容文本内容
          </div>
        </List.Item>
      </List>
    </div>
  );
};

export { View as default };
