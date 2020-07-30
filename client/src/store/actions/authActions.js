import axios from "axios";

import * as actionTypes from "./actiontypes";

export const fetchUser = () => {
  return async (dispatch) => {
    const resData = await axios.get("/api/current_user");
    if (resData) {
      dispatch({ type: actionTypes.FETCH_USER, payload: resData.data });
    }
  };
};

export const handletoken = (token) => {
  return async (dispatch) => {
    const resData = await axios.post("/api/stripe", token);
    console.log(resData);
    dispatch({ type: actionTypes.FETCH_USER, payload: resData.data });
  };
};
