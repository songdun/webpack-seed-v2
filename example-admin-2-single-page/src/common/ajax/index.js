import ajaxGlobal from "./global";
import { message } from "antd";

const fetch = function ({ url, method, params, success, error }) {
  // 过滤空值
  if (params) {
    Object.keys(params).filter((v) => params[v] === "").map((v) => {
      delete params[v];
      return params;
    });
  }
  return ajaxGlobal({
    method: method || "GET",
    path: url,
    params,
  }).then(resp => {
    if (success) {
      success(resp);
    }
    return {
      type: "dataUpdate",
      value: resp.entity
    };
  }, resp => {
    message.error(resp.error + "-code:[" + resp.status.code + "]");
    if (error) {
      error(resp);
    }
    return {
      type: "dataUpdate",
      value: JSON.stringify({ rows: [] })
    };
  });
};

export { fetch as default };
