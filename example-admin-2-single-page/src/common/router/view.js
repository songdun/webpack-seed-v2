import React from "react";
import ReactDOM from "react-dom";
import Most from "react-most";
// import styles from "./style.less";
import { MemoryRouter, Match } from "react-router";
// import Menu from "srcDir/common/menu/route";

// 创建react组件
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addRouteMatch = this.addRouteMatch.bind(this);
    // console.log(props);
  }
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
  render() {
    // console.log("routerProps");
    // console.log(this);
    const { props, state } = this;
    const renderContentPage = (componentPath) => {
      // console.log(componentPath);
      if (!componentPath) return false;
      const ContentPage = require(`srcDir/${componentPath}/route`).default;
      if (ContentPage) {
        ReactDOM.render(
          <Most>
            <ContentPage router={{ addRouteMatch: this.addRouteMatch }} modal={props.modal} />
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
            <SubTable assetId={paramId} router={{ addRouteMatch: this.addRouteMatch }} modal={props.modal} />
          </Most>, document.getElementById("contentContainer")
        );
      }

      return (
        <div />
      );
    };
    return (
      <MemoryRouter>
        <div>
          {
            props.children
          }
          {
            props.results && Object.keys(props.results.MenuList).map(
              (value) =>
                props.results.MenuList[value].map(
                  (val) =>
                    <Match
                      exactly
                      pattern={val.path}
                      component={() => renderContentPage(val.component)}
                    />

                )
            )

          }
          {
            state && Object.keys(state).map(
              (value) =>
                state[value].map(
                  (val) => (<Match
                    exactly
                    pattern={val.path}
                    component={() => renderAddedContentPage(val.component, val.paramId)}
                  />)


                )
            )
          }


        </div>
      </MemoryRouter>
    );
  }
}


export { View as default };
