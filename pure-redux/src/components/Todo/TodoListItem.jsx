import React from "react";
import { useDispatch } from "react-redux";
import { delete_todo } from "../../redux/actions/todoActions";

const TodoListItem = ({ todo, id }) => {
  const dispatch = useDispatch();
  const deleteTodo = () => {
    dispatch(delete_todo(id));
  };
  return (
    <div>
      <p>
        {todo}
        <button onClick={deleteTodo}>Delete</button>
      </p>
    </div>
  );
};

export default TodoListItem;
