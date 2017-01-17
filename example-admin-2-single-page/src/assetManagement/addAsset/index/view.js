import React from "react";
import styles from "./style.less";
import { Table, Icon, Tooltip, Input, Breadcrumb, Row, Col, Button } from "antd";

const PackagePath = "assetManagement/addAsset/package";

const packageManagement = (options) => {
  const { content, params } = options;
  return {
    content: content,
    title: "资产包管理",
    params,
  };
};

let bankNameInputValue;
let packageNumInputValue;
// 创建react组件
const View = (props) => {
  console.info(props);
  const { show } = props.modal;
  const { search } = props.actions;
  const error = props.error || {};
  const paramsDefault = {
    Q_bankName_like_string: bankNameInputValue || "",
    Q_packageNum_like_string: packageNumInputValue || "",
    _index: "1"
  };
  const getTableList = (params) => {
    search(Object.assign(paramsDefault, params));
  };

  const columns = [
    {
      title: "操作",
      dataIndex: "id",
      key: "id",
      render: (value) => (
        <span>
          <a href="#"><Tooltip placement="left" title={"新增借款人"}><Icon type="plus" /></Tooltip></a>
          <span className="ant-divider" />
          <a
            href="#"
            className="ant-dropdown-link"
            onClick={
              () => show(
                packageManagement({ content: PackagePath, params: { id: value } })
              )
            }
          >
            <Tooltip placement="top" title={"管理"}><Icon type="edit" /></Tooltip>
          </a>
          <span className="ant-divider" />
          <a href="#" className="ant-dropdown-link">
            <Tooltip placement="right" title={"删除"}><Icon type="delete" /></Tooltip>
          </a>
        </span>
      ),
    }, {
      title: "出包行",
      dataIndex: "bankName",
      key: "bankName",
    }, {
      title: "批次",
      dataIndex: "",
      key: "",
      render: (text, record) => (
          record.packageYear + "-" + record.packageNum
      ),
    }, {
      title: "转让基准日",
      dataIndex: "transferDate",
      key: "transferDate",
    }, {
      title: "总贷款余额（元）",
      dataIndex: "",
      key: "",
      render: (text, record) => (
          record.loanPrincipal + record.loanInterset
      ),
    }, {
      title: "未偿还本金（元）",
      dataIndex: "loanPrincipal",
      key: "loanPrincipal",
    }, {
      title: "利息（元）",
      dataIndex: "loanInterset",
      key: "loanInterset",
    }
  ];

  return (
    <div>

      <Breadcrumb separator=">" className={styles.Breadcrumb}>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item>资产管理</Breadcrumb.Item>
        <Breadcrumb.Item>新增资产</Breadcrumb.Item>
      </Breadcrumb>
      <Row type="flex" justify="start" align="middle">
        <Col span={2}>出包行:</Col>
        <Col span={3}>
          <Input
            onChange={
              e => {
                bankNameInputValue = e.target.value;
                getTableList({ Q_bankName_like_string: bankNameInputValue });
              }
            }
          />
        </Col>
        <Col span={2} offset={3}>资产包流水号:</Col>
        <Col span={3}>
          <Input
            onChange={
              e => {
                packageNumInputValue = e.target.value;
                getTableList({ Q_packageNum_like_string: packageNumInputValue });
              }
            }
          />
        </Col>

        <Col span={2} offset={3}>
          <Button type="primary" icon="plus" onClick={() => show(packageManagement({ content: PackagePath }))}>添加</Button>
        </Col>
      </Row>
      <span className={"red " + error.className}>{error.message}</span>

      {
        props.results && <Table
          rowKey="id"
          dataSource={props.results.rows}
          columns={columns}
          expandedRowRender={() => <Table
            rowKey="id"
            dataSource={props.results.rows}
            columns={columns}
          />
          }
          pagination={{
            total: props.results.totalRows,
            current: props.results.page,
            onChange: (current) => {
              // console.log("Current: ", current);
              getTableList({ _index: current });
            },
          }}
        />
      }

    </div>
  );
};

export { View as default };
