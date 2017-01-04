import React from "react";
// import styles from "./style.less";
// import { Form, Icon, Input, Button, Checkbox } from "antd";
import { BrowserRouter, Match, Link } from "react-router";

const AppConfig = window.localStorage.getItem("appconfig");

console.log(AppConfig);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topic = ({ params }) => (
  <div>
    <h3>{params.topicId}</h3>
  </div>
);

const Topics = ({ pathname }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li><Link to={`${pathname}/rendering`}>Rendering with React</Link></li>
      <li><Link to={`${pathname}/components`}>Components</Link></li>
      <li><Link to={`${pathname}/props-v-state`}>Props v. State</Link></li>
    </ul>

    <Match
      pattern={`${pathname}/:topicId`}
      component={Topic}
    />
    <Match
      pattern={pathname}
      exactly
      render={() => (
        <h3>Please select a topic</h3>
    )}
    />
  </div>
);

// 创建react组件
const View = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>

      <hr />

      <Match exactly pattern="/" component={Home} />
      <Match pattern="/about" component={About} />
      <Match pattern="/topics" component={Topics} />
    </div>
  </BrowserRouter>
);

export { View as default };
