import React from "react";
import Cookies from "js-cookie";
import history from "srcDir/common/router/history";

// import styles from "./style.less";
// import { List, Flex, TextareaItem } from "antd-mobile";
// import { createForm } from "rc-form";


// 调用绘制地图
const mapApi = () => {
  const AMap = window.AMap;
  // 解析定位结果
  const onComplete = (data) => {
    const str = ["定位成功"];
    str.push("地址：" + data.formattedAddress);
    // str.push("纬度：" + data.position.getLat());
    // str.push("经度：" + data.position.getLng());
    const latitude = data.position.getLat();
    const longitude = data.position.getLng();
    const accuracy = data.accuracy;
    if (data.accuracy) {
      str.push("精度：" + data.accuracy + " 米");
    } // 如为IP精确定位结果则没有精度信息
    // str.push("是否经过偏移：" + (data.isConverted ? "是" : "否"));
    str.push("<button style=\"line-height:3; font-size:16px; border-radius:3px; border:0; background-color:#29a1f7; color:#fff; margin:auto auto 10px; display: block; width:100px;\">返回</button>");
    document.getElementById("tip").innerHTML = str.join("<br>");
    // console.log(str);
    const oldLocation = Cookies.get("location");
    // console.log("原来的位置");
    // alert(JSON.stringify(oldLocation));
    const location = {
      latitude,
      longitude,
      accuracy
    };
    const newLocation = Object.assign(oldLocation, location);
    // console.log("原来的位置");
    // alert(JSON.stringify(newLocation));
    Cookies.set("location", JSON.stringify(newLocation));
    Cookies.set("locationAddress", data.formattedAddress);
    // alert(Cookies.get("locationAddress"));
    $("#tip>button").click(function () {
      history.push("/applyRescue");
    });
  };
  // 解析定位错误信息
  const onError = () => {
    document.getElementById("tip").innerHTML = "定位失败";
  };
  // 加载地图，调用浏览器定位服务
  const map = new AMap.Map("container", {
    resizeEnable: true,
    // center: [116.397428, 39.90923], // 地图中心点
    // zoom: 13, // 地图显示的缩放级别
    // keyboardEnable: false
  });
  AMap.plugin(["AMap.Geolocation", "AMap.Autocomplete", "AMap.PlaceSearch"], function () {
    const geolocation = new AMap.Geolocation({
      enableHighAccuracy: true, // 是否使用高精度定位，默认:true
      timeout: 10000,          // 超过10秒后停止定位，默认：无穷大
      buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      zoomToAccuracy: true,      // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      buttonPosition: "RB"
    });
    map.addControl(geolocation);
    geolocation.getCurrentPosition();
    AMap.event.addListener(geolocation, "complete", onComplete); // 返回定位信息
    AMap.event.addListener(geolocation, "error", onError);       // 返回定位出错信息
  });
};

const initMap = () => {
  const document = window.document;
  const link = document.createElement("link");
  const mapScript = document.createElement("script");
  const toolScript = document.createElement("script");

  link.rel = "stylesheet";
  link.href = "http://cache.amap.com/lbs/static/main1119.css";
  mapScript.type = "text/javascript";
  mapScript.src = "http://webapi.amap.com/maps?v=1.3&key=291cb0e3e0afbc7dfa10c3da10059ea0";
  toolScript.type = "text/javascript";
  toolScript.src = "http://cache.amap.com/lbs/static/addToolbar.js";
  document.body.append(link);
  document.body.append(mapScript);
  document.body.append(toolScript);
  mapScript.onload = mapScript.readystatechange = function () {
    if (!mapScript.readyState || /loaded|complete/.test(mapScript.readyState)) {
      mapApi();
      mapScript.onload = mapScript.readystatechange = null;
    }
  };
};

const search = require("srcDir/images/search.png");

// 创建react组件
const View = () => {
  console.info("location");
  // console.info(props);
  // const { getFieldProps } = props.form;
  // const { back2refresh } = props.router;


  return (
    <div>
      <div
        id="container"
        style={{
          zIndex: "101"
        }}
      ></div>
      <div
        id="tip"
        style={{
          width: "95%",
          boxShadow: "0 0 3px 1px #ececec",
          zIndex: "102",
        }}
      >
        <input
          type="text"
          id="keyword"
          name="keyword"
          placeholder="正在定位，请稍后......"
          style={{
            width: "100%",
            height: "30px",
            border: "0",
            background: `url(${search}) no-repeat right / 19px 19px`
          }}
        />
      </div>
        {
          initMap()
        }

    </div>
  );
};

export { View as default };
