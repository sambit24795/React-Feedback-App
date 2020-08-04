import * as actionTypes from "../actions/actiontypes";

export default function (state = [], action) {
  switch (action.type) {
    case actionTypes.FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}
