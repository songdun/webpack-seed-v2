var express = require("express");
var mock = require("mockjs");

var router = express.Router();

router.route("/api/test")
  .get(function (req, res) {
    var data = mock.mock({
     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      "list|1-10": [{
          // 属性 id 是一个自增数，起始值为 1，每次增 1
        "id|+1": 1
      }]
    });
    res.send(data);
  });

router.route("/api/")
  .get(function (req, res) {
    res.send("Hello API!");
  });
router.route("/api/post")
  .post(function (req, res) {
    res.send("Got a POST request");
  });

router.route("/api/login")
  .get(function (req, res) {
    var data = mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
      "list|1-10": [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
        "id|+1": 1
      }]
    });
    res.send(data);
  });

router.route("/mag/permission/menu")
  .get(function (req, res) {
    var data = {
      AppBarTitle: " ",
      MenuList: {
        资产管理: [
          { title: "AddAsset", path: "/AddAsset", component: "assetManagement/addAsset/index", name: "新增资产" },

        ],

      },
      MenuIcon: ["appstore", "money", "institution", "database", "users"]

    };
    res.send(data);
  });

router.route("/ap/assetInfo/listInvite")
  .get(function (req, res) {
    var data = {"page":1,"pageSize":10,"success":true,"totalPage":3,"totalRows":22,"rows":[{"bankName":"招商银行","bankSub":null,"charge":null,"filePath":null,"packageNum":"24","packageYear":"2016","porjectAssure":"质押、抵押、信用、保证","projectArea":"天津市","projectNum":1,"apDueDiligence":{"appraiseRemark":"234","deputy":null,"isEmployThridparty":null,"leader":null,"member":null,"number":11,"apAssetInfo":{"$ref":"$.rows[0]"},"appraiseTypeCode":{"code":"A_028_01","description":"现场调查","name":"现场调查","pid":228,"id":22801,"createdDate":"2016-11-02 06:49:44","lastModifiedDate":"2016-11-02 06:49:44"},"id":38,"createdDate":"2016-11-21 16:27:38","endDate":"2016-11-10 00:00:00","lastModifiedDate":null},"bankValue":null,"id":31,"loanInterset":1111.000,"loanPrincipal":23424324324.230,"statusCode":{"code":"A_025_01","description":"应邀","name":"应邀","pid":225,"id":22501,"createdDate":"2016-10-28 13:59:41","lastModifiedDate":"2016-10-28 13:59:41"},"createdDate":"2016-11-17 11:29:05","lastModifiedDate":"2017-01-05 11:04:42","transferDate":"2016-11-15 00:00:00"},{"bankName":"3中国建设银行","bankSub":null,"charge":null,"filePath":null,"packageNum":"909","packageYear":"2016","porjectAssure":null,"projectArea":null,"projectNum":1,"apDueDiligence":null,"bankValue":null,"id":32,"loanInterset":10000.000,"loanPrincipal":20000000.000,"statusCode":{"code":"A_025_01","description":"应邀","name":"应邀","pid":225,"id":22501,"createdDate":"2016-10-28 13:59:41","lastModifiedDate":"2016-10-28 13:59:41"},"createdDate":"2016-11-17 11:29:35","lastModifiedDate":"2016-11-17 17:03:30","transferDate":"2016-08-01 00:00:00"},{"bankName":"3中国建设银行","bankSub":null,"charge":null,"filePath":null,"packageNum":"909","packageYear":"2015","porjectAssure":null,"projectArea":null,"projectNum":null,"apDueDiligence":null,"bankValue":null,"id":34,"loanInterset":0.000,"loanPrincipal":0.000,"statusCode":{"code":"A_025_01","description":"应邀","name":"应邀","pid":225,"id":22501,"createdDate":"2016-10-28 13:59:41","lastModifiedDate":"2016-10-28 13:59:41"},"createdDate":"2016-11-17 11:48:30","lastModifiedDate":null,"transferDate":"2016-09-07 00:00:00"},{"bankName":"3中国农业银行","bankSub":null,"charge":null,"filePath":null,"packageNum":"008","packageYear":"2016","porjectAssure":null,"projectArea":"天津市","projectNum":1,"apDueDiligence":null,"bankValue":null,"id":39,"loanInterset":10000.000,"loanPrincipal":1000000.000,"statusCode":{"code":"A_025_01","description":"应邀","name":"应邀","pid":225,"id":22501,"createdDate":"2016-10-28 13:59:41","lastModifiedDate":"2016-10-28 13:59:41"},"createdDate":"2016-11-17 14:50:02","lastModifiedDate":"2016-11-22 16:35:55","transferDate":"2016-11-01 00:00:00"},{"bankName":"3中国农业银行","bankSub":null,"charge":null,"filePath":null,"packageNum":"333","packageYear":"2016","porjectAssure":null,"projectArea":"天津市","projectNum":1,"apDueDiligence":null,"bankValue":null,"id":44,"loanInterset":120000000.000,"loanPrincipal":45678900000000000.000,"statusCode":{"code":"A_025_01","description":"应邀","name":"应邀","pid":225,"id":22501,"createdDate":"2016-10-28 13:59:41","lastModifiedDate":"2016-10-28 13:59:41"},"createdDate":"2016-11-18 14:35:17","lastModifiedDate":"2016-11-24 12:04:50","transferDate":"2016-10-11 00:00:00"},{"bankName":"3友利银行2","bankSub":null,"charge":null,"filePath":null,"packageNum":"987","packageYear":"2015","porjectAssure":null,"projectArea":"北京市","projectNum":1,"apDueDiligence":{"appraiseRemark":"df","deputy":null,"isEmployThridparty":"N","leader":null,"member":null,"number":76,"apAssetInfo":{"$ref":"$.rows[5]"},"appraiseTypeCode":{"code":"A_028_01","description":"现场调查","name":"现场调查","pid":228,"id":22801,"createdDate":"2016-11-02 06:49:44","lastModifiedDate":"2016-11-02 06:49:44"},"id":52,"createdDate":"2016-11-25 14:52:47","endDate":"2016-11-10 00:00:00","lastModifiedDate":"2016-11-28 14:33:31"},"bankValue":2.000,"id":45,"loanInterset":9879879.000,"loanPrincipal":7923.000,"statusCode":{"code":"A_025_01","description":"应邀","name":"应邀","pid":225,"id":22501,"createdDate":"2016-10-28 13:59:41","lastModifiedDate":"2016-10-28 13:59:41"},"createdDate":"2016-11-18 14:59:21","lastModifiedDate":"2016-11-25 11:58:37","transferDate":"2016-11-16 00:00:00"},{"bankName":"3小小","bankSub":null,"charge":null,"filePath":null,"packageNum":"008","packageYear":"2011","porjectAssure":null,"projectArea":null,"projectNum":null,"apDueDiligence":null,"bankValue":null,"id":50,"loanInterset":9877.000,"loanPrincipal":900.000,"statusCode":{"code":"A_025_01","description":"应邀","name":"应邀","pid":225,"id":22501,"createdDate":"2016-10-28 13:59:41","lastModifiedDate":"2016-10-28 13:59:41"},"createdDate":"2016-11-18 18:10:14","lastModifiedDate":null,"transferDate":"2016-11-08 00:00:00"},{"bankName":"3水电费","bankSub":null,"charge":null,"filePath":null,"packageNum":"001","packageYear":"2016","porjectAssure":null,"projectArea":"北京市、天津市、新疆维吾尔自治区、河北省、山西省","projectNum":17,"apDueDiligence":{"appraiseRemark":"离开李姣卡萨丁分","deputy":null,"isEmployThridparty":null,"leader":null,"member":null,"number":324,"apAssetInfo":{"$ref":"$.rows[7]"},"appraiseTypeCode":{"code":"A_028_02","description":"非现场调查","name":"非现场调查","pid":228,"id":22802,"createdDate":"2016-11-02 06:50:02","lastModifiedDate":"2016-11-02 06:50:02"},"id":40,"createdDate":"2016-11-21 18:30:57","endDate":"2016-11-02 00:00:00","lastModifiedDate":null},"bankValue":null,"id":52,"loanInterset":239489.090,"loanPrincipal":239489.000,"statusCode":{"code":"A_025_01","description":"应邀","name":"应邀","pid":225,"id":22501,"createdDate":"2016-10-28 13:59:41","lastModifiedDate":"2016-10-28 13:59:41"},"createdDate":"2016-11-21 10:21:59","lastModifiedDate":"2017-01-05 11:03:13","transferDate":"2016-11-22 00:00:00"},{"bankName":"329834","bankSub":null,"charge":null,"filePath":null,"packageNum":"4534","packageYear":"2015","porjectAssure":null,"projectArea":"天津市","projectNum":0,"apDueDiligence":null,"bankValue":null,"id":57,"loanInterset":345345.000,"loanPrincipal":345345.000,"statusCode":{"code":"A_025_01","description":"应邀","name":"应邀","pid":225,"id":22501,"createdDate":"2016-10-28 13:59:41","lastModifiedDate":"2016-10-28 13:59:41"},"createdDate":"2016-11-21 18:31:38","lastModifiedDate":"2017-01-05 14:08:22","transferDate":"2016-11-03 00:00:00"},{"bankName":"333","bankSub":null,"charge":null,"filePath":null,"packageNum":"1","packageYear":"2015","porjectAssure":null,"projectArea":"北京市","projectNum":1,"apDueDiligence":null,"bankValue":null,"id":70,"loanInterset":1.000,"loanPrincipal":12.000,"statusCode":{"code":"A_025_01","description":"应邀","name":"应邀","pid":225,"id":22501,"createdDate":"2016-10-28 13:59:41","lastModifiedDate":"2016-10-28 13:59:41"},"createdDate":"2016-11-25 17:19:49","lastModifiedDate":"2016-12-22 17:04:09","transferDate":"2016-11-01 00:00:00"}]};
    res.send(data);
  });

module.exports = router;
