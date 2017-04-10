import React from "react";
import styles from "./style.less";
import { Input, Button, Card, DatePicker, Form, Row, Col, notification } from "antd";
import moment from "moment";

import fetch from "srcDir/common/model/itemModel/fetch";

const FormItem = Form.Item;
const dateFormat = "YYYY-MM-DD";

// 创建react组件
const View = Form.create()((props) => {
  // console.info(props);
  const { params, results, form, actions, modal, table } = props;
  const { getItem } = actions;
  const { hide } = modal;
  const { getTableList } = table;
  const { validateFieldsAndScroll, getFieldDecorator, resetFields } = form;

  // 首次加载的时候设置results为空对象
  if (!params && !results) {
    props.results = {};

    // 判断是否为编辑
  } else if (params && (!results || results.id !== params.id)) {
    getItem(params);
  }
  // console.log(params);
  const error = props.error || {};

  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  };

  /**
   * 返回操作
   * 需要执行以下步骤
   * 1. 隐藏modal
   * 2. 重置表单以清除验证
   * 3. 清除表单值
   */
  const handleBack = () => {
    hide();
    resetFields();
    getItem();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFieldsAndScroll((err, values) => {
      // console.log(arguments);
      if (!err) {
        // 格式化时间
        values.transferDate = values.transferDate.format(dateFormat);
        // console.log("表单结果");
        // console.info(values);

        let url;
        // 判断新增或编辑
        if (params) {
          url = "/ap/assetInfo/update";
          values.id = params.id;
        } else {
          url = "/ap/assetInfo/add";
        }
        fetch({
          url,
          method: "POST",
          params: values,
          success(res) {
            notification.success({
              message: JSON.parse(res.entity).msg,
              description: JSON.parse(res.entity).msg,
            });
            // 刷新列表
            getTableList();
            handleBack();
          }
        });
      } else {
        notification.warning({
          message: "表单验证没有通过哦",
          description: "表单里有内容没有通过验证，请修改！",
        });
      }
    });
  };
  return (
    <div>

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
                rules: [
                  { required: true, message: "Please input your packageNum!" },
                  { len: 4, pattern: /^([\d]{4})$/, message: "资产包流水号为数字且最多4位!" }
                ],
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

          <FormItem>
            <Row type="flex" justify="space-around" align="middle">
              <Col span={12}>
                <Button className={styles.submitButton} type="primary" htmlType="submite" icon="save" size="large" onClick={handleSubmit}>保存</Button>
              </Col>
              <Col span={12}>
                <Button className={styles.submitBack} icon="rollback" size="large" onClick={handleBack}>返回</Button>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </Card>

    </div>
  );
}
);

export { View as default };
