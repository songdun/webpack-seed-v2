// map: 循环匹配
// filter:过滤
// comp: 函数组合
// mapcat: 合并集合
import { map, filter, comp } from "transducers-js";
import * as most from "most";
import fetch from "./fetch";

const tableModel = ({ url, method, params }) => {
  if (!url || url === "") {
    console.error("url参数不正确");
  }

  const generateStateFromResp = comp(
    filter(i => i.type === "dataUpdate"),
    map(data => JSON.parse(data.value)),
  // 把结果映射成state 到新的 state
    map(items => state => ({ results: items }))
  );

  const Data = function () {
    const data$ = most.fromPromise(fetch({ url, method, params })).transduce(generateStateFromResp);

    return {
      data$,
    };
  };

  return Data;
};

export { tableModel as default };
