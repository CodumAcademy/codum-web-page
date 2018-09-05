import React, { Fragment } from "react";
import PropTypes from "prop-types";

const TextToHTML = props => (
  <Fragment dangerouslySetInnerHTML={{ __html: props.text }} />
);

TextToHTML.propTypes = {
  text: PropTypes.string.isRequired
};

export default TextToHTML;
