import itemModel from "srcDir/common/model/itemModel";

const data = itemModel({
  url: "/ap/assetInfo/show",
  method: "GET",
  params: {
    id: "57"
  }
});

export { data as default };
