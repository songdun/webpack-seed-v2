import React from "react";
// import './index.css';
import { Input } from "antd";

// 创建react组件
const TypeNsearch = (props) => {
  console.info(props);
  const { search } = props.actions;
  const error = props.error || {};
  return (
  <div>
    <Input onChange={e => search(e.target.value)} />
    <Input value={props.results && props.results[0].description} />
    <span className={"red " + error.className}>{error.message}</span>
    <ul>
      {props.results && props.results.map(item => <li key={item.id}><a href={item.html_url}>{item.full_name} ({item.stargazers_count})</a></li>)}
    </ul>
  </div>
  );
};

export { TypeNsearch as default };
