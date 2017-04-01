import Cookies from "js-cookie";
const wx = window.wx;
window.$.ajax({
  url: "http://192.168.0.58:8080/jfinal_qyweixin/qyjssdkJson",
  method: "POST",
  data: {
    url: location.href.split("#")[0].split("://")[1]
  },
  success(res) {
    const wxconfig = res.data;
    // wxconfig.debug = true;
    wxconfig.jsApiList = [
      "checkJsApi",
      "onMenuShareTimeline",
      "onMenuShareAppMessage",
      "onMenuShareQQ",
      "onMenuShareWeibo",
      "hideMenuItems",
      "showMenuItems",
      "hideAllNonBaseMenuItem",
      "showAllNonBaseMenuItem",
      "translateVoice",
      "startRecord",
      "stopRecord",
      "onRecordEnd",
      "playVoice",
      "pauseVoice",
      "stopVoice",
      "uploadVoice",
      "downloadVoice",
      "chooseImage",
      "previewImage",
      "uploadImage",
      "downloadImage",
      "getNetworkType",
      "openLocation",
      "getLocation",
      "hideOptionMenu",
      "showOptionMenu",
      "closeWindow",
      "scanQRCode",
      "chooseWXPay",
      "openProductSpecificView",
      "addCard",
      "chooseCard",
      "openCard",
      "translateVoice"
    ];
    wx.config(wxconfig);
  }
});
wx.ready(function () {
  // console.log("微信验证成功");
  // wx.checkJsApi({
  //   jsApiList: ["getNetworkType", "previewImage"],
  //   success: function (res) {
  //       // 以键值对的形式返回，可用的api值true，不可用为false
  //       // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
  //     console.log(res);
  //   }
  // });
  //   // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
  wx.getLocation({
    type: "gcj02", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入"gcj02"
    success: function (res) {
      const latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
      const longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
      const speed = res.speed; // 速度，以米/每秒计
      const accuracy = res.accuracy; // 位置精度
      const location = {
        latitude,
        longitude,
        speed,
        accuracy
      };
      Cookies.set("location", JSON.stringify(location));
    }
  });
  // wx.onMenuShareAppMessage({
  //   title: "", // 分享标题
  //   desc: "", // 分享描述
  //   link: "", // 分享链接
  //   imgUrl: "", // 分享图标
  //   type: "", // 分享类型,music、video或link，不填默认为link
  //   dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
  //   success: function () {
  //       // 用户确认分享后执行的回调函数
  //   },
  //   cancel: function () {
  //     console.log("用户取消分享");
  //       // 用户取消分享后执行的回调函数
  //   }
  // });
});

wx.error(function (res) {
  console.error(res);
    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
});

