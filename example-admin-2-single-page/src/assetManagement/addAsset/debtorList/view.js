import React from "react";
// import styles from "./style.less";
import { Table, Icon, Tooltip, Modal, notification } from "antd";
import fetch from "srcDir/common/model/itemModel/fetch";

const confirm = Modal.confirm;

// const PackagePath = "assetManagement/addAsset/package";

let bankNameInputValue;
let packageNumInputValue;
// 创建react组件
const View = (props) => {
  // console.info("+++++++++++++++++++");
  // console.info(props);
  // const { show } = props.modal;
  const { assetId } = props;
  const { searchSub } = props.actions;
  const error = props.error || {};
  const paramsDefault = {
    Q_bankName_like_string: bankNameInputValue || "",
    Q_packageNum_like_string: packageNumInputValue || "",
    "Q_t.apAssetInfo.id_eq_long": assetId || ""
  };
  // if (props.id) {
  //   searchSub(paramsDefault);
  // }
  const getTableList = (params) => {
    searchSub(Object.assign(paramsDefault, params));
  };

  // const packageManagement = (options) => {
  //   const { content, params } = options;
  //   // console.log("getTableList");
  //   // console.log(getTableList);
  //   return {
  //     content: content,
  //     title: "资产包管理",
  //     params,
  //     getTableList,
  //   };
  // };

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
            href="#"
            className="ant-dropdown-link"
            // onClick={
            //   () => show(
            //     packageManagement({ content: PackagePath, params: { id: value } })
            //   )
            // }
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

      <span className={"red " + error.className}>{error.message}</span>

      {
        props.results && <Table
          rowKey="id"
          dataSource={props.results.rows}
          columns={columns}
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
