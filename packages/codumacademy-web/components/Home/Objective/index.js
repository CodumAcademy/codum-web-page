import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal/Fade";

import {
  ObjectiveContainer,
  ObjectiveImageContainer,
  ObjectiveTextContainer,
  ObjectiveImage,
  ObjectiveTitle,
  ObjectiveDescription
} from "./styles";

const Objective = props => (
  <ObjectiveContainer>
    <ObjectiveImageContainer>
      <Fade left>
        <ObjectiveImage src={props.imageUrl} alt={props.imageAlt} />
      </Fade>
    </ObjectiveImageContainer>
    <ObjectiveTextContainer>
      <Fade right>
        <ObjectiveTitle className="font-aguda">{props.title}</ObjectiveTitle>
        <ObjectiveDescription>{props.content}</ObjectiveDescription>
      </Fade>
    </ObjectiveTextContainer>
  </ObjectiveContainer>
);

Objective.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Objective;
