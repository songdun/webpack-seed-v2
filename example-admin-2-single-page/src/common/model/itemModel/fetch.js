import ajax from "srcDir/common/ajax/index";

const fetch = function ({ url, method, params, success }) {
  return ajax({
    method,
    url,
    params,
    success,
  });
};

export { fetch as default };
