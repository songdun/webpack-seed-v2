import React from "react";
import styles from "./style.less";
import { Menu, Icon } from "antd";
import { Link } from "react-router";

const SubMenu = Menu.SubMenu;

// 创建react组件
const View = (props) => <Menu
  mode="inline"
  // theme={"dark"}
  className={props.className ? `${styles.menu} ${props.className}` : styles.menu}
>
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
