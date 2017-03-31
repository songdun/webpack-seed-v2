const wx = window.wx;
const openMap = () => {
  wx.getLocation({
    type: "gcj02", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入"gcj02"
    success: function (res) {
      const latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
      const longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
      // const speed = res.speed; // 速度，以米/每秒计
      // const accuracy = res.accuracy; // 位置精度
      wx.openLocation({
        latitude: latitude, // 纬度，浮点数，范围为90 ~ -90
        longitude: longitude, // 经度，浮点数，范围为180 ~ -180。
        name: "当前位置", // 位置名
        address: "", // 地址详情说明
        scale: 28, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: "" // 在查看位置界面底部显示的超链接,可点击跳转
      });
    }
  });
};

export { openMap as default };
