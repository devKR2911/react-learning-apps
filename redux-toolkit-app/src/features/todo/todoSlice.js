import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nanoid(),
        text: action.payload,
        done: false,
      });
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((node) => node.id !== action.payload);
    },
    updateDone: (state, action) => {
      const todoNode = state.todos.find((node) => node.id === action.payload);
      if (todoNode) {
        todoNode.done = !todoNode.done;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateDone } = todoSlice.actions;

export default todoSlice.reducer;
