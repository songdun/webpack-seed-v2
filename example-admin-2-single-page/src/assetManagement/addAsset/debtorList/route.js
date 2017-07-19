import route from "srcDir/common/route/withId";

import model from "./model";
import view from "./view";


// connect 连接行为与react组件，返回一个react类
// 第一个参数 数据流
// 第二个参数 react组件
// const debtorManage = connect(function (value) {
//   return debtorManageModel(value);
// })(debtorManageView);

// const debtorManage = (id) => connect(function (value) {
//   return debtorManageModel(id)(value);
// })(debtorManageView);

// export { debtorManage as default };
export default route({ model, view });

