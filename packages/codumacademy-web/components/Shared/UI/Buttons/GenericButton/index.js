import React from "react";
import PropTypes from "prop-types";

import Button from "./styles";

const GenericButton = props => (
  <Button
    onClick={props.action}
    width={props.width}
    disabled={props.disabled}
    customStyle={props.customStyle}
  >
    {props.children}
  </Button>
);

GenericButton.defaultProps = {
  customStyle: "",
  width: "40%",
  disabled: false
};

GenericButton.propTypes = {
  children: PropTypes.any.isRequired,
  action: PropTypes.func.isRequired,
  width: PropTypes.string,
  customStyle: PropTypes.string,
  disabled: PropTypes.bool
};

export default GenericButton;
