import React from "react";
// import styles from "./style.less";
import { Modal } from "antd";

const View = (props) => {
  // console.log(props);
  const { actions, results } = props;
  const { hide, show, reRender } = actions;

  const { visible, title, width, footer } = results || {};
  props.children.props.modal = {
    show, hide, reRender,
  };

  const renderContent = () => {
    if (props.results.content) {
      const Content = require(`srcDir/${props.results.content}/route`).default;

      return (
        <Content
          params={props.results.params}
          modal={props.children.props.modal}
        />
      );
    }
  };

  const error = props.error || {};

  return (
    <div>

      <span className={"red " + error.className}>{error.message}</span>

      {
        props.results && <Modal
          visible={visible}
          title={title}
          width={width || 800}
          onCancel={hide}
          footer={footer}
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
