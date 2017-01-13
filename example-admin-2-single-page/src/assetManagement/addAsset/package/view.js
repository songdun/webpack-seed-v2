import React from "react";
import styles from "./style.less";
import { Input, Button, Card, DatePicker, Form } from "antd";
import moment from "moment";

// import fetch from "srcDir/common/model/itemModel/fetch";
// let data;
// fetch({
//   url: "/ap/assetInfo/show",
//   method: "GET",
//   params: {
//     id: "57"
//   },
//   success(res) {
//     data = res.entity;
//   }
// });
// console.info(data);

// const back = () => {
//   console.log("back");
// };

const FormItem = Form.Item;
const dateFormat = "YYYY-MM-DD";

// let bankNameInputValue;
// let packageNumInputValue;
// 创建react组件
const View = Form.create()((props) => {
  // console.info(props);
  const { params, results, form } = props;
  // const { hide } = modal;
  const { validateFieldsAndScroll, getFieldDecorator } = form;

  // console.log(hide);
  if (!results) {
    props.results = {};
  }
  if (params && !results) {
    props.actions.getItem(params);
  }
  console.info(props);
  const error = props.error || {};
  // const paramsDefault = {
  //   Q_bankName_like_string: bankNameInputValue || "",
  //   Q_packageNum_like_string: packageNumInputValue || "",
  //   _index: "1"
  // };
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      span: 6,
      offset: 9,
    },
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      console.log(arguments);
      if (!err) {
        console.log("表单结果");
        console.log("Received values of form: ", values);
        values.transferDate = values.transferDate.format(dateFormat);
        console.info(values);
      }
    });
  };
  return (
    <div>
      { /*
      <Breadcrumb separator=">">
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item>资产管理</Breadcrumb.Item>
        <Breadcrumb.Item>新增资产</Breadcrumb.Item>
      </Breadcrumb>
      */}

      <span className={"red " + error.className}>{error.message}</span>

      <Card>
        <Form>
          <FormItem
            {...formItemLayout}
            label="出包行"
          >

            {
              props.results && getFieldDecorator("bankName", {
                initialValue: props.results.bankName,
                rules: [{ required: true, message: "Please input your bankName!" }],
              })(<Input />)
            }

          </FormItem>
          <FormItem
            {...formItemLayout}
            label="资产包年份"
          >
            {
              props.results && getFieldDecorator("packageYear", {
                initialValue: props.results.packageYear,
                rules: [
                  { required: true, message: "Please input your packageYear!" },
                  { len: 4, pattern: /^([\d]{4})$/, message: "资产包年份!" }
                ],
              })(<Input addonAfter="年" />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="未偿还本金"
          >
            {
              props.results && getFieldDecorator("loanPrincipal", {
                initialValue: props.results.loanPrincipal,
                rules: [{ required: true, message: "Please input your loanPrincipal!" }],
              })(<Input addonAfter="元" />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="转让基准日"
          >
            {
              props.results && getFieldDecorator("transferDate", {
                initialValue: moment(props.results.transferDate || new Date(), dateFormat),
                getValueFromEvent() {
                  return moment(arguments[1], dateFormat);
                },
                rules: [{ required: true, message: "Please input your transferDate!" }],
              })(
                <DatePicker
                  allowClear={!1}
                  defaultValue={moment(props.results.transferDate, dateFormat)}
                />
              )
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="资产包流水号"
          >
            {
              props.results && getFieldDecorator("packageNum", {
                initialValue: props.results.packageNum,
                rules: [{ required: true, message: "Please input your packageNum!" }],
              })(<Input />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="利息"
          >
            {
              props.results && getFieldDecorator("loanInterset", {
                initialValue: props.results.loanInterset,
                rules: [{ required: true, message: "Please input your loanInterset!" }],
              })(<Input addonAfter="元" />)
            }
          </FormItem>

          <FormItem
            {...tailFormItemLayout}
          >
            <Button className={styles.submitButton} type="primary" htmlType="submite" icon="save" onClick={handleSubmit}>保存</Button>
          </FormItem>
        </Form>
      </Card>

    </div>
  );
}
);

export { View as default };
