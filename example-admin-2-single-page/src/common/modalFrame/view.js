import React from "react";
// import styles from "./style.less";
import { Modal, Button } from "antd";

const View = (props) => {
  console.info(props);
  const { back } = props.actions;
  const error = props.error || {};

  return (
    <div>

      <span className={"red " + error.className}>{error.message}</span>

      <Modal
        visible={1}
        title="Title"
        footer={[
          <Button key="back" type="ghost" size="large" onClick={back}>Return</Button>,
          <Button key="submit" type="primary" size="large">
            Submit
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>

    </div>
  );
};

export { View as default };
