import { INCREMENT, DECREMENT, RESET } from "../types/counterTypes";

const initialState = {
  counter: 0,
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case RESET:
      return initialState;
    default:
      return initialState;
  }
};

export default counterReducer;
