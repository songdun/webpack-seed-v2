import React from "react";
import styles from "./style.less";
import { Form, Icon, Input, Button, Checkbox } from "antd";
require("particles.js");
require("./background");

const FormItem = Form.Item;

// 创建react组件
const View = Form.create()((props) => {
  const origin = window.location.origin;
  if (props.results) {
    window.location.href = origin;
  }
  const { login } = props.actions;
  const { getFieldDecorator, validateFields } = props.form;
  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        // console.log("Received values of form: ", values);
        login(values);
      }
    });
  };
  return (
    <div>
      <Form onSubmit={e => handleSubmit(e)} className={styles["login-form"]}>
        <FormItem>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "请输入账号！" }],
          })(
            <Input addonBefore={<Icon type="user" />} placeholder="账号" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "请输入密码！" }],
          })(
            <Input addonBefore={<Icon type="lock" />} type="password" placeholder="密码" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true,
          })(
            <Checkbox>保存账号</Checkbox>
          )}
          <a className={styles["login-form-forgot"]}>忘记密码</a>
          <Button type="primary" htmlType="submit" className={styles["login-form-button"]}>
            登录
          </Button>
          <a>注册</a>
        </FormItem>
      </Form>
    </div>
  );
});

export { View as default };
