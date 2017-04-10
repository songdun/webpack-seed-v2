import ajax from "srcDir/common/ajax/index";
import { Toast } from "antd-mobile";

const fetch = function ({ url, method, q }) {
  return ajax({
    method,
    url,
    params: q,
    success(resp) {
      const entity = JSON.parse(resp.entity);
      if (entity.success) {
        Toast.info(entity.msg);
      } else {
        Toast.fail(entity.msg);
      }
    }
  });
};

export { fetch as default };
