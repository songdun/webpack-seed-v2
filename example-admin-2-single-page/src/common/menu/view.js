import React from "react";
import styles from "./style.less";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;

// 创建react组件
const View = (props) => <Menu
  mode="inline"
  // theme={"dark"}
  className={props.className ? `${styles.menu} ${props.className}` : styles.menu}
>
  <SubMenu key={"erwrwer23"} title={<span><Icon /><span>借款人列表</span></span>}>
    <Menu.Item key={"2323232323-32323232323"}>
      <Link to={"/AddAsset/DebtorList"}>{"借款人列表"}</Link>
    </Menu.Item>
  </SubMenu>
  {
    props.results && Object.keys(props.results.MenuList).map(
      (value, index) =>
        <SubMenu key={`sub${value}`} title={<span><Icon type={props.results.MenuIcon[index]} /><span>{value}</span></span>}>
        {
          props.results.MenuList[value].map(
            (val, inx) =>
              <Menu.Item key={`${value}-${inx}`}>
                <Link to={val.path}>{val.name}</Link>
              </Menu.Item>
          )
        }
        </SubMenu>
    )
  }
</Menu>;

export { View as default };
