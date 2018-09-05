import {
  SET_CURRENT_QUIZ,
  SET_CURRENT_QUESTION,
  SET_QUIZ_STATE
} from "../actions/quiz-actions";

const initialState = {
  currentQuiz: {},
  currentState: "start",
  currentQuestion: {
    resolved: 0,
    total: 0,
    question: {}
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_QUIZ:
      return {
        ...state,
        currentQuiz: action.payload
      };
    case SET_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.payload
      };
    case SET_QUIZ_STATE:
      return {
        ...state,
        currentState: action.payload
      };
    default:
      return state;
  }
}
