import { compose, lifecycle, withHandlers } from "recompose";
import { withApollo, graphql } from "react-apollo";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setPartLoading } from "../../../app-state/actions/app-actions";
import {
  getCurrentConvocation,
  cancelSchedule,
  setCongratulations
} from "../../../app-state/actions/convocation-actions";
import {
  setCurrentQuiz,
  setQuizStart
} from "../../../app-state/actions/quiz-actions";

import generateQuestionsOrGetQuizMutation from "./mutations/generate-questions-or-get-quiz.graphql";

const withRedux = () => {
  // Nota: se usa + 1 debido a que registrar los datos ya corresponde a un requisito completado
  const mapStateToProps = ({
    app: { isAppLoading, isPartLoading },
    convocation: { currentConvocation, canSchedule },
    quiz: { currentQuiz },
    user: {
      user: { quizUserSummaries }
    }
  }) => ({
    summaries: quizUserSummaries,
    currentConvocation,
    isAppLoading,
    isPartLoading,
    currentQuiz,
    setQuizStart,
    canSchedule,
    showCongratulations: () => {
      if (canSchedule) {
        if (
          quizUserSummaries &&
          quizUserSummaries.length &&
          quizUserSummaries.length > 0
        ) {
          const { convocationRequirements } = currentConvocation;
          if (
            convocationRequirements &&
            convocationRequirements.length &&
            convocationRequirements.length === quizUserSummaries.length
          ) {
            const withFinished = quizUserSummaries.some(item => !item.finished);
            return !withFinished;
          }
        }
      }
      return false;
    },
    totalCompleted: quizUserSummaries.reduce(
      (acc, item) => (item.finished ? acc + 1 : acc),
      1
    ),
    totalRequirements: currentConvocation.convocationRequirements.length + 1,
    disableds: currentConvocation.convocationRequirements.reduce(
      (acc, requirement, index, array) => {
        const find = quizUserSummaries.find(
          item => item.quizId === requirement.quizId
        );
        if (find) {
          if (index === 0) acc[requirement.id] = find.finished;
          if (index > 0) {
            const prevDisabled = acc[array[index - 1].id];
            acc[requirement.id] = prevDisabled && find.finished;
          }
        } else if (index === 0) acc[requirement.id] = false;
        else {
          const prevArray = array[index - 1];
          const prevDisabled = acc[prevArray.id];
          const findPrevSummary = quizUserSummaries.find(
            item => item.quizId === prevArray.quizId
          );
          if (findPrevSummary)
            acc[requirement.id] = !(prevDisabled && findPrevSummary.finished);
          else acc[requirement.id] = true;
        }
        return acc;
      },
      {}
    )
  });

  const mapDispatchToProps = (dispatch, props) =>
    bindActionCreators(
      {
        setCurrentQuiz,
        setPartLoading,
        cancelSchedule,
        setCongratulations,
        getCurrentConvocation: () => getCurrentConvocation(props.client)
      },
      dispatch
    );

  return connect(mapStateToProps, mapDispatchToProps);
};

const withLifecycles = lifecycle({
  componentDidMount() {
    this.props.getCurrentConvocation().then(currentConvocation => {
      const { convocationRequirements } = currentConvocation;
      if (convocationRequirements && convocationRequirements.length > 0) {
        convocationRequirements.forEach(convocationRequirement => {
          const { requiredApprove, quizId, withQuiz } = convocationRequirement;
          if (withQuiz) {
            // buscar en los summaries si ya hizo el examen y lo aprobó
            const summary = this.props.summaries.find(
              item => item.quizId === quizId
            );
            if (summary && summary.finished) {
              // Si no es requerido entonces no debe validarse si lo aprobó
              if (!requiredApprove) return true;
              // Si 80% de respuestas OK
              const { successAnswers, totalAnswers } = summary;

              const percent = parseInt(successAnswers * 100 / totalAnswers, 10);

              if (percent >= 80) return true;

              // NO PUEDE CONTINUAR CON EL PROCESO
              // Dispatch cancelar convocatoria
              this.props.cancelSchedule();
              return true;
            }
          }
        });
      }
    });
  }
});

const itemAction = props => ({ quizId, withQuiz }) => {// eslint-disable-line
  return async () => {
    if (withQuiz) {
      props.setPartLoading(true);
      const variables = {
        quizId
      };
      const { data } = await props.generateQuestionsOrGetQuiz({ variables });

      if (data && data.generateQuestionsOrGetQuiz) {
        props.setCurrentQuiz(data.generateQuestionsOrGetQuiz);
        props.setQuizStart();
      }
      props.setPartLoading(false);
    }
  };
};

const getChecked = props => convocationRequirement => {
  // si requiere quiz checkar resultado del quiz y si pasar el quiz es obligatorio
  const { requiredApprove, quizId, withQuiz } = convocationRequirement;
  if (withQuiz) {
    // buscar en los summaries si ya hizo el examen y lo aprobó
    const summary = props.summaries.find(item => item.quizId === quizId);
    if (summary && summary.finished) {
      // Si no es requerido entonces no debe validarse si lo aprobó
      if (!requiredApprove) return true;
      // Si 80% de respuestas OK
      const { successAnswers, totalAnswers } = summary;

      const percent = parseInt(successAnswers * 100 / totalAnswers, 10);

      if (percent >= 80) return true;

      return true;
    }

    return false; // Si no ha hecho el examen
  }

  return false;
};

const funcs = withHandlers({
  itemAction,
  getChecked
});

const gQuestionOrGQuiz = graphql(generateQuestionsOrGetQuizMutation, {
  name: "generateQuestionsOrGetQuiz"
});

const enhance = compose(
  withApollo,
  withRedux(),
  gQuestionOrGQuiz,
  withLifecycles,
  funcs
);

export default enhance;
