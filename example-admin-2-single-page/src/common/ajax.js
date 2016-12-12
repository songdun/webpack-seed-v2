import rest from "rest";
// 让rest可以传参
import template from "rest/interceptor/params";
const ajax = rest.wrap(template, { params: { } });

export { ajax as default };
