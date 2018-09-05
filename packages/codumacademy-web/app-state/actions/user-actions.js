import persist from "../../utils/apollo/persist-token";
import { setAuthLoading } from "./app-actions";
import verifyUserQuery from "../query/verify-user.graphql";

export const SET_USER = "SET_USER";
export const USER_FETCHING = "USER_FETCHING";
export const SET_USER_SUMMARY = "SET_USER_SUMMARY";
export const SET_PROFILE_TAB = "SET_PROFILE_TAB";
export const SET_USER_CONVOCATION_REQUIREMENT =
  "SET_USER_CONVOCATION_REQUIREMENT";

export const setUser = value => dispatch =>
  dispatch({ type: SET_USER, payload: value });

export const setUserFetching = value => dispatch =>
  dispatch({ type: USER_FETCHING, payload: value });

export const setCurrentTab = value => dispatch =>
  dispatch({ type: SET_PROFILE_TAB, payload: value });

export const logout = () => () => {
  persist.willSetAccessToken(null);
  window.location.replace("/");
  // dispatch({ type: SET_USER, payload: null });
};

export const addSummaryToUser = summary => dispatch =>
  dispatch({ type: SET_USER_SUMMARY, payload: summary });

export const addConvocationRequirementToUser = requirement => dispatch =>
  dispatch({ type: SET_USER_CONVOCATION_REQUIREMENT, payload: requirement });

export const verifyUser = (client, requireAdmin) => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch(setAuthLoading(true));
    dispatch(setUserFetching(true));
    try {
      const {
        data: { verify }
      } = await client.query({ query: verifyUserQuery });

      if (verify) {
        const { user, token } = verify;
        if (user && requireAdmin && !user.isAdmin) return reject();
        dispatch(setUser(user));
        localStorage.accessToken = token;
        resolve(user);
        dispatch(setUserFetching(false));
        dispatch(setAuthLoading(false));
      } else reject();
    } catch (e) {
      reject();
    }
  });
