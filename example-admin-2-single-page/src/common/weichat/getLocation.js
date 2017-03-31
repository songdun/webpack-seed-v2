const wx = window.wx;

const getLocation = async () => {
  const location = await wx.getLocation({
    type: "gcj02", // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入"gcj02"
    success: function (res) {
      const latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
      const longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
      const speed = res.speed; // 速度，以米/每秒计
      const accuracy = res.accuracy; // 位置精度
      return {
        latitude,
        longitude,
        speed,
        accuracy
      };
    }
  });
  alert(location);
  return location;
};

export { getLocation as default };

