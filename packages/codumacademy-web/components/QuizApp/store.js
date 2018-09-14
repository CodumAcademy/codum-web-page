import { connect } from "react-redux";
import { withApollo, graphql } from "react-apollo";
import { compose, withHandlers, withState } from "recompose";
import { bindActionCreators } from "redux";

import { setPartLoading } from "../../app-state/actions/app-actions";
import {
  addSummaryToUser,
  addConvocationRequirementToUser
} from "../../app-state/actions/user-actions";
import {
  getFirstQuestion,
  setCurrentQuestion,
  setQuizFinish,
  setCurrentQuiz
} from "../../app-state/actions/quiz-actions";

import setAnswerMutation from "./mutations/set-answer.graphql";

import { errorMessage } from "../../utils/msgs";

const withRedux = () => {
  const mapStateToProps = ({
    quiz: { currentState, currentQuestion },
    app: { isPartLoading },
    convocation: { currentConvocation }
  }) => ({
    currentConvocation,
    currentState,
    currentQuestion,
    isPartLoading,
    question: currentQuestion.question
  });

  const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators(
      {
        setPartLoading,
        setCurrentQuestion,
        setQuizFinish,
        setCurrentQuiz,
        addSummaryToUser,
        addConvocationRequirementToUser,
        getFirstQuestion: quizId => getFirstQuestion(props.client, quizId)
      },
      dispatch
    );

  return connect(mapStateToProps, mapDispatchToProps);
};

const setAnswer = graphql(setAnswerMutation, {
  name: "setAnswer"
});

const funcs = withHandlers({
  finishQuiz: () => () => {
    window.location.reload();
    // props.setCurrentQuiz({});
  },
  saveAnswer: props => async () => {
    // <si no se ha seleccionado una respuesta>
    const tempData = {
      ...props.selectedAnswer
    };
    delete tempData.multiple;
    if (!Object.keys(tempData).length) {
      errorMessage("Error!", "Para continuar debes seleccionar una respuesta");
      return;
    }
    // </ si no se ha seleccionado una respuesta>

    const variables = {
      quizId: parseInt(props.quiz.id, 10),
      quizQuestionId: parseInt(props.question.id, 10),
      quizAnswerId: props.selectedAnswer.multiple
        ? 0
        : parseInt(props.selectedAnswer.id, 10),
      multiple: false,
      answers: JSON.stringify({})
    };

    // si hay más de una respues agregarlas como JSON.stringify
    if (props.selectedAnswer.multiple) {
      variables.multiple = true;
      variables.answers = JSON.stringify(props.selectedAnswer);
    }

    props.setPartLoading(true);

    // MUTATE!
    const { data } = await props.setAnswer({ variables });

    // Despachar nueva pregunta
    if (data && data.setAnswer) {
      // Si ya respondió todo
      const {
        total,
        resolved,
        summary,
        convocationRequirement,
        requiredApprove
      } = data.setAnswer;
      if (resolved > 0 && total > 0 && resolved === total) {
        if (requiredApprove) {
          window.location = "/perfil";
          return;
        }
        props.setQuizFinish();
        props.addSummaryToUser(summary);
        props.addConvocationRequirementToUser(convocationRequirement);
      } else props.setCurrentQuestion(data.setAnswer);

      // reset pregunta seleccionada
      props.setSelectedAnswer({});
    } else errorMessage();
    props.setPartLoading(false);
  }
});

export default compose(
  withState("selectedAnswer", "setSelectedAnswer", {}),
  setAnswer,
  withApollo,
  withRedux(),
  funcs
);
