import ajax from "srcDir/common/ajax/index";
import { message } from "antd";

const fetch = function ({ url, method, q }) {
  return ajax({
    method,
    url,
    params: q,
    success(resp) {
      const entity = JSON.parse(resp.entity);
      if (entity.success) {
        message.info(entity.msg);
      } else {
        message.error(entity.msg);
      }
    }
  });
};

export { fetch as default };
