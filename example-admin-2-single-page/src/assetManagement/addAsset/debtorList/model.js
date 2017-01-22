import tableModel from "srcDir/common/model/tableModel/subTable";

// const data = tableModel({
//   url: "/ad/debtorInfo/list",
//   method: "GET",
//   params: {
//     _index: "1",
//     sort: "t.lastModifiedDate desc"
//   }
// });
const data = (id) => tableModel({
  id,
  url: "/ad/debtorInfo/list",
  method: "GET",
  params: {
    _index: "1",
    sort: "t.lastModifiedDate desc",
    "Q_t.apAssetInfo.id_eq_long": id
  }
});


export { data as default };

