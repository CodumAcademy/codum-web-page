import React, { Fragment } from "react";
import PropTypes from "prop-types";

import FullLoading from "../Shared/UI/Loaders/FullLoading";
import withStore from "./store";

const WithAuth = props =>
  props.isLoading ? <FullLoading /> : <Fragment>{props.children}</Fragment>;

WithAuth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default withStore(WithAuth);
