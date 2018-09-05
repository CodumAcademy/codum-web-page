import React from "react";
import PropTypes from "prop-types";

import Answers from "../Answers";
import RightTriangleButton from "../../Shared/UI/Buttons/RightTriangleButton";

import {
  Container,
  Content,
  ButtonContainer,
  QuestionTitle,
  QuestionDescription
} from "./styles";

const Question = ({
  question,
  onSave,
  selectAnswer,
  currentSelectedAnswer
}) => (
  <Container>
    <Content>
      <QuestionTitle
        dangerouslySetInnerHTML={{ __html: question.question.title }}
      />
      <QuestionDescription
        dangerouslySetInnerHTML={{ __html: question.question.description }}
      />
      <Answers
        answers={question.question.quizAnswers}
        type={question.question.quizQuestionType}
        selectAnswer={selectAnswer}
        currentSelectedAnswer={currentSelectedAnswer}
      />
    </Content>
    <ButtonContainer>
      <RightTriangleButton action={onSave} width="130px">
        {question.total - question.resolved === 1 ? "FINALIZAR" : "SIGUIENTE"}
      </RightTriangleButton>
    </ButtonContainer>
  </Container>
);

Question.propTypes = {
  question: PropTypes.object.isRequired,
  currentSelectedAnswer: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  selectAnswer: PropTypes.func.isRequired
};

export default Question;
