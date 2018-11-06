import currentConvocationQuery from "../query/current-convocation.graphql";
import lastConvocationQuery from "../query/last-convocation.graphql";
import { setAppLoading, setPartLoading } from "./app-actions";

export const SET_CONVOCATION = "CONVOCATION/SET_CONVOCATION";
export const CANCEL_SCHEDULE = "CONVOCATION/CANCEL_SCHEDULE";
export const SET_CONGRATULATIONS = "CONVOCATION/SET_CONGRATULATIONS";
export const SET_LAST_CONVOCATION = "CONVOCATION/SET_LAST_CONVOCATION";

export const setCurrentConvocation = value => dispatch =>
  dispatch({ type: SET_CONVOCATION, payload: value });

export const setLastConvocation = value => dispatch =>
  dispatch({ type: SET_LAST_CONVOCATION, payload: value });

export const getCurrentConvocation = client => dispatch =>
  new Promise(async resolve => {
    dispatch(setAppLoading(true));
    dispatch(setPartLoading(true));
    const {
      data: { currentConvocation }
    } = await client.query({ query: currentConvocationQuery });

    if (currentConvocation) {
      const newCurrentConvocation = { ...currentConvocation };

      newCurrentConvocation.convocationRequirements =
        newCurrentConvocation.convocationRequirements || [];

      dispatch(setCurrentConvocation(newCurrentConvocation));
      resolve(newCurrentConvocation);
    }

    dispatch(setAppLoading(false));
    dispatch(setPartLoading(false));
  });

export const getLastConvocation = client => dispatch =>
  new Promise(async resolve => {
    dispatch(setAppLoading(true));
    dispatch(setPartLoading(true));
    const {
      data: { lastConvocation }
    } = await client.query({ query: lastConvocationQuery });

    if (lastConvocation) {
      const newCurrentConvocation = { ...lastConvocation };

      newCurrentConvocation.convocationRequirements =
        newCurrentConvocation.convocationRequirements || [];

      dispatch(setLastConvocation(newCurrentConvocation));
      resolve(newCurrentConvocation);
    }

    dispatch(setAppLoading(false));
    dispatch(setPartLoading(false));
  });

export const cancelSchedule = () => dispatch =>
  dispatch({ type: CANCEL_SCHEDULE });

export const setCongratulations = () => dispatch =>
  dispatch({ type: SET_CONGRATULATIONS });
