import React from "react";
import PropTypes from "prop-types";

import { GoalBoxContainer, GoalBoxImage } from "./styles";

const GoalBox = props => (
  <GoalBoxContainer>
    <GoalBoxImage src={props.imageUrl} alt={props.imageAlt} />
    <p>{props.summary}</p>
  </GoalBoxContainer>
);
GoalBox.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired
};

export default GoalBox;
