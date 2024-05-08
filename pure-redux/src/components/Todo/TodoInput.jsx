import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_todo } from "../../redux/actions/todoActions";

const TodoInput = () => {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState("");
  const onTodoFormSubmit = (e) => {
    e.preventDefault()
    dispatch(add_todo(newTodo));
  };

  return (
    <div>
      <form action="" onSubmit={onTodoFormSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoInput;
