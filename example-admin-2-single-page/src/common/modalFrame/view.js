import React from "react";
// import ReactDOM from "react-dom";
// import styles from "./style.less";
import { Modal } from "antd-mobile";

const View = (props) => {
  // console.info(props);
  const { actions, results } = props;
  const { hide, show, reRender } = actions;

  const { visible, title, width, footer, getTableList } = results || {};

  const addModalFunction = (propsValue) => {
    // console.log(propsValue);
    Object.keys(propsValue)
      .map(() => {
        // console.log(v);
        let value;
        if (propsValue.props && propsValue.props.children && propsValue.props.children.props) {
          propsValue.props.modal = {
            show, hide, reRender,
          };
          propsValue.props.children.props.modal = {
            show, hide, reRender,
          };
          value = propsValue.props.children.props;
        } else if (propsValue.children) {
          propsValue.children.map((v1) => addModalFunction(v1));
          value = propsValue.children;
        } else {
          propsValue.props.modal = {
            show, hide, reRender,
          };
          value = propsValue.props;
        }
        return value;
      })
      .filter(v => v.children)
      .map((v) => addModalFunction(v));
  };
  addModalFunction(props.children);
  // console.info(props);

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
    // console.log("renderContent");
    if (props.results.content) {
      const Content = require(`srcDir/${props.results.content}/route`).default;
      // const modal = props.children.props.modal;
      // modal.hide = Close;
      return (
        <Content
          params={props.results.params}
          modal={{ hide: Close, show, reRender }}
          table={{ getTableList, }}
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
