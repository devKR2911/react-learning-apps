import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const isAuth = false;
  return <div>{isAuth ? <Outlet /> : <Navigate to="/login" />}</div>;
}

export default PrivateRoute;
