import React, { Fragment } from "react";
import PropTypes from "prop-types";

import HR from "./styles";

const Separator = props => (
  <Fragment>
    <HR
      color={props.color}
      margin={props.margin}
      width={props.width}
      customStyle={props.customStyle}
    />
  </Fragment>
);

Separator.defaultProps = {
  color: "#bbbbbb",
  margin: "3rem",
  width: "50%",
  customStyle: ""
};

Separator.propTypes = {
  color: PropTypes.string,
  margin: PropTypes.string,
  width: PropTypes.string,
  customStyle: PropTypes.string
};

export default Separator;
