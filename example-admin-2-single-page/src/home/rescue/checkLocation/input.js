import React from "react";

// import styles from "./style.less";
// import { List, Flex, TextareaItem } from "antd-mobile";
// import { createForm } from "rc-form";


// 调用绘制地图
const mapApi = () => {
  const AMap = window.AMap;
  // // 解析定位结果
  // const onComplete = (data) => {
  //   const str = ["定位成功"];
  //   str.push("经度：" + data.position.getLng());
  //   str.push("纬度：" + data.position.getLat());
  //   if (data.accuracy) {
  //     str.push("精度：" + data.accuracy + " 米");
  //   } // 如为IP精确定位结果则没有精度信息
  //   str.push("是否经过偏移：" + (data.isConverted ? "是" : "否"));
  //   document.getElementById("tip").innerHTML = str.join("<br>");
  //   console.log(str);
  // };
  // // 解析定位错误信息
  // const onError = () => {
  //   document.getElementById("tip").innerHTML = "定位失败";
  // };
  // 加载地图，调用浏览器定位服务
  const map = new AMap.Map("container", {
    resizeEnable: true,
    // center: [116.397428, 39.90923], // 地图中心点
    // zoom: 13, // 地图显示的缩放级别
    // keyboardEnable: false
  });
  AMap.plugin(["AMap.Geolocation", "AMap.Autocomplete", "AMap.PlaceSearch"], function () {
    const autoOptions = {
      // city: "北京", // 城市，默认全国
      input: "keyword"// 使用联想输入的input的id
    };
    // const infoWindow = new AMap.InfoWindow();
    const autocomplete = new AMap.Autocomplete(autoOptions);
    const placeSearch = new AMap.PlaceSearch({
      // city: "北京",
      map: map
    });
    const geolocation = new AMap.Geolocation({
      enableHighAccuracy: true, // 是否使用高精度定位，默认:true
      timeout: 10000,          // 超过10秒后停止定位，默认：无穷大
      buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
      zoomToAccuracy: true,      // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
      buttonPosition: "RB"
    });
    map.addControl(geolocation);
    geolocation.getCurrentPosition();
    // AMap.event.addListener(geolocation, "complete", onComplete); // 返回定位信息
    // AMap.event.addListener(geolocation, "error", onError);       // 返回定位出错信息
    AMap.event.addListener(autocomplete, "select", function (e) {
      // TODO 针对选中的poi实现自己的功能
      placeSearch.search(e.poi.name);
      console.info(e);
    });
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
          zIndex: "102"
        }}
      >
        <input
          type="text"
          id="keyword"
          name="keyword"
          placeholder="请输入关键字：(选定后搜索)"
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
