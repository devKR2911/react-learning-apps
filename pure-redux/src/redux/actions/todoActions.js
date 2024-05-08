import { TODO_ADD, TODO_CLEAR, TODO_DELETE } from "../types/todoTypes";

export const clear = () => {
  return {
    type: TODO_CLEAR,
  };
};

export const add_todo = (payload) => {
  return {
    type: TODO_ADD,
    payload,
  };
};

export const delete_todo = (id) => {
  return {
    type: TODO_DELETE,
    payload: id,
  };
};
