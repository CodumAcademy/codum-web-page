import React from "react";
import PropTypes from "prop-types";

import RightTriangleButton from "../../Shared/UI/Buttons/RightTriangleButton";
import {
  Container,
  StartTitle,
  StartDescription,
  ButtonContainer
} from "./styles";

const Start = props => (
  <Container>
    <StartTitle>{props.title}</StartTitle>
    <StartDescription>{props.description}</StartDescription>
    <ButtonContainer>
      <RightTriangleButton action={props.startQuiz}>
        COMENZAR
      </RightTriangleButton>
    </ButtonContainer>
  </Container>
);

Start.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  startQuiz: PropTypes.func.isRequired
};

export default Start;
