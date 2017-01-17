import tableModel from "srcDir/common/model/tableModel";

const data = tableModel({
  url: "/ap/assetInfo/listInvite",
  method: "GET",
  params: {
    _index: "1",
    sort: "t.lastModifiedDate desc"
  }
});

export { data as default };

