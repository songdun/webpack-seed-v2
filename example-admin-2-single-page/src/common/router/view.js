import React from "react";
import ReactDOM from "react-dom";
import Most from "react-most";
// import styles from "./style.less";
import { MemoryRouter, Match } from "react-router";
import Menu from "srcDir/common/menu/route";
import ModalFrame from "srcDir/common/modalFrame/route";


const renderContentPage = (componentPath) => {
  // console.log(componentPath);
  const ContentPage = require(`srcDir/${componentPath}/route`).default;
  if (ContentPage) {
    ReactDOM.render(
      <Most>
        <ModalFrame>
          <ContentPage />
        </ModalFrame>
      </Most>, document.getElementById("contentContainer")
    );
  }

  return (
    <div />
  );
};

// 创建react组件
const View = (props) => (
  <MemoryRouter>
    <div>
      <Menu />
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


    </div>
  </MemoryRouter>
);


export { View as default };
