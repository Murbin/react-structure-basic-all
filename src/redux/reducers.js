// reducer.js
import { INCREMENT, DECREMENT, SET_RANDOM } from "./actions";

const initialState = {
  count: 0,
  random: null,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    //thunk added
    case SET_RANDOM:
      return { ...state, random: action.payload };
    default:
      return state;
  }
};
 
export default counterReducer;
