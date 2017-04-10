import fetch from "srcDir/common/model/itemModel/fetch";

const selectModel = ({ url, params, success }) => {
  fetch({
    url,
    // method: "GET",
    params,
    success(res) {
      success(res);
    }
  });
};
export { selectModel as default };
