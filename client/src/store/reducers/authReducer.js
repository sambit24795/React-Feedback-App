import * as actionTypes from "../actions/actiontypes";

const initialState = null;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER:
      return action.payload || false;
    default:
      return state;
  }
};

export default reducer;
