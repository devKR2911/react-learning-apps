import React from "react";
import TodoListItem from "./TodoListItem";
import { useDispatch, useSelector } from "react-redux";
import { clear } from "../../redux/actions/todoActions";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoReducer.todos);

  const clearTodos = () => {
    dispatch(clear());
  };
  return (
    <div>
      <div>
        {todos.map((todo) => (
          <TodoListItem key={todo.id} {...todo} />
        ))}
      </div>
      <div>
        <button onClick={clearTodos}>Clear</button>
      </div>
    </div>
  );
};

export default TodoList;
