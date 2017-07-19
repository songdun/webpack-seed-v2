import { connect } from "react-most";

export default ({ model, view }) => connect(function (value) {
  return model(value);
})(view);
