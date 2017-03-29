import React from "react";

import styles from "./style.less";
import { Table, Icon, InputItem, Flex, Button, Modal, Toast } from "antd-mobile";
import fetch from "srcDir/common/model/itemModel/fetch";

const Col = Flex.item;
const confirm = Modal.confirm;

const PackagePath = "assetManagement/addAsset/package";


let bankNameInputValue;
let packageNumInputValue;
// 创建react组件
const View = (props) => {
  // console.info("+++++++++++++++++++");
  console.info(props);
  // const { addRouteMatch, history } = props.router;
  const { addRoute } = props.router;

  const { show } = props.modal;
  const { search } = props.actions;
  const error = props.error || {};
  const paramsDefault = {
    Q_bankName_like_string: bankNameInputValue || "",
    Q_packageNum_like_string: packageNumInputValue || "",
  };
  const getTableList = (params) => {
    search(Object.assign(paramsDefault, params));
  };

  const packageManagement = (options) => {
    const { content, params } = options;

    return {
      content: content,
      title: "资产包管理",
      params,
      getTableList,
    };
  };

  const deletePackage = (item) => {
    // console.log(item);
    confirm({
      title: `确定删除出包行-${item.bankName}？`,
      // content: "When clicked the OK button, this dialog will be closed after 1 second",
      onOk() {
        fetch({
          url: "/ap/assetInfo/del",
          method: "POST",
          params: {
            id: item.id
          },
          success(res) {
            Toast.success({
              message: JSON.parse(res.entity).msg,
              description: JSON.parse(res.entity).msg,
            });
            // 刷新列表
            getTableList();
          }
        });
      }
    });
  };
  const showDebtorList = (item) => {
    // console.log("showDebtorList");
    addRoute({ keyName: "资产管理", path: "/AddAsset/DebtorList", name: "借款人列表", title: "debtorList", component: "assetManagement/addAsset/debtorList", paramId: item.id });
  };

  const columns = [
    {
      title: "操作",
      dataIndex: "id",
      key: "id",
      render: (value, item) => (
        <span>
          <a
            // href={`#${item.bankName}`}
            className="ant-dropdown-link"
            onClick={() => showDebtorList(item)}
          >
            <Icon type="solution" />
          </a>
          <span className="ant-divider" />
          <a
            // href="#"
            className="ant-dropdown-link"
            onClick={
              () => show(
                packageManagement({ content: PackagePath, params: { id: value } })
              )
            }
          >
            <Icon type="edit" />
          </a>
          <span className="ant-divider" />
          <a
            // href="#"
            className="ant-dropdown-link"
            onClick={() => deletePackage(item)}
          >
            <Icon type="delete" />
          </a>
          {
            /*
            <span className="ant-divider" />
            <a href="#"><Icon type="plus" /></a>
            */
          }
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
      <Flex type="flex" justify="start" align="middle" className={styles.mb}>
        <Col span={2}>出包行:</Col>
        <Col span={3}>
          <InputItem
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
          <InputItem
            onChange={
              e => {
                packageNumInputValue = e.target.value;
                getTableList({ Q_packageNum_like_string: packageNumInputValue });
              }
            }
          />
        </Col>

        <Col span={2} offset={9} className={styles.tr}>
          <Button type="primary" icon="plus" onClick={() => show(packageManagement({ content: PackagePath }))}>添加</Button>
        </Col>
      </Flex>
      <span className={"red " + error.className}>{error.message}</span>

      {
        props.results && <Table
          rowKey="id"
          dataSource={props.results.rows}
          columns={columns}
          bordered={1}
          // 下面的SubGrid改为添加一个新的页面
          // expandedRowRender={
          //   (item) => {
          //     const SubTable = debtor(item.id);
          //     return <SubTable pid={item.id} />;
          //   }
          // }
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
