import {
  IS_APP_LOADING,
  SET_ERROR,
  IS_PART_LOADING,
  IS_AUTH_LOADING
} from "../actions/app-actions";

const initialState = {
  isAppLoading: false,
  isPartLoading: false,
  isAuthLoading: true,
  appError: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case IS_APP_LOADING:
      return {
        ...state,
        isAppLoading: action.payload
      };
    case IS_PART_LOADING:
      return {
        ...state,
        isPartLoading: action.payload
      };
    case IS_AUTH_LOADING:
      return {
        ...state,
        isAuthLoading: action.payload
      };
    case SET_ERROR:
      return {
        ...state,
        appError: action.payload
      };
    default:
      return state;
  }
}
