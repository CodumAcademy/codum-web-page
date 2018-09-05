import React, { Fragment } from "react";
import PropTypes from "prop-types";
import withStore from "./store";

const CheckLogin = props => <Fragment>{props.children}</Fragment>;

CheckLogin.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired
};

export default withStore(CheckLogin);
