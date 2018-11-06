import {
  SET_CONVOCATION,
  CANCEL_SCHEDULE,
  SET_CONGRATULATIONS,
  SET_LAST_CONVOCATION
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
    case SET_LAST_CONVOCATION:
      return {
        ...state,
        lastConvocation: action.payload
      };
    default:
      return state;
  }
}
