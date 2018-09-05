import React from "react";
import PropTypes from "prop-types";

import Button from "./styles";

const RightTriangleButton = props => (
  <Button
    onClick={props.action}
    width={props.width}
    disabled={props.disabled}
    customStyle={props.customStyle}
  >
    {props.children}
  </Button>
);

RightTriangleButton.defaultProps = {
  customStyle: "",
  width: "40%",
  disabled: false
};

RightTriangleButton.propTypes = {
  children: PropTypes.any.isRequired,
  action: PropTypes.func.isRequired,
  width: PropTypes.string,
  customStyle: PropTypes.string,
  disabled: PropTypes.bool
};

export default RightTriangleButton;
