import {
  SET_USER,
  USER_FETCHING,
  SET_USER_SUMMARY,
  SET_USER_CONVOCATION_REQUIREMENT,
  SET_PROFILE_TAB
} from "../actions/user-actions";

const initialState = {
  user: null,
  isFetching: true,
  currentTabSelected: 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_SUMMARY: {
      const { quizUserSummaries } = state.user;
      const userSummaries = [];

      const find = quizUserSummaries.find(
        item => parseInt(item.id, 10) === parseInt(action.payload.id, 10)
      );

      if (find)
        quizUserSummaries.forEach(item => {
          if (item.id !== find.id) userSummaries.push(item);
        });

      const user = {
        ...state.user,
        quizUserSummaries: [...userSummaries, action.payload]
      };
      return {
        ...state,
        user
      };
    }
    case SET_USER_CONVOCATION_REQUIREMENT: {
      const { userConvocationRequirements } = state.user;
      const convocationRequirements = [];

      const find = userConvocationRequirements.find(
        item => parseInt(item.id, 10) === parseInt(action.payload.id, 10)
      );

      if (find)
        userConvocationRequirements.forEach(item => {
          if (item.id !== find.id) convocationRequirements.push(item);
        });

      const user = {
        ...state.user,
        userConvocationRequirements: [
          ...convocationRequirements,
          action.payload
        ]
      };
      return {
        ...state,
        user
      };
    }
    case SET_USER:
      return {
        ...state,
        user: action.payload
      };
    case SET_PROFILE_TAB:
      return {
        ...state,
        currentTabSelected: action.payload
      };
    case USER_FETCHING:
      return {
        ...state,
        isFetching: action.payload
      };
    default:
      return state;
  }
}
