import ajax from "srcDir/common/ajax";
import { message } from "antd";

const fetch = function ({ url, method, q = "" }) {
  return ajax({
    method: method || "GET",
    path: url,
    params: q
  }).then(resp => {
    const entity = JSON.parse(resp.entity);
    if (entity.success) {
      message.info(entity.msg);
    } else {
      message.error(entity.msg);
    }

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
