import React from "react";
import { Tabs } from "antd";
const TabPane = Tabs.TabPane;
// const onTabClick = (key) => {
//   console.log("onTabClick");
//   console.log(key);
// };
const Tab = (props) => {
  console.log("tab");
  console.log(props);
  const { conf } = props;
  return (
    <Tabs
      defaultActiveKey={conf.defaultKey}
      animated={false}
      // onTabClick={onTabClick}
    >
      {
        conf.tabs && conf.tabs.map(
          (v) => {
            let ContentPage;
            if (v.path !== "") {
              ContentPage = require(`srcDir/${v.path}/route`).default;
            }
            return (
              <TabPane tab={v.title} key={v.key}>
                {
                  ContentPage && <ContentPage {...props} />
                }
              </TabPane>
            );
          }
        )
      }
    </Tabs>
  );
};


export { Tab as default };
