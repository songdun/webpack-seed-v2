import React from "react";
// import styles from "./style.less";
// import { Menu, Icon } from "antd-mobile";
import { TabBar, Icon } from "antd-mobile";
import history from "srcDir/common/router/history";
// import { Link } from "react-router-dom";

// const SubMenu = Menu.SubMenu;

// 创建react组件
// const View = (props) => <Menu
//   mode="inline"
//   // theme={"dark"}
//   className={props.className ? `${styles.menu} ${props.className}` : styles.menu}
// >

//   {
//     props.results && Object.keys(props.results.MenuList).map(
//       (value, index) =>
//         <SubMenu key={`sub${value}`} title={<span><Icon type={props.results.MenuIcon[index]} /><span>{value}</span></span>}>
//         {
//           props.results.MenuList[value].map(
//             (val, inx) =>
//               <Menu.Item key={`${value}-${inx}`}>
//                 <Link to={val.path}>{val.name}</Link>
//               </Menu.Item>
//           )
//         }
//         </SubMenu>
//     )
//   }
// </Menu>;
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "Tab1",
    };
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="white"
      >
        <TabBar.Item
          title="首页"
          key="首页"
          icon={<div
            style={{
              width: "0.44rem",
              height: "0.44rem",
              background: "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  0.42rem 0.42rem no-repeat" }}
          />
          }
          selectedIcon={<div
            style={{
              width: "0.44rem",
              height: "0.44rem",
              background: "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  0.42rem 0.42rem no-repeat" }}
          />
          }
          selected={this.state.selectedTab === "Tab1"}
          badge={1}
          data-seed="logId"
          onPress={() => {
            history.push("/home/index/index");
            this.setState({
              selectedTab: "Tab1",
            });
          }}
        >
        </TabBar.Item>

        <TabBar.Item
          icon={<Icon type="koubei-o" size="md" />}
          selectedIcon={<Icon type="koubei" size="md" />}
          selected={this.state.selectedTab === "Tab2"}
          title="客服"
          key="客服"
          badge={"new"}
          data-seed="logId1"
          onPress={() => {
            history.push("/service/index/index");
            this.setState({
              selectedTab: "Tab2",
            });
          }}
        >
        </TabBar.Item>

        <TabBar.Item
          icon={
            <div
              style={{
                width: "0.44rem",
                height: "0.44rem",
                background: "url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  0.42rem 0.42rem no-repeat" }}
            />
          }
          selectedIcon={
            <div
              style={{
                width: "0.44rem",
                height: "0.44rem",
                background: "url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  0.42rem 0.42rem no-repeat" }}
            />
          }
          selected={this.state.selectedTab === "Tab3"}
          title="订单"
          key="订单"
          dot
          onPress={() => {
            history.push("/order/index/index");
            this.setState({
              selectedTab: "Tab3",
            });
          }}
        >
        </TabBar.Item>

        <TabBar.Item
          icon={{ uri: "https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg" }}
          selectedIcon={{ uri: "https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg" }}
          selected={this.state.selectedTab === "Tab4"}
          title="个人中心"
          key="个人中心"
          onPress={() => {
            history.push("/my/index/index");
            this.setState({
              selectedTab: "Tab4",
            });
          }}
        >
        </TabBar.Item>
      </TabBar>
    );
  }
}

export { View as default };
