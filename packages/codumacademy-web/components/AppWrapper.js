import React, { Fragment } from "react";
import Router from "next/router";
import PropTypes from "prop-types";

Router.onRouteChangeStart = () => {
  document.body.classList.add("body-transition");
};

Router.onRouteChangeComplete = () => {
  document.body.classList.remove("body-transition");
};

Router.onRouteChangeError = () => {
  document.body.classList.remove("body-transition");
};

const AppWrapper = props => <Fragment>{props.children}</Fragment>;

AppWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  apolloClient: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

export default AppWrapper;
