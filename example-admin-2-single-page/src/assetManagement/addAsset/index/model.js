import tableModel from "srcDir/common/model/tableModel";

const data = tableModel({
  url: "http://139.129.87.191:8080/ams-server-webapp/ap/assetInfo/listInvite?token=eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJqd3QiLCJpYXQiOjE0ODE2MTYwMzQsInN1YiI6IntcImlkXCI6MSxcInVzZXJuYW1lXCI6XCJhZG1pblwifSIsImlzcyI6IklDSVlVTiIsImV4cCI6MTQ4MTY1OTIzNH0.GYjQQWrtmWMQZ2q2BGj1In2FPXpQhav0scEV9_ldScg",
  method: "GET",
  params: "Q_bankName_like_string"
});

export { data as default };

