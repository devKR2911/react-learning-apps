import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

const Todo = () => {
  return (
    <div>
      <div>
        <TodoInput />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
};

export default Todo;
