import React from "react";
// import styles from "./style.less";
import { Modal, Button } from "antd";

const View = (props) => {
  const { hide, show, reRender } = props.actions;
  props.children.props.modal = {
    show, hide, reRender
  };

  const renderContent = () => {
    if (props.results.content) {
      const Content = require(`srcDir/${props.results.content}/route`).default;
      // console.info(Content);
      return <Content />;
    }
  };

  const error = props.error || {};

  return (
    <div>

      <span className={"red " + error.className}>{error.message}</span>

      {
        props.results && <Modal
          visible={props.results.visible}
          title="Title"
          onCancel={hide}
          footer={[
            <Button key="back" type="ghost" icon="rollback" onClick={hide}>返回</Button>,
            <Button key="submit" type="primary" icon="save">
              保存
            </Button>,
          ]}
        >
          {
            renderContent()
          }
        </Modal>
      }

      {
        props.children
      }

    </div>
  );
};

export { View as default };
