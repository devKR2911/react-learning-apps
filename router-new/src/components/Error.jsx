import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  return (
    <div>
      <h2>Error!!!</h2>
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default Error;
