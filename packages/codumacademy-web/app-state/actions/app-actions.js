export const IS_APP_LOADING = "IS_APP_LOADING";
export const IS_PART_LOADING = "IS_PART_LOADING";
export const IS_AUTH_LOADING = "IS_AUTH_LOADING";
export const SET_ERROR = "SET_ERROR";

export const setAppLoading = (value, status) => dispatch =>
  dispatch({ type: IS_APP_LOADING, payload: value, status });

export const setPartLoading = (value, status) => dispatch =>
  dispatch({ type: IS_PART_LOADING, payload: value, status });

export const setAuthLoading = (value, status) => dispatch =>
  dispatch({ type: IS_AUTH_LOADING, payload: value, status });

export const setError = message => dispatch =>
  dispatch({ type: SET_ERROR, payload: message });

export const cleanError = () => dispatch =>
  dispatch({ type: SET_ERROR, payload: false });
