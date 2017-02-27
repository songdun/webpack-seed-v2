// map: 循环匹配
// filter:过滤
// comp: 函数组合
// mapcat: 合并集合
import { map, filter, comp } from "transducers-js";
import * as most from "most";

const fetch = ({ id }) => Promise.resolve({
  type: "dataUpdate",
  value: { id, }
});
const tableModel = ({ id }) => {
  const generateStateFromResp = comp(
    filter(i => i.type === "dataUpdate"),
    map(data => data.value),
  // 把结果映射成state 到新的 state
    map(items => state => ({ results: items }))
  );

  const Data = function () {
    const data$ = most.fromPromise(fetch({ id })).transduce(generateStateFromResp);

    return {
      data$,
    };
  };

  return Data;
};

export { tableModel as default };
