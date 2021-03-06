import React from "react";
import styles from "./style.less";
import { Table, Icon, Tooltip, Modal, notification, Breadcrumb, Row, Col, Input, Button } from "antd";
import fetch from "srcDir/common/model/itemModel/fetch";


const confirm = Modal.confirm;

const ComponentPath = "assetManagement/addAsset/main";

let nameInputValue;
let packageNumInputValue;
// 创建react组件
const View = (props) => {
  // console.info("+++++++++++++++++++");
  console.info(props);
  const { pid, actions, router, modal } = props;
  const { back2refresh, addRoute } = router;
  const { show } = modal;

  // 需在操作后附加数据ID
  const searchSubName = Object.keys(actions).filter((v) => v.match(/searchSub/))[0];
  const searchSub = actions[searchSubName];
  // console.log(searchSubName);
  const error = props.error || {};
  const paramsDefault = {
    Q_name_like_string: nameInputValue || "",
    Q_packageNum_like_string: packageNumInputValue || "",
    "Q_t.apAssetInfo.id_eq_long": pid || ""
  };

  const getTableList = (params) => {
    // console.log("getTableList");
    searchSub(Object.assign(paramsDefault, params));
  };

  const addAdebtor = (options) => {
    const { content, params } = options;
    // console.log("getTableList");
    // console.log(getTableList);
    return {
      content: content,
      title: "新增借款人",
      params,
      getTableList,
    };
  };

  const showTab = (item) => {
    // console.log("showDebtorList");
    addRoute({ keyName: "资产管理", path: "/AddAsset/DebtorManage", name: "借款人管理", title: "debtorManage", component: "assetManagement/addAsset/debtorManage", paramId: item.id });
  };

  const deletePackage = (item) => {
    // console.log(item);
    confirm({
      title: `确定删除借款人-${item.name}？`,
      // content: "When clicked the OK button, this dialog will be closed after 1 second",
      onOk() {
        fetch({
          url: "/ad/debtorInfo/del",
          method: "POST",
          params: {
            id: item.id
          },
          success(res) {
            notification.success({
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

  const columns = [
    {
      title: "操作",
      dataIndex: "id",
      key: "id",
      render: (value, item) => (
        <span>
          <a
            // href="#"
            className="ant-dropdown-link"
            onClick={
              () => showTab(item)
            }
          >
            <Tooltip placement="top" title={"管理借款人"}><Icon type="edit" /></Tooltip>
          </a>
          <span className="ant-divider" />
          <a
            href="#"
            className="ant-dropdown-link"
            onClick={() => deletePackage(item)}
          >
            <Tooltip placement="right" title={"删除借款人"}><Icon type="delete" /></Tooltip>
          </a>
        </span>
      ),
    }, {
      title: "借款人",
      dataIndex: "name",
      key: "name",
    }, {
      title: "企业类型",
      dataIndex: "companyTypeCode.name",
      key: "companyTypeCode.name",
    }, {
      title: "行业类型",
      dataIndex: "tradeTypeCode.name",
      key: "tradeTypeCode.name",
    }, {
      title: "法人代表",
      dataIndex: "legalPerson",
      key: "legalPerson",
    }, {
      title: "注册资本（万元）",
      dataIndex: "regCapital",
      key: "regCapital",
    }, {
      title: "经营现状",
      dataIndex: "operateTypeCode.name",
      key: "operateTypeCode.name",
    }
  ];

  return (
    <div>
      <Breadcrumb separator=">" className={styles.mb}>
        <Breadcrumb.Item href="/">首页</Breadcrumb.Item>
        <Breadcrumb.Item>资产管理</Breadcrumb.Item>
        <Breadcrumb.Item>新增资产</Breadcrumb.Item>
        <Breadcrumb.Item>{`${window.location.hash.substring(1)}-借款人列表`}</Breadcrumb.Item>
      </Breadcrumb>
      <Row type="flex" justify="start" align="middle" className={styles.mb}>
        <Col span={2}>借款人:</Col>
        <Col span={3}>
          <Input
            onChange={
              e => {
                nameInputValue = e.target.value;
                getTableList({ Q_name_like_string: nameInputValue });
              }
            }
          />
        </Col>
        <Col span={2} offset={3}>
          {/*
            资产包流水号:
          */}
        </Col>
        <Col span={3}>
          {/*
            <Input
              onChange={
                e => {
                  packageNumInputValue = e.target.value;
                  getTableList({ Q_packageNum_like_string: packageNumInputValue });
                }
              }
            />
          */}
        </Col>

        <Col span={2} offset={7} className={styles.tr}>
          <Button type="primary" icon="plus" onClick={() => show(addAdebtor({ content: ComponentPath, params: { pid: pid } }))}>添加</Button>
        </Col>
        <Col span={2} offset={0} className={styles.tr}>
          <Button icon="rollback" onClick={back2refresh}>返回</Button>
        </Col>
      </Row>
      <span className={"red " + error.className}>{error.message}</span>

      {
        props.results && <Table
          rowKey="id"
          dataSource={props.results.rows}
          columns={columns}
          bordered={1}
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
