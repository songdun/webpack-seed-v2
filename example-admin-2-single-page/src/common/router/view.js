import React from "react";
import ReactDOM from "react-dom";
import Most from "react-most";
// import styles from "./style.less";
import { Router, Route } from "react-router";
import history from "srcDir/common/router/history";
// import Menu from "srcDir/common/menu/route";

// 创建react组件
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addRouteMatch = this.addRouteMatch.bind(this);
    // console.log(props);
  }
  // 添加一个新的路由（私有）
  addRouteMatch({ keyName, component, name, path, title, paramId }) {
    console.log({ keyName, component, name, path, title });
    // console.log(this);
    const { state } = this;
    if (!state[keyName]) {
      state[keyName] = [];
    }
    state[keyName].push({ component, name, path, title, paramId });
    // console.log(this);
    this.forceUpdate();
  }
  // 添加一个新的路由并立即跳转
  addRoute({ keyName, component, name, path, title, paramId }, _this = this) {
    // console.log(_this);
    _this.addRouteMatch({ keyName, component, name, path, title, paramId });
    history.push(path);
  }
  render() {
    // console.log("routerProps");
    // console.log(this);
    const { props, state } = this;
    const router = {
      // addRouteMatch: this.addRouteMatch,
      history: history,
      // 返回
      back: () => {
        history.go(-1);
      },
      // 返回并在完成后删除该路由以确保GC，
      back2refresh: () => {
        history.go(-1);
        this.state = {};
        this.forceUpdate();
      },
      addRoute: ({ keyName, component, name, path, title, paramId }) => {
        this.addRoute({ keyName, component, name, path, title, paramId }, this);
      }
    };
    const renderContentPage = (componentPath) => {
      // console.log(componentPath);
      if (!componentPath) return false;
      const ContentPage = require(`srcDir/${componentPath}/route`).default;
      if (ContentPage) {
        ReactDOM.render(
          <Most>
            <ContentPage router={router} modal={props.modal} />
          </Most>, document.getElementById("contentContainer")
        );
      }

      return (
        <div />
      );
    };
    const renderAddedContentPage = (componentPath, paramId) => {
      console.log("renderAddedContentPage");
      const contentPage = require(`srcDir/${componentPath}/route`).default;
      if (contentPage) {
        const SubTable = contentPage(paramId);
        ReactDOM.render(
          <Most>
            <SubTable pid={paramId} router={router} modal={props.modal} />
          </Most>, document.getElementById("contentContainer")
        );
      }

      return (
        <div />
      );
    };
    return (
      <Router history={history}>
        <div>
          {
            props.children
          }
          {
            props.results && Object.keys(props.results.MenuList).map(
              (value) =>
                props.results.MenuList[value].map(
                  (val) =>
                    <Route
                      exact
                      path={val.path}
                      component={() => renderContentPage(val.component)}
                    />

                )
            )

          }
          {
            state && Object.keys(state).map(
              (value) =>
                state[value].map(
                  (val) => (<Route
                    exact
                    path={val.path}
                    component={() => renderAddedContentPage(val.component, val.paramId)}
                  />)


                )
            )
          }


        </div>
      </Router>
    );
  }
}


export { View as default };
