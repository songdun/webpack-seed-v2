import React from "react";
import ReactDOM from "react-dom";
import Most from "react-most";
// import styles from "./style.less";
import { BrowserRouter, Match } from "react-router";
import Menu from "srcDir/common/menu/route";
import ModalFrame from "srcDir/common/modalFrame/route";


// 创建react组件
// const View = (props) => {
//   console.log("routerProps");
//   console.log(props);
//   const addRouteMatch = ({ keyName, component, name, path, title }) => {
//     if (!props.results.MenuList[keyName]) {
//       props.results.MenuList[keyName] = [];
//     }
//     props.results.MenuList[keyName].push({ component, name, path, title });
//     console.log(props.results.MenuList);
//   };
//   const renderContentPage = (componentPath) => {
//     // console.log(componentPath);
//     const ContentPage = require(`srcDir/${componentPath}/route`).default;
//     if (ContentPage) {
//       ReactDOM.render(
//         <Most>
//           <ModalFrame>
//             <ContentPage router={{ addRouteMatch }} />
//           </ModalFrame>
//         </Most>, document.getElementById("contentContainer")
//       );
//     }

//     return (
//       <div />
//     );
//   };
//   return (
//     <BrowserRouter>
//       <div>
//         <Menu router={addRouteMatch} />
//         {
//           props.results && Object.keys(props.results.MenuList).map(
//             (value) =>
//               props.results.MenuList[value].map(
//                 (val) =>
//                   <Match
//                     exactly
//                     pattern={val.path}
//                     component={() => renderContentPage(val.component)}
//                   />

//               )
//           )

//         }


//       </div>
//     </BrowserRouter>
//   );
// };

// 创建react组件
class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.addRouteMatch = this.addRouteMatch.bind(this);
  }
  addRouteMatch({ keyName, component, name, path, title, paramId }) {
    // console.log({ keyName, component, name, path, title });
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
      const ContentPage = require(`srcDir/${componentPath}/route`).default;
      if (ContentPage) {
        ReactDOM.render(
          <Most>
            <ModalFrame>
              <ContentPage router={{ addRouteMatch: this.addRouteMatch }} />
            </ModalFrame>
          </Most>, document.getElementById("contentContainer")
        );
      }

      return (
        <div />
      );
    };
    const renderAddedContentPage = (componentPath, paramId) => {
      // console.log("renderAddedContentPage");
      const contentPage = require(`srcDir/${componentPath}/route`).default;
      if (contentPage) {
        const SubTable = contentPage(paramId);
        ReactDOM.render(
          <Most>
            <ModalFrame>
              <SubTable assetId={paramId} router={{ addRouteMatch: this.addRouteMatch }} />
            </ModalFrame>
          </Most>, document.getElementById("contentContainer")
        );
      }

      return (
        <div />
      );
    };
    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}


export { View as default };
