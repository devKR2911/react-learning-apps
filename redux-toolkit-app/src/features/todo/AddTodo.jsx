import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();
  const createNewTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(newTodo));
    setNewTodo("");
  };
  return (
    <div>
      <form onSubmit={createNewTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
