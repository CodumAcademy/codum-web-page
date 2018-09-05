import {
  SET_USERS_LIST,
  SET_USERS_QTY,
  SET_SELECTED_USER
} from "../actions/admin-actions";

const initialState = {
  users: [],
  usersQty: 0,
  selectedUser: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS_LIST:
      return {
        ...state,
        users: action.payload
      };
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload
      };
    case SET_USERS_QTY:
      return {
        ...state,
        usersQty: action.payload
      };
    default:
      return state;
  }
}
