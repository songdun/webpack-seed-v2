import ajax from "srcDir/common/ajax/index";

const fetch = function ({ url, method, q }) {
  return ajax({
    method,
    url,
    params: q,
  });
};

export { fetch as default };
