import rest from "rest";
// 添加统一的host
var configURL = require("srcRootDir/webpack-config/base/url.config.js");
import restpathPrefix from "rest/interceptor/pathPrefix";
// 让rest可以传参
import template from "rest/interceptor/params";
const ajax = rest.wrap(restpathPrefix, { prefix: configURL.remoteServer.url }).wrap(template, { params: { } });

export { ajax as default };
