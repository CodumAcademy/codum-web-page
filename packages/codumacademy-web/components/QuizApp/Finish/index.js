import React from "react";
import PropTypes from "prop-types";

import RightTriangleButton from "../../Shared/UI/Buttons/RightTriangleButton";
import {
  Container,
  FinishTitle,
  FinishDescription,
  ButtonContainer
} from "./styles";

const Finish = props => (
  <Container>
    <FinishTitle>{props.title}</FinishTitle>
    <FinishDescription>{props.description}</FinishDescription>
    <ButtonContainer>
      <RightTriangleButton action={props.finishQuiz}>
        IR A MI PERFIL
      </RightTriangleButton>
    </ButtonContainer>
  </Container>
);

Finish.propTypes = {
  title: PropTypes.string.isRequired,
  finishQuiz: PropTypes.func.isRequired,
  description: PropTypes.string.isRequired
};

export default Finish;
