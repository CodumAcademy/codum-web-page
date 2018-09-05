import React from "react";
import PropTypes from "prop-types";
import Fade from "react-reveal";

import {
  ResultContainer,
  ResultTextContainer,
  ResultImageContainer,
  ResultText,
  ResultImage
} from "./styles";

const Result = props => (
  <ResultContainer>
    <ResultTextContainer>
      <Fade bottom cascade>
        <div>
          <ResultText className="font-aguda">{props.title}</ResultText>
          <p>{props.content}</p>
        </div>
      </Fade>
    </ResultTextContainer>
    <ResultImageContainer>
      <Fade bottom cascade>
        <div>
          <ResultImage src={props.leftImageUrl} alt={props.leftImageAlt} />
          <ResultImage src={props.rightImageUrl} alt={props.rightImageAlt} />
        </div>
      </Fade>
    </ResultImageContainer>
  </ResultContainer>
);

Result.propTypes = {
  leftImageUrl: PropTypes.string.isRequired,
  leftImageAlt: PropTypes.string.isRequired,
  rightImageUrl: PropTypes.string.isRequired,
  rightImageAlt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default Result;
