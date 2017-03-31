const content = require("./content.ejs");
const layout = require("layout-without-nav");

module.exports = layout.init({
  pageTitle: "卡修之家",
}).run(content());
