import { TODO_ADD, TODO_CLEAR, TODO_DELETE } from "../types/todoTypes";

const initialState = {
  todos: [
    { id: 0, todo: "Todo 1" },
    { id: 1, todo: "Todo 2" },
    { id: 2, todo: "Todo 3" },
  ],
};

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TODO_CLEAR:
      return { ...state, todos: [] };

    case TODO_ADD:
      return {
        ...state,
        todos: [...state.todos, { id: state.todos.length + 1, todo: payload }],
      };
    case TODO_DELETE:
      return {
        ...state,
        todos: state.todos.filter((node) => node.id !== payload),
      };

    default:
      return state;
  }
};
export default todoReducer;
