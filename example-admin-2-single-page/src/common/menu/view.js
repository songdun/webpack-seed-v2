import React from "react";
import styles from "./style.less";
import { TabBar, Modal } from "antd-mobile";
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
      modal: true
    };
    this.onClose = this.onClose.bind(this);
    console.log("menu/view.js");
    console.log(location.href);
    history.push("/home");
  }
  onClose() {
    this.setState({
      selectedTab: "",
      modal: false,
    });
  }
  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="rgba(255,255,255,.85)"
      >
        <TabBar.Item
          title="首页"
          key="首页"
          icon={<div
            className={styles.navHome}
          />
          }
          selectedIcon={<div
            className={styles.navHomeActive}
          />
          }
          selected={this.state.selectedTab === "Tab1"}
          badge={1}
          data-seed="logId"
          onPress={() => {
            history.push("/home");
            this.setState({
              selectedTab: "Tab1",
            });
          }}
        >
        </TabBar.Item>

        <TabBar.Item
          icon={<div
            className={styles.navService}
          />}
          selectedIcon={<div
            className={styles.navServiceActive}
          />}
          selected={this.state.selectedTab === "Tab2"}
          title="客服"
          key="客服"
          badge={"new"}
          data-seed="logId1"
          onPress={() => {
            this.setState({
              selectedTab: "Tab2",
              modal: true
            });
          }}
        >
          <Modal
            title="拨打客服电话"
            transparent
            maskClosable={false}
            visible={this.state.modal}
            closable={1}
            onClose={this.onClose}
          >
            <a href="tel:18510341233"><div className={styles.serviceCallPic} /></a>
          </Modal>
        </TabBar.Item>

        <TabBar.Item
          icon={
            <div
              className={styles.navOrder}
            />
          }
          selectedIcon={
            <div
              className={styles.navOrderActive}
            />
          }
          selected={this.state.selectedTab === "Tab3"}
          title="订单"
          key="订单"
          dot
          onPress={() => {
            history.push("/order");
            this.setState({
              selectedTab: "Tab3",
            });
          }}
        >
        </TabBar.Item>

        <TabBar.Item
          icon={
            <div
              className={styles.navMy}
            />}
          selectedIcon={
            <div
              className={styles.navMyActive}
            />}
          selected={this.state.selectedTab === "Tab4"}
          title="个人中心"
          key="个人中心"
          onPress={() => {
            history.push("/my");
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
