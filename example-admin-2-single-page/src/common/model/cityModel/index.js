const city = [
  {
    label: "北京市",
    value: 2,
    children: [
      {
        label: "东城区",
        value: 3
      },
      {
        label: "西城区",
        value: 4
      },
      {
        label: "朝阳区",
        value: 5
      },
      {
        label: "丰台区",
        value: 6
      },
      {
        label: "石景山区",
        value: 7
      },
      {
        label: "海淀区",
        value: 8
      },
      {
        label: "门头沟区",
        value: 9
      },
      {
        label: "房山区",
        value: 10
      },
      {
        label: "通州区",
        value: 11
      },
      {
        label: "顺义区",
        value: 12
      },
      {
        label: "昌平区",
        value: 13
      },
      {
        label: "大兴区",
        value: 14
      },
      {
        label: "怀柔区",
        value: 15
      },
      {
        label: "平谷区",
        value: 16
      },
      {
        label: "密云县",
        value: 17
      },
      {
        label: "延庆县",
        value: 18
      }
    ]
  },
  {
    label: "天津市",
    value: 19,
    children: [
      {
        label: "和平区",
        value: 20
      },
      {
        label: "河东区",
        value: 21
      },
      {
        label: "河西区",
        value: 22
      },
      {
        label: "南开区",
        value: 23
      },
      {
        label: "河北区",
        value: 24
      },
      {
        label: "红桥区",
        value: 25
      },
      {
        label: "东丽区",
        value: 26
      },
      {
        label: "西青区",
        value: 27
      },
      {
        label: "津南区",
        value: 28
      },
      {
        label: "北辰区",
        value: 29
      },
      {
        label: "武清区",
        value: 30
      },
      {
        label: "宝坻区",
        value: 31
      },
      {
        label: "滨海新区",
        value: 32
      },
      {
        label: "宁河县",
        value: 33
      },
      {
        label: "静海县",
        value: 34
      },
      {
        label: "蓟县",
        value: 35
      }
    ]
  },
  {
    label: "河北省",
    value: 36,
    children: [
      {
        label: "石家庄市",
        value: 37
      },
      {
        label: "唐山市",
        value: 61
      },
      {
        label: "秦皇岛市",
        value: 77
      },
      {
        label: "邯郸市",
        value: 86
      },
      {
        label: "邢台市",
        value: 107
      },
      {
        label: "保定市",
        value: 128
      },
      {
        label: "张家口市",
        value: 155
      },
      {
        label: "承德市",
        value: 174
      },
      {
        label: "沧州市",
        value: 187
      },
      {
        label: "廊坊市",
        value: 205
      },
      {
        label: "衡水市",
        value: 217
      }
    ]
  },
  {
    label: "山西省",
    value: 230,
    children: [
      {
        label: "太原市",
        value: 231
      },
      {
        label: "大同市",
        value: 243
      },
      {
        label: "阳泉市",
        value: 256
      },
      {
        label: "长治市",
        value: 263
      },
      {
        label: "晋城市",
        value: 278
      },
      {
        label: "朔州市",
        value: 286
      },
      {
        label: "晋中市",
        value: 294
      },
      {
        label: "运城市",
        value: 307
      },
      {
        label: "忻州市",
        value: 322
      },
      {
        label: "临汾市",
        value: 338
      },
      {
        label: "吕梁市",
        value: 357
      }
    ]
  },
  {
    label: "内蒙古自治区",
    value: 372,
    children: [
      {
        label: "呼和浩特市",
        value: 373
      },
      {
        label: "包头市",
        value: 384
      },
      {
        label: "乌海市",
        value: 395
      },
      {
        label: "赤峰市",
        value: 400
      },
      {
        label: "通辽市",
        value: 414
      },
      {
        label: "鄂尔多斯市",
        value: 424
      },
      {
        label: "呼伦贝尔市",
        value: 434
      },
      {
        label: "巴彦淖尔市",
        value: 450
      },
      {
        label: "乌兰察布市",
        value: 459
      },
      {
        label: "兴安盟",
        value: 472
      },
      {
        label: "锡林郭勒盟",
        value: 479
      },
      {
        label: "阿拉善盟",
        value: 492
      }
    ]
  },
  {
    label: "辽宁省",
    value: 496,
    children: [
      {
        label: "沈阳市",
        value: 497
      },
      {
        label: "大连市",
        value: 512
      },
      {
        label: "鞍山市",
        value: 524
      },
      {
        label: "抚顺市",
        value: 533
      },
      {
        label: "本溪市",
        value: 542
      },
      {
        label: "丹东市",
        value: 550
      },
      {
        label: "锦州市",
        value: 558
      },
      {
        label: "营口市",
        value: 567
      },
      {
        label: "阜新市",
        value: 575
      },
      {
        label: "辽阳市",
        value: 584
      },
      {
        label: "盘锦市",
        value: 593
      },
      {
        label: "铁岭市",
        value: 599
      },
      {
        label: "朝阳市",
        value: 608
      },
      {
        label: "葫芦岛市",
        value: 617
      }
    ]
  },
  {
    label: "吉林省",
    value: 625,
    children: [
      {
        label: "长春市",
        value: 626
      },
      {
        label: "吉林市",
        value: 638
      },
      {
        label: "四平市",
        value: 649
      },
      {
        label: "辽源市",
        value: 657
      },
      {
        label: "通化市",
        value: 663
      },
      {
        label: "白山市",
        value: 672
      },
      {
        label: "松原市",
        value: 680
      },
      {
        label: "白城市",
        value: 687
      },
      {
        label: "延边朝鲜族自治州",
        value: 694
      }
    ]
  },
  {
    label: "黑龙江省",
    value: 703,
    children: [
      {
        label: "哈尔滨市",
        value: 704
      },
      {
        label: "齐齐哈尔市",
        value: 724
      },
      {
        label: "鸡西市",
        value: 742
      },
      {
        label: "鹤岗市",
        value: 753
      },
      {
        label: "双鸭山市",
        value: 763
      },
      {
        label: "大庆市",
        value: 773
      },
      {
        label: "伊春市",
        value: 784
      },
      {
        label: "佳木斯市",
        value: 803
      },
      {
        label: "七台河市",
        value: 815
      },
      {
        label: "牡丹江市",
        value: 821
      },
      {
        label: "黑河市",
        value: 833
      },
      {
        label: "绥化市",
        value: 841
      },
      {
        label: "大兴安岭地区",
        value: 853
      }
    ]
  },
  {
    label: "上海市",
    value: 857,
    children: [
      {
        label: "黄浦区",
        value: 858
      },
      {
        label: "徐汇区",
        value: 859
      },
      {
        label: "长宁区",
        value: 860
      },
      {
        label: "静安区",
        value: 861
      },
      {
        label: "普陀区",
        value: 862
      },
      {
        label: "闸北区",
        value: 863
      },
      {
        label: "虹口区",
        value: 864
      },
      {
        label: "杨浦区",
        value: 865
      },
      {
        label: "闵行区",
        value: 866
      },
      {
        label: "宝山区",
        value: 867
      },
      {
        label: "嘉定区",
        value: 868
      },
      {
        label: "浦东新区",
        value: 869
      },
      {
        label: "金山区",
        value: 870
      },
      {
        label: "松江区",
        value: 871
      },
      {
        label: "青浦区",
        value: 872
      },
      {
        label: "奉贤区",
        value: 873
      },
      {
        label: "崇明县",
        value: 874
      }
    ]
  },
  {
    label: "江苏省",
    value: 875,
    children: [
      {
        label: "南京市",
        value: 876
      },
      {
        label: "无锡市",
        value: 889
      },
      {
        label: "徐州市",
        value: 899
      },
      {
        label: "常州市",
        value: 911
      },
      {
        label: "苏州市",
        value: 920
      },
      {
        label: "南通市",
        value: 931
      },
      {
        label: "连云港市",
        value: 941
      },
      {
        label: "淮安市",
        value: 949
      },
      {
        label: "盐城市",
        value: 959
      },
      {
        label: "扬州市",
        value: 970
      },
      {
        label: "镇江市",
        value: 978
      },
      {
        label: "泰州市",
        value: 986
      },
      {
        label: "宿迁市",
        value: 994
      }
    ]
  },
  {
    label: "浙江省",
    value: 1001,
    children: [
      {
        label: "杭州市",
        value: 1002
      },
      {
        label: "宁波市",
        value: 1017
      },
      {
        label: "温州市",
        value: 1030
      },
      {
        label: "嘉兴市",
        value: 1043
      },
      {
        label: "湖州市",
        value: 1052
      },
      {
        label: "绍兴市",
        value: 1059
      },
      {
        label: "金华市",
        value: 1067
      },
      {
        label: "衢州市",
        value: 1078
      },
      {
        label: "舟山市",
        value: 1086
      },
      {
        label: "台州市",
        value: 1092
      },
      {
        label: "丽水市",
        value: 1103
      }
    ]
  },
  {
    label: "安徽省",
    value: 1114,
    children: [
      {
        label: "合肥市",
        value: 1115
      },
      {
        label: "芜湖市",
        value: 1126
      },
      {
        label: "蚌埠市",
        value: 1136
      },
      {
        label: "淮南市",
        value: 1145
      },
      {
        label: "马鞍山市",
        value: 1153
      },
      {
        label: "淮北市",
        value: 1161
      },
      {
        label: "铜陵市",
        value: 1167
      },
      {
        label: "安庆市",
        value: 1173
      },
      {
        label: "黄山市",
        value: 1186
      },
      {
        label: "滁州市",
        value: 1195
      },
      {
        label: "阜阳市",
        value: 1205
      },
      {
        label: "宿州市",
        value: 1215
      },
      {
        label: "六安市",
        value: 1222
      },
      {
        label: "亳州市",
        value: 1231
      },
      {
        label: "池州市",
        value: 1237
      },
      {
        label: "宣城市",
        value: 1243
      }
    ]
  },
  {
    label: "福建省",
    value: 1252,
    children: [
      {
        label: "福州市",
        value: 1253
      },
      {
        label: "厦门市",
        value: 1268
      },
      {
        label: "莆田市",
        value: 1276
      },
      {
        label: "三明市",
        value: 1283
      },
      {
        label: "泉州市",
        value: 1297
      },
      {
        label: "漳州市",
        value: 1311
      },
      {
        label: "南平市",
        value: 1324
      },
      {
        label: "龙岩市",
        value: 1336
      },
      {
        label: "宁德市",
        value: 1345
      }
    ]
  },
  {
    label: "江西省",
    value: 1356,
    children: [
      {
        label: "南昌市",
        value: 1357
      },
      {
        label: "景德镇市",
        value: 1368
      },
      {
        label: "萍乡市",
        value: 1374
      },
      {
        label: "九江市",
        value: 1381
      },
      {
        label: "新余市",
        value: 1396
      },
      {
        label: "鹰潭市",
        value: 1400
      },
      {
        label: "赣州市",
        value: 1405
      },
      {
        label: "吉安市",
        value: 1425
      },
      {
        label: "宜春市",
        value: 1440
      },
      {
        label: "抚州市",
        value: 1452
      },
      {
        label: "上饶市",
        value: 1465
      }
    ]
  },
  {
    label: "山东省",
    value: 1479,
    children: [
      {
        label: "济南市",
        value: 1480
      },
      {
        label: "青岛市",
        value: 1492
      },
      {
        label: "淄博市",
        value: 1504
      },
      {
        label: "枣庄市",
        value: 1514
      },
      {
        label: "东营市",
        value: 1522
      },
      {
        label: "烟台市",
        value: 1529
      },
      {
        label: "潍坊市",
        value: 1543
      },
      {
        label: "济宁市",
        value: 1557
      },
      {
        label: "泰安市",
        value: 1570
      },
      {
        label: "威海市",
        value: 1578
      },
      {
        label: "日照市",
        value: 1584
      },
      {
        label: "莱芜市",
        value: 1590
      },
      {
        label: "临沂市",
        value: 1594
      },
      {
        label: "德州市",
        value: 1608
      },
      {
        label: "聊城市",
        value: 1621
      },
      {
        label: "滨州市",
        value: 1631
      },
      {
        label: "菏泽市",
        value: 1640
      }
    ]
  },
  {
    label: "河南省",
    value: 1651,
    children: [
      {
        label: "郑州市",
        value: 1652
      },
      {
        label: "开封市",
        value: 1666
      },
      {
        label: "洛阳市",
        value: 1677
      },
      {
        label: "平顶山市",
        value: 1694
      },
      {
        label: "安阳市",
        value: 1706
      },
      {
        label: "鹤壁市",
        value: 1717
      },
      {
        label: "新乡市",
        value: 1724
      },
      {
        label: "焦作市",
        value: 1738
      },
      {
        label: "濮阳市",
        value: 1750
      },
      {
        label: "许昌市",
        value: 1758
      },
      {
        label: "漯河市",
        value: 1766
      },
      {
        label: "三门峡市",
        value: 1773
      },
      {
        label: "南阳市",
        value: 1781
      },
      {
        label: "商丘市",
        value: 1796
      },
      {
        label: "信阳市",
        value: 1807
      },
      {
        label: "周口市",
        value: 1819
      },
      {
        label: "驻马店市",
        value: 1831
      },
      {
        label: "省直辖县级行政区划",
        value: 1843
      }
    ]
  },
  {
    label: "湖北省",
    value: 1845,
    children: [
      {
        label: "武汉市",
        value: 1846
      },
      {
        label: "黄石市",
        value: 1861
      },
      {
        label: "十堰市",
        value: 1869
      },
      {
        label: "宜昌市",
        value: 1879
      },
      {
        label: "襄阳市",
        value: 1894
      },
      {
        label: "鄂州市",
        value: 1905
      },
      {
        label: "荆门市",
        value: 1910
      },
      {
        label: "孝感市",
        value: 1917
      },
      {
        label: "荆州市",
        value: 1926
      },
      {
        label: "黄冈市",
        value: 1936
      },
      {
        label: "咸宁市",
        value: 1948
      },
      {
        label: "随州市",
        value: 1956
      },
      {
        label: "恩施土家族苗族自治州",
        value: 1961
      },
      {
        label: "省直辖县级行政区划",
        value: 1970
      }
    ]
  },
  {
    label: "湖南省",
    value: 1975,
    children: [
      {
        label: "长沙市",
        value: 1976
      },
      {
        label: "株洲市",
        value: 1987
      },
      {
        label: "湘潭市",
        value: 1998
      },
      {
        label: "衡阳市",
        value: 2005
      },
      {
        label: "邵阳市",
        value: 2019
      },
      {
        label: "岳阳市",
        value: 2033
      },
      {
        label: "常德市",
        value: 2044
      },
      {
        label: "张家界市",
        value: 2055
      },
      {
        label: "益阳市",
        value: 2061
      },
      {
        label: "郴州市",
        value: 2069
      },
      {
        label: "永州市",
        value: 2082
      },
      {
        label: "怀化市",
        value: 2095
      },
      {
        label: "娄底市",
        value: 2109
      },
      {
        label: "湘西土家族苗族自治州",
        value: 2116
      }
    ]
  },
  {
    label: "广东省",
    value: 2125,
    children: [
      {
        label: "广州市",
        value: 2126
      },
      {
        label: "韶关市",
        value: 2139
      },
      {
        label: "深圳市",
        value: 2151
      },
      {
        label: "珠海市",
        value: 2159
      },
      {
        label: "汕头市",
        value: 2164
      },
      {
        label: "佛山市",
        value: 2173
      },
      {
        label: "江门市",
        value: 2180
      },
      {
        label: "湛江市",
        value: 2189
      },
      {
        label: "茂名市",
        value: 2200
      },
      {
        label: "肇庆市",
        value: 2207
      },
      {
        label: "惠州市",
        value: 2217
      },
      {
        label: "梅州市",
        value: 2224
      },
      {
        label: "汕尾市",
        value: 2234
      },
      {
        label: "河源市",
        value: 2240
      },
      {
        label: "阳江市",
        value: 2248
      },
      {
        label: "清远市",
        value: 2254
      },
      {
        label: "东莞市",
        value: 2264
      },
      {
        label: "中山市",
        value: 2265
      },
      {
        label: "潮州市",
        value: 2266
      },
      {
        label: "揭阳市",
        value: 2271
      },
      {
        label: "云浮市",
        value: 2278
      }
    ]
  },
  {
    label: "广西壮族自治区",
    value: 2285,
    children: [
      {
        label: "南宁市",
        value: 2286
      },
      {
        label: "柳州市",
        value: 2300
      },
      {
        label: "桂林市",
        value: 2312
      },
      {
        label: "梧州市",
        value: 2331
      },
      {
        label: "北海市",
        value: 2340
      },
      {
        label: "防城港市",
        value: 2346
      },
      {
        label: "钦州市",
        value: 2352
      },
      {
        label: "贵港市",
        value: 2358
      },
      {
        label: "玉林市",
        value: 2365
      },
      {
        label: "百色市",
        value: 2374
      },
      {
        label: "贺州市",
        value: 2388
      },
      {
        label: "河池市",
        value: 2395
      },
      {
        label: "来宾市",
        value: 2408
      },
      {
        label: "崇左市",
        value: 2416
      }
    ]
  },
  {
    label: "海南省",
    value: 2425,
    children: [
      {
        label: "海口市",
        value: 2426
      },
      {
        label: "三亚市",
        value: 2432
      },
      {
        label: "三沙市",
        value: 2438
      },
      {
        label: "省直辖县级行政区划",
        value: 2442
      }
    ]
  },
  {
    label: "重庆市",
    value: 2459,
    children: [
      {
        label: "万州区",
        value: 2460
      },
      {
        label: "涪陵区",
        value: 2461
      },
      {
        label: "渝中区",
        value: 2462
      },
      {
        label: "大渡口区",
        value: 2463
      },
      {
        label: "江北区",
        value: 2464
      },
      {
        label: "沙坪坝区",
        value: 2465
      },
      {
        label: "九龙坡区",
        value: 2466
      },
      {
        label: "南岸区",
        value: 2467
      },
      {
        label: "北碚区",
        value: 2468
      },
      {
        label: "綦江区",
        value: 2469
      },
      {
        label: "大足区",
        value: 2470
      },
      {
        label: "渝北区",
        value: 2471
      },
      {
        label: "巴南区",
        value: 2472
      },
      {
        label: "黔江区",
        value: 2473
      },
      {
        label: "长寿区",
        value: 2474
      },
      {
        label: "江津区",
        value: 2475
      },
      {
        label: "合川区",
        value: 2476
      },
      {
        label: "永川区",
        value: 2477
      },
      {
        label: "南川区",
        value: 2478
      },
      {
        label: "璧山区",
        value: 2479
      },
      {
        label: "铜梁区",
        value: 2480
      },
      {
        label: "潼南县",
        value: 2481
      },
      {
        label: "荣昌县",
        value: 2482
      },
      {
        label: "梁平县",
        value: 2483
      },
      {
        label: "城口县",
        value: 2484
      },
      {
        label: "丰都县",
        value: 2485
      },
      {
        label: "垫江县",
        value: 2486
      },
      {
        label: "武隆县",
        value: 2487
      },
      {
        label: "忠县",
        value: 2488
      },
      {
        label: "开县",
        value: 2489
      },
      {
        label: "云阳县",
        value: 2490
      },
      {
        label: "奉节县",
        value: 2491
      },
      {
        label: "巫山县",
        value: 2492
      },
      {
        label: "巫溪县",
        value: 2493
      },
      {
        label: "石柱土家族自治县",
        value: 2494
      },
      {
        label: "秀山土家族苗族自治县",
        value: 2495
      },
      {
        label: "酉阳土家族苗族自治县",
        value: 2496
      },
      {
        label: "彭水苗族土家族自治县",
        value: 2497
      }
    ]
  },
  {
    label: "四川省",
    value: 2498,
    children: [
      {
        label: "成都市",
        value: 2499
      },
      {
        label: "自贡市",
        value: 2520
      },
      {
        label: "攀枝花市",
        value: 2528
      },
      {
        label: "泸州市",
        value: 2535
      },
      {
        label: "德阳市",
        value: 2544
      },
      {
        label: "绵阳市",
        value: 2552
      },
      {
        label: "广元市",
        value: 2563
      },
      {
        label: "遂宁市",
        value: 2572
      },
      {
        label: "内江市",
        value: 2579
      },
      {
        label: "乐山市",
        value: 2586
      },
      {
        label: "南充市",
        value: 2599
      },
      {
        label: "眉山市",
        value: 2610
      },
      {
        label: "宜宾市",
        value: 2618
      },
      {
        label: "广安市",
        value: 2630
      },
      {
        label: "达州市",
        value: 2638
      },
      {
        label: "雅安市",
        value: 2647
      },
      {
        label: "巴中市",
        value: 2657
      },
      {
        label: "资阳市",
        value: 2664
      },
      {
        label: "阿坝藏族羌族自治州",
        value: 2670
      },
      {
        label: "甘孜藏族自治州",
        value: 2684
      },
      {
        label: "凉山彝族自治州",
        value: 2703
      }
    ]
  },
  {
    label: "贵州省",
    value: 2721,
    children: [
      {
        label: "贵阳市",
        value: 2722
      },
      {
        label: "六盘水市",
        value: 2734
      },
      {
        label: "遵义市",
        value: 2739
      },
      {
        label: "安顺市",
        value: 2755
      },
      {
        label: "毕节市",
        value: 2763
      },
      {
        label: "铜仁市",
        value: 2773
      },
      {
        label: "黔西南布依族苗族自治州",
        value: 2785
      },
      {
        label: "黔东南苗族侗族自治州",
        value: 2794
      },
      {
        label: "黔南布依族苗族自治州",
        value: 2811
      }
    ]
  },
  {
    label: "云南省",
    value: 2824,
    children: [
      {
        label: "昆明市",
        value: 2825
      },
      {
        label: "曲靖市",
        value: 2841
      },
      {
        label: "玉溪市",
        value: 2852
      },
      {
        label: "保山市",
        value: 2863
      },
      {
        label: "昭通市",
        value: 2870
      },
      {
        label: "丽江市",
        value: 2883
      },
      {
        label: "普洱市",
        value: 2890
      },
      {
        label: "临沧市",
        value: 2902
      },
      {
        label: "楚雄彝族自治州",
        value: 2912
      },
      {
        label: "红河哈尼族彝族自治州",
        value: 2923
      },
      {
        label: "文山壮族苗族自治州",
        value: 2937
      },
      {
        label: "西双版纳傣族自治州",
        value: 2946
      },
      {
        label: "大理白族自治州",
        value: 2950
      },
      {
        label: "德宏傣族景颇族自治州",
        value: 2963
      },
      {
        label: "怒江傈僳族自治州",
        value: 2969
      },
      {
        label: "迪庆藏族自治州",
        value: 2974
      }
    ]
  },
  {
    label: "西藏自治区",
    value: 2978,
    children: [
      {
        label: "拉萨市",
        value: 2979
      },
      {
        label: "日喀则市",
        value: 2989
      },
      {
        label: "昌都市",
        value: 3009
      },
      {
        label: "山南地区",
        value: 3022
      },
      {
        label: "那曲地区",
        value: 3035
      },
      {
        label: "阿里地区",
        value: 3047
      },
      {
        label: "林芝地区",
        value: 3055
      }
    ]
  },
  {
    label: "陕西省",
    value: 3063,
    children: [
      {
        label: "西安市",
        value: 3064
      },
      {
        label: "铜川市",
        value: 3079
      },
      {
        label: "宝鸡市",
        value: 3085
      },
      {
        label: "咸阳市",
        value: 3099
      },
      {
        label: "渭南市",
        value: 3115
      },
      {
        label: "延安市",
        value: 3128
      },
      {
        label: "汉中市",
        value: 3143
      },
      {
        label: "榆林市",
        value: 3156
      },
      {
        label: "安康市",
        value: 3170
      },
      {
        label: "商洛市",
        value: 3182
      }
    ]
  },
  {
    label: "甘肃省",
    value: 3191,
    children: [
      {
        label: "兰州市",
        value: 3192
      },
      {
        label: "嘉峪关市",
        value: 3202
      },
      {
        label: "金昌市",
        value: 3204
      },
      {
        label: "白银市",
        value: 3208
      },
      {
        label: "天水市",
        value: 3215
      },
      {
        label: "武威市",
        value: 3224
      },
      {
        label: "张掖市",
        value: 3230
      },
      {
        label: "平凉市",
        value: 3238
      },
      {
        label: "酒泉市",
        value: 3247
      },
      {
        label: "庆阳市",
        value: 3256
      },
      {
        label: "定西市",
        value: 3266
      },
      {
        label: "陇南市",
        value: 3275
      },
      {
        label: "临夏回族自治州",
        value: 3286
      },
      {
        label: "甘南藏族自治州",
        value: 3295
      }
    ]
  },
  {
    label: "青海省",
    value: 3304,
    children: [
      {
        label: "西宁市",
        value: 3305
      },
      {
        label: "海东市",
        value: 3314
      },
      {
        label: "海北藏族自治州",
        value: 3322
      },
      {
        label: "黄南藏族自治州",
        value: 3327
      },
      {
        label: "海南藏族自治州",
        value: 3332
      },
      {
        label: "果洛藏族自治州",
        value: 3338
      },
      {
        label: "玉树藏族自治州",
        value: 3345
      },
      {
        label: "海西蒙古族藏族自治州",
        value: 3352
      }
    ]
  },
  {
    label: "宁夏回族自治区",
    value: 3358,
    children: [
      {
        label: "银川市",
        value: 3359
      },
      {
        label: "石嘴山市",
        value: 3367
      },
      {
        label: "吴忠市",
        value: 3372
      },
      {
        label: "固原市",
        value: 3379
      },
      {
        label: "中卫市",
        value: 3386
      }
    ]
  },
  {
    label: "新疆维吾尔自治区",
    value: 3391,
    children: [
      {
        label: "乌鲁木齐市",
        value: 3392
      },
      {
        label: "克拉玛依市",
        value: 3402
      },
      {
        label: "吐鲁番地区",
        value: 3408
      },
      {
        label: "哈密地区",
        value: 3412
      },
      {
        label: "昌吉回族自治州",
        value: 3416
      },
      {
        label: "博尔塔拉蒙古自治州",
        value: 3424
      },
      {
        label: "巴音郭楞蒙古自治州",
        value: 3429
      },
      {
        label: "阿克苏地区",
        value: 3439
      },
      {
        label: "克孜勒苏柯尔克孜自治州",
        value: 3449
      },
      {
        label: "喀什地区",
        value: 3454
      },
      {
        label: "和田地区",
        value: 3467
      },
      {
        label: "伊犁哈萨克自治州",
        value: 3476
      },
      {
        label: "自治区直辖县级行政区划",
        value: 3504
      }
    ]
  },
  {
    label: "台湾省",
    value: 3512,
    children: [
      {
        label: "台北市",
        value: 3513
      },
      {
        label: "高雄市",
        value: 3526
      },
      {
        label: "基隆市",
        value: 3565
      },
      {
        label: "台中市",
        value: 3573
      },
      {
        label: "台南市",
        value: 3603
      },
      {
        label: "新竹市",
        value: 3641
      },
      {
        label: "嘉义市",
        value: 3645
      },
      {
        label: "新北市",
        value: 3648
      },
      {
        label: "宜兰县",
        value: 3678
      },
      {
        label: "桃园县",
        value: 3691
      },
      {
        label: "新竹县",
        value: 3705
      },
      {
        label: "苗栗县",
        value: 3719
      },
      {
        label: "彰化县",
        value: 3738
      },
      {
        label: "南投县",
        value: 3765
      },
      {
        label: "云林县",
        value: 3779
      },
      {
        label: "嘉义县",
        value: 3800
      },
      {
        label: "屏东县",
        value: 3819
      },
      {
        label: "台东县",
        value: 3853
      },
      {
        label: "花莲县",
        value: 3870
      },
      {
        label: "澎湖县",
        value: 3884
      }
    ]
  },
  {
    label: "香港特别行政区",
    value: 3891,
    children: [
      {
        label: "香港岛",
        value: 3892
      },
      {
        label: "九龙",
        value: 3897
      },
      {
        label: "新界",
        value: 3903
      }
    ]
  },
  {
    label: "澳门特别行政区",
    value: 3913,
    children: [
      {
        label: "澳门半岛",
        value: 3914
      },
      {
        label: "氹仔岛",
        value: 3920
      },
      {
        label: "路环岛",
        value: 3922
      }
    ]
  }
];
export { city as default };
