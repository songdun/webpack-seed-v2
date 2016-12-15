import React from "react";
import styles from "./style.less";
import { Table, Icon, Tooltip, Input } from "antd";

const columns = [
  {
    title: "操作",
    dataIndex: "id",
    key: "id",
    render: () => (
      <span>
        <a href="#"><Tooltip placement="left" title={"新增借款人"}><Icon type="plus" /></Tooltip></a>
        <span className="ant-divider" />
        <a href="#" className="ant-dropdown-link">
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
// 创建react组件
const View = (props) => {
    // console.info(props)
  const { search } = props.actions;
  const error = props.error || {};

  return (
    <div>
      <div className={styles.test}>123</div>
      <Input onChange={e => search(e.target.value)} />
      <span className={"red " + error.className}>{error.message}</span>

      {
        props.results && <Table
          rowKey="id"
          dataSource={props.results}
          columns={columns}
          expandedRowRender={() => <Table
            rowKey="id"
            dataSource={props.results}
            columns={columns}
          />
          }
        />
      }

    </div>
  );
};

export { View as default };
