import React from "react";
import PropTypes from "prop-types";

import Building from "../components/Building";

export default class Error extends React.Component {
  static propTypes = {
    statusCode: PropTypes.any.isRequired
  };
  static getInitialProps({ res, err }) {
    let code;
    if (res) code = res.statusCode;
    else code = err ? err.statusCode : null;

    return { statusCode: code };
  }

  render() {
    return this.props.statusCode === 404 && <Building />;
  }
}
