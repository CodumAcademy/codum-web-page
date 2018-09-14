import getUsersListQuery from "../query/get-users-list.graphql";
import getUserQuery from "../query/get-user.graphql";
import { setAppLoading, setPartLoading } from "./app-actions";

export const SET_USERS_LIST = "ADMIN/SET_USERS_LIST";
export const SET_USERS_QTY = "ADMIN/SET_USERS_QTY";
export const SET_SELECTED_USER = "ADMIN/SET_SELECTED_USER";

export const setUsersList = value => dispatch =>
  dispatch({ type: SET_USERS_LIST, payload: value });

export const setSelectedUser = value => dispatch =>
  dispatch({ type: SET_SELECTED_USER, payload: value });

export const setTotalUsers = value => dispatch =>
  dispatch({ type: SET_USERS_QTY, payload: value });

export const getIndividualSummary = (client, userId) => async dispatch => {
  dispatch(setAppLoading(true));
  dispatch(setPartLoading(true));

  const {
    data: { getUser }
  } = await client.query({
    query: getUserQuery,
    variables: {
      query: JSON.stringify({
        id: userId
      })
    }
  });

  if (getUser) dispatch(setSelectedUser(getUser));

  dispatch(setAppLoading(false));
  dispatch(setPartLoading(false));
};

export const getUsersList = (
  client,
  vars = { perPage: 0, query: JSON.stringify({ isAdmin: false }) }
) => async dispatch => {
  dispatch(setAppLoading(true));
  dispatch(setPartLoading(true));
  const {
    data: { users }
  } = await client.query({
    query: getUsersListQuery,
    variables: {
      ...vars
    }
  });

  if (users) {
    dispatch(setTotalUsers(users.count));
    dispatch(setUsersList(users.rows));
  }

  dispatch(setAppLoading(false));
  dispatch(setPartLoading(false));
};
