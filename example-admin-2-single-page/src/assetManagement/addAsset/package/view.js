import React from "react";
// import styles from "./style.less";
import { Input, Row, Col, Button, Card, DatePicker, Form } from "antd";
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
  console.info(props);
  const { params, results, modal } = props;
  const { hide } = modal;
  if (params && !results) {
    props.actions.getItem(params);
  }
  const error = props.error || {};
  // const paramsDefault = {
  //   Q_bankName_like_string: bankNameInputValue || "",
  //   Q_packageNum_like_string: packageNumInputValue || "",
  //   _index: "1"
  // };

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
        <Row type="flex" justify="start" align="middle">
          <Col span={11}>
            <Row type="flex" justify="start" align="middle">
              <Col span={12}>
                出包行:
              </Col>
              <Col span={12}>
                {
                  props.results && <Input defaultValue={props.results.bankName} />
                }
                {
                  !props.results && <Input />
                }
              </Col>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <Col span={12}>
                资产包年份:
              </Col>
              <Col span={12}>
                {
                  props.results && <DatePicker format="YYYY" minView="2" defaultValue={moment(props.results.packageYear, dateFormat)} />
                }
                {
                  !props.results && <DatePicker format="YYYY" minView="2" />
                }
              </Col>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <Col span={12}>
                未偿还本金:
              </Col>
              <Col span={12}>
                {
                  props.results && <Input addonAfter="元" defaultValue={props.results.loanPrincipal} />
                }
                {
                  !props.results && <Input addonAfter="元" />
                }
              </Col>
            </Row>
          </Col>
          <Col span={11} offset={2}>
            <Row type="flex" justify="start" align="middle">
              <Col span={12}>
                转让基准日:
              </Col>
              <Col span={12}>
                {
                  props.results && <DatePicker defaultValue={moment(props.results.transferDate, dateFormat)} />
                }
                {
                  !props.results && <DatePicker />
                }
              </Col>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <Col span={12}>
                资产包流水号:
              </Col>
              <Col span={12}>
                {
                  props.results && <Input defaultValue={props.results.packageNum} />
                }
                {
                  !props.results && <Input />
                }
              </Col>
            </Row>
            <Row type="flex" justify="start" align="middle">
              <Col span={12}>
                利息:
              </Col>
              <Col span={12}>
                {
                  props.results && <Input addonAfter="元" defaultValue={props.results.loanInterset} />
                }
                {
                  !props.results && <Input addonAfter="元" />
                }
              </Col>
            </Row>
          </Col>
        </Row>

        <Row type="flex" justify="space-around" align="middle">
          <Col span={2}>
            <Button type="primary" icon="save">保存</Button>
          </Col>
          <Col span={2}>
            <Button icon="rollback" onClick={hide}>返回</Button>
          </Col>
        </Row>
      </Card>
      <Form vertical>
        <FormItem label="Title">
          <Input />
        </FormItem>
        <FormItem label="Description">
          <Input type="textarea" />
        </FormItem>
      </Form>

    </div>
  );
}
);

export { View as default };
