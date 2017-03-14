import React from "react";
import styles from "./style.less";
import { Input, Button, Card, DatePicker, Form, Row, Col, notification, Cascader, Select } from "antd";
import moment from "moment";
import store from "store2";

import fetch from "srcDir/common/model/itemModel/fetch";
import city from "srcDir/common/model/cityModel/index";

const FormItem = Form.Item;
const dateFormat2Year = "YYYY";
// const dateFormat = "YYYY-MM-DD";


// 创建react组件
const View = Form.create()((props) => {
  // console.info(props);
  const { params = {}, results, form, actions, modal, table } = props;
  const { pid } = params;
  const { getItem } = actions;
  const { hide } = modal;
  const { getTableList } = table;
  const { validateFieldsAndScroll, getFieldDecorator, resetFields } = form;

  const codeMap = store.session.get("codeMap");

  // 首次加载的时候设置results为空对象
  if (!params && !results) {
    props.results = {};

    // 判断是否为编辑
  } else if (params && (!results || results.id !== params.id)) {
    getItem(params.id);
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
      // console.info(values);
      if (!err) {
        // 格式化时间
        values.closedownYear = values.closedownYear.format(dateFormat2Year);
        // 格式化省市
        values["province.id"] = values.area[0];
        values["area.id"] = values.area[1];
        delete values.area;
        // 格式化select
        values["operateTypeCode.code"] = values.operateTypeCode;
        values["tradeTypeCode.code"] = values.tradeTypeCode;
        delete values.operateTypeCode;
        delete values.tradeTypeCode;
        // console.log("表单结果");
        // 添加父id
        values["apAssetInfo.id"] = pid;
        // console.info(values);
        let url;
        // 判断新增或编辑
        if (params.id) {
          url = "/ad/debtorInfo/update";
          values.id = params.id;
        } else {
          url = "/ad/debtorInfo/add/main";
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
        这是新增借款人
        <Form>
          <FormItem
            {...formItemLayout}
            label="借款人名称"
          >

            {
              props.results && getFieldDecorator("name", {
                initialValue: props.results.name,
                rules: [{ required: true, message: "Please input your name!" }],
              })(<Input />)
            }

          </FormItem>
          <FormItem
            {...formItemLayout}
            label="注册资本"
          >
            {
              props.results && getFieldDecorator("regCapital", {
                initialValue: props.results.regCapital,
                rules: [
                  { required: true, message: "Please input your regCapital!" },
                  // { len: 4, pattern: /^([\d]{4})$/, message: "资产包年份!" }
                ],
              })(<Input addonAfter="万元" />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="经营现状"
          >
            {
              props.results && getFieldDecorator("operateTypeCode", {
                initialValue: props.results.operateTypeCode,
                rules: [{ required: true, message: "请选择经营现状!" }],
              })(<Select placeholder="请选择" >
                {
                  codeMap.filter((x) => /A_004\w+/.test(x.code)).map(
                    (v) => <Option value={v.code}>{v.name}</Option>
                  )
                }
              </Select>)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="停业年份"
          >
            {
              props.results && getFieldDecorator("closedownYear", {
                initialValue: moment(props.results.closedownYear || new Date(), dateFormat2Year),
                getValueFromEvent() {
                  return moment(arguments[1], dateFormat2Year);
                },
                rules: [{ required: true, message: "Please input your closedownYear!" }],
              })(
                <DatePicker
                  allowClear={!1}
                  defaultValue={moment(props.results.closedownYear, dateFormat2Year)}
                />
              )
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="行业类型"
          >
            {
              props.results && getFieldDecorator("tradeTypeCode", {
                initialValue: props.results.tradeTypeCode,
                rules: [
                  { required: true, message: "Please input your tradeTypeCode!" },
                  // { len: 4, pattern: /^([\d]{4})$/, message: "资产包流水号为数字且最多4位!" }
                ],
              })(<Select placeholder="请选择" >
                {
                  codeMap.filter((x) => /A_002\w+/.test(x.code)).map(
                    (v) => <Option value={v.code}>{v.name}</Option>
                  )
                }
              </Select>)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="所属区域"
          >
            {
              props.results && getFieldDecorator("area", {
                initialValue: props.results.area,
                rules: [{ required: true, message: "Please input your area!" }],
              })(<Cascader
                allowClear={false}
                options={city}
                defaultValue=""
                onChange=""
                placeholder="请选择"
              />)
            }
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="公司地址"
          >
            {
              props.results && getFieldDecorator("regAddress", {
                initialValue: props.results.regAddress,
                rules: [{ required: true, message: "Please input your regAddress!" }],
              })(<Input />)
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
