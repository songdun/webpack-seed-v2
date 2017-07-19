import { connect } from "react-most";

export default ({ model, view }) => (
  (id) => connect(function (value) {
    return model(id)(value);
  })(view)
);
