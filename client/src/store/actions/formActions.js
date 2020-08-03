import axios from "axios";

import * as actionTypes from "./actiontypes";

export const submitSurvey = (values, history) => {
  return async (dispatch) => {
    const res = await axios.post("/api/surveys", values);
    history.push("/surveys");
    dispatch({ type: actionTypes.FETCH_USER, payload: res.data });
  };
};
