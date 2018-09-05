import {
  SET_CONVOCATION,
  CANCEL_SCHEDULE,
  SET_CONGRATULATIONS
} from "../actions/convocation-actions";

const initialState = {
  canSchedule: true,
  showCongratulations: false,
  currentConvocation: {
    convocationRequirements: []
  },
  currentQuiz: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_CONVOCATION:
      return {
        ...state,
        currentConvocation: action.payload
      };
    case CANCEL_SCHEDULE:
      return {
        ...state,
        canSchedule: false
      };
    case SET_CONGRATULATIONS:
      return {
        ...state,
        showCongratulations: true
      };
    default:
      return state;
  }
}
