import ajax from "srcDir/common/ajax";

const fetch = function ({ url, method, params, q }) {
  const paramsAll = Object.assign({}, params, q);
  return ajax({
    method,
    url,
    params: paramsAll,
  });
};

export { fetch as default };
