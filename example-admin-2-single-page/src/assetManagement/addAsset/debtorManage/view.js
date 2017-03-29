import React from "react";
import styles from "./style.less";
import { Flex, Button } from "antd-mobile";
import Tab from "srcDir/common/tab/";
const Col = Flex.Item;
// import fetch from "srcDir/common/model/itemModel/fetch";


// const confirm = Modal.confirm;

// const PackagePath = "assetManagement/addAsset/package";

const TabConf = {
  defaultKey: "2", // 初始化展示tab
  tabs: [{
    title: "主体信息",
    key: "1",
    path: "assetManagement/addAsset/main",
  }, {
    title: "计息管理",
    key: "2",
    path: "",
  }]
};

// 创建react组件
const View = (props) => {
  console.info("debtorManage");
  console.info(props);
  const error = props.error || {};
  const { router, pid, modal } = props;
  const { back } = router;
  return (
    <div>
      <Flex type="flex" justify="start" align="middle" className={styles.mb}>
        <Col span={2} />
        <Col span={3} />

        <Col span={2} offset={3} />
        <Col span={3} />

        <Col span={2} offset={7} className={styles.tr} />

        <Col span={2} offset={0} className={styles.tr}>
          <Button icon="rollback" onClick={back}>返回</Button>
        </Col>
      </Flex>
      <span className={"red " + error.className}>{error.message}</span>
      <Tab conf={TabConf} router={router} pid={pid} modal={modal} />
      {
        /*
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
        */
      }

    </div>
  );
};

export { View as default };
