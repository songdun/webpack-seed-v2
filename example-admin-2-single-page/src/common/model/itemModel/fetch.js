import ajax from "srcDir/common/ajax/index";

const fetch = function ({ url, method, params, success }) {
  // console.log(params);
  let result = null;
  if (params) {
    result = ajax({
      method,
      url,
      params,
      success,
    });
  } else {
    result = Promise.resolve({
      type: "dataUpdate",
      value: JSON.stringify({
        msg: "",
        obj: {},
        success: true,
        type: 0,
        fieldErrors: {}
      }),
    });
  }
  return result;
};

export { fetch as default };
