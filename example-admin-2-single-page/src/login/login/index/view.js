import React from "react";
import styles from "./style.less";
import { List, Icon, InputItem, Button, Checkbox } from "antd-mobile";
import { createForm } from "rc-form";
require("particles.js");
require("./background");
import Cookies from "js-cookie";
import store from "store2";

const Item = List.Item;

// 创建react组件
const View = createForm()((props) => {
  const origin = window.location.origin;
  if (props.results) {
    Cookies.set("token", props.results.token);
    store.session.set("logined", true);
    window.location.href = origin + "/index/index/page.html";
  }
  const { login } = props.actions;
  const { getFieldDecorator, validateFields } = props.form;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    validateFields((err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);
        login(values);
      }
    });
  };
  return (
    <div>
      <List onSubmit={e => handleSubmit(e)} className={styles["login-form"]}>
        <Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入账号！" }],
          })(
            <InputItem addonBefore={<Icon type="user" />} placeholder="账号" />
          )}
        </Item>
        <Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码！" }],
          })(
            <InputItem addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
          )}
        </Item>
        <Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true,
          })(
            <Checkbox>保存账号</Checkbox>
          )}
          <a className={styles["login-form-forgot"]}>忘记密码</a>
          <Button type="primary" htmlType="submit" className={styles["login-form-button"]} onClick={e => handleSubmit(e)}>
            登录
          </Button>
          <a>注册</a>
        </Item>
      </List>
    </div>
  );
});

export { View as default };
