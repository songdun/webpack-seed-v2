import loginModel from "srcDir/common/model/loginModel";

const data = loginModel({
  url: "/account/login",
  method: "POST",
});

export { data as default };

