import tableModel from "srcDir/common/model/tableModel";

const data = tableModel({
  url: "/ap/assetInfo/listInvite",
  method: "GET",
  // params: "Q_bankName_like_string"
});

export { data as default };

