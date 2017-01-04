import rest from "rest";
import Cookies from "js-cookie";
// 获取token
const token = Cookies.get("token");
// header添加token
import defaultRequest from "rest/interceptor/defaultRequest";

// 添加统一的host
const configURL = require("srcRootDir/webpack-config/base/url.config.js");
import restpathPrefix from "rest/interceptor/pathPrefix";
// 让rest可以传参
import template from "rest/interceptor/params";
const ajax = rest
  .wrap(defaultRequest, { headers: { token, } })
  .wrap(restpathPrefix, { prefix: configURL.remoteServer.url })
  .wrap(template, {});

export { ajax as default };
