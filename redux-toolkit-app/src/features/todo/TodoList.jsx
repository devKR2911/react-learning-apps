import React from "react";
import AddTodo from "./AddTodo";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateDone } from "./todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <AddTodo></AddTodo>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className={todo.done ? "done" : ""}>
              {todo.text}
              <button onClick={() => dispatch(updateDone(todo.id))}>
                Done
              </button>
              <button onClick={() => dispatch(deleteTodo(todo.id))}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
