import React from "react";

import styles from "./style.less";
import { List, Checkbox, InputItem, Button } from "antd-mobile";
import { createForm } from "rc-form";
const AgreeItem = Checkbox.AgreeItem;
// import history from "srcDir/common/router/history";
// import fetch from "srcDir/common/model/itemModel/fetch";

const validateAccount = (rule, value, callback) => {
  if (value && value.length > 4) {
    callback();
  } else {
    callback(new Error("帐号至少4个字符"));
  }
};

// 创建react组件
const View = createForm()((props) => {
  // console.info("+++++++++++++++++++");
  console.info(props);
  const { getFieldProps, getFieldError, validateFields, getFieldsValue } = props.form;
  const onSubmit = () => {
    validateFields({ force: true }, (error) => {
      if (!error) {
        console.log(getFieldsValue());
      }
    });
  };

  return (
    <div className={styles.register}>
      <List>
        <List.Item
          multipleLine
          align="top"
          wrap
        >
          <h3 style={{ textAlign: "center", marginBottom: "20px" }}>大陈放心汽车维修连锁</h3>
          <p style={{ textAlign: "justify" }}>
          吉林省大陈汽车服务有限公司拥有"大陈放心汽车维修连锁"商标所有权，目前已发展连锁联盟企业企业吉林省地区上百家，面对维修行业新态势，大陈放心汽车维修连锁以全新的经营模式与理念，寻求志同道合的盟友，共同寻求商用车后市场的可持续发展之路，引领行业新风向，掀起行业新变革，共同实现汽配维修行业的成功转型升级和共赢。
          </p>
          <p>用户服务条款</p>
          <ol>
            <li>1、大陈放心汽车维修连锁</li>
            <li>2、大陈放心汽车维修连锁</li>
          </ol>
        </List.Item>

        <List.Item>
          <AgreeItem data-seed="logId" onChange={e => console.log("checkbox", e)}>
          已阅读
          </AgreeItem>
        </List.Item>

        <List.Item
          renderHeader={() => "新用户注册"}
          renderFooter={() => getFieldError("account") && getFieldError("account").join(",")}
        >
          <InputItem
            {...getFieldProps("account", {
              // initialValue: "小蚂蚁",
              rules: [
                { required: true, message: "请输入帐号" },
                { validator: validateAccount },
              ],
            })}
            clear
            error={!!getFieldError("account")}
            onErrorClick={() => {
              alert(getFieldError("account").join("、"));
            }}
            placeholder="请输入账号"
          >帐号</InputItem>
          <InputItem {...getFieldProps("password")} placeholder="请输入密码" type="password">
            密码
          </InputItem>
        </List.Item>
        <List.Item>
          <Button className={styles.submit} type="primary" onClick={onSubmit}>注册</Button>
        </List.Item>
      </List>
    </div>
  );
});

export { View as default };
