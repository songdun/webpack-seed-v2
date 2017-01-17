import React from "react";
// import ReactDOM from "react-dom";
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

  const Close = () => {
    hide({
      title: results.title,
      content: results.content,
      width: results.width,
      // params: results.params,
      footer: results.footer
    });
  };

  const renderContent = () => {
    if (props.results.content) {
      const Content = require(`srcDir/${props.results.content}/route`).default;
      const modal = props.children.props.modal;
      modal.hide = Close;
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
          onCancel={Close}
          footer={footer}
          maskClosable={!1}
          closable={!1}
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
