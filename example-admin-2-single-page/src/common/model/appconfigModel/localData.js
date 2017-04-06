// map: 循环匹配
// filter:过滤
// comp: 函数组合
// mapcat: 合并集合
import { map, filter, comp } from "transducers-js";
import * as most from "most";

const fetch = () => Promise.resolve({
  type: "dataUpdate",
  value: {
    AppBarTitle: " ",
    MenuList: {
      资产管理: [
        { title: "/home", path: "/home", component: "home/index/index", name: "首页" },
        // { title: "/service", path: "/service", component: "service/index/index", name: "客服" },
        { title: "/order", path: "/order", component: "order/index/index", name: "订单" },
        { title: "/my", path: "/my", component: "my/index/index", name: "我的" },
        { title: "/applyRescue", path: "/applyRescue", component: "home/rescue/application", name: "发起救援" },
        { title: "/rescueStatus", path: "/rescueStatus", component: "home/rescue/status", name: "救援状态" },
        { title: "/evaluate", path: "/evaluate", component: "order/order/evaluate", name: "发表评价" },
        { title: "/userInfo", path: "/userInfo", component: "my/userInfo/index", name: "个人资料" },
        { title: "/truckInfo", path: "/truckInfo", component: "my/truckInfo/index", name: "汽车档案" },
        { title: "/about", path: "/about", component: "my/about/index", name: "关于我们" },


      ],

    },
    MenuIcon: ["appstore", "money", "institution", "database", "users"]

  }
});
const tableModel = () => {
  const generateStateFromResp = comp(
    filter(i => i.type === "dataUpdate"),
    map(data => data.value),
  // 把结果映射成state 到新的 state
    map(items => state => ({ results: items }))
  );

  const Data = function () {
    const data$ = most.fromPromise(fetch()).transduce(generateStateFromResp);

    return {
      data$,
    };
  };

  return Data;
};

export { tableModel as default };
