import { setAppLoading, setPartLoading } from "./app-actions";
import getQuestionQuery from "../query/get-question.graphql";

export const SET_CURRENT_QUESTION = "QUIZ/SET_CURRENT_QUESTION";
export const SET_CURRENT_QUIZ = "QUIZ/SET_CURRENT_QUIZ";
export const SET_QUIZ_STATE = "QUIZ/SET_QUIZ_STATE";

export const setQuizInProgress = () => dispatch =>
  dispatch({ type: SET_QUIZ_STATE, payload: "inProgress" });

export const setQuizStart = () => dispatch =>
  dispatch({ type: SET_QUIZ_STATE, payload: "start" });

export const setQuizFinish = () => dispatch =>
  dispatch({ type: SET_QUIZ_STATE, payload: "finish" });

export const setCurrentQuestion = value => dispatch => {
  dispatch({ type: SET_CURRENT_QUESTION, payload: value });
  dispatch(setQuizInProgress());
};

export const getFirstQuestion = (client, quizId) => async dispatch => {
  dispatch(setAppLoading(true));
  dispatch(setPartLoading(true));

  const variables = {
    quizId
  };

  const {
    data: { getQuestion }
  } = await client.query({ query: getQuestionQuery, variables });

  if (getQuestion) dispatch(setCurrentQuestion(getQuestion));

  dispatch(setAppLoading(false));
  dispatch(setPartLoading(false));
};

export const setCurrentQuiz = quiz => dispatch =>
  dispatch({ type: SET_CURRENT_QUIZ, payload: quiz });
