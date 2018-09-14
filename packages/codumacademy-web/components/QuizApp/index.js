import React from "react";
import PropTypes from "prop-types";

import Start from "./Start";
import Finish from "./Finish";
import Question from "./Question";
import ProgressBar from "../Shared/UI/ProgressBar/Horizontal";

import withStore from "./store";

import { Container, ProgressBarContainer } from "./styles";

const generateFinishDescription = title => `Gracias por responder ${title}. Ve a tu perfil para continuar el proceso.
`;

const QuizApp = props => (
  <Container>
    {props.currentState === "start" && (
      <Start
        title={props.quiz.title}
        description={props.quiz.description}
        startQuiz={() => props.getFirstQuestion(props.quiz.id)}
      />
    )}
    {props.currentState === "finish" && (
      <Finish
        title={
          props.quiz.isPoll ? "¡Encuesta terminada!" : "¡Examen terminado!"
        }
        description={generateFinishDescription(props.quiz.title)}
        finishQuiz={props.finishQuiz}
      />
    )}
    {props.currentState === "inProgress" && (
      <Question
        question={props.currentQuestion}
        onSave={props.saveAnswer}
        selectAnswer={props.setSelectedAnswer}
        currentSelectedAnswer={props.selectedAnswer}
      />
    )}
    {props.currentState === "inProgress" && (
      <ProgressBarContainer>
        <ProgressBar
          currentValue={props.currentQuestion.resolved}
          totalValue={props.currentQuestion.total}
          withLabel={false}
        />
      </ProgressBarContainer>
    )}
  </Container>
);

QuizApp.propTypes = {
  currentState: PropTypes.string.isRequired,
  currentQuestion: PropTypes.object.isRequired,
  selectedAnswer: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
  getFirstQuestion: PropTypes.func.isRequired,
  saveAnswer: PropTypes.func.isRequired,
  finishQuiz: PropTypes.func.isRequired,
  setSelectedAnswer: PropTypes.func.isRequired
};

export default withStore(QuizApp);
