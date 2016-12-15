import ajax from "srcDir/common/ajax";
import { message } from "antd";

const fetch = function ({ url, method, params, q = "" }) {
  return ajax({
    method: method || "GET",
    path: url,
    params: { [params]: q }
  }).then(resp => {
    message.info("操作成功");

    return {
      type: "dataUpdate",
      value: resp.entity
    };
  }, resp => {
    message.error(resp.error + "-code:[" + resp.status.code + "]");

    return {
      type: "dataUpdate",
      value: JSON.stringify({ rows: [] })
    };
  });
};

export { fetch as default };
