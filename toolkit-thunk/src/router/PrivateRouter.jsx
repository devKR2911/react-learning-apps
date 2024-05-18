import React from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRouter = () => {
  const user = true;
  return user ? <Outlet /> : <Navigate to="/login"></Navigate>;
};

export default PrivateRouter;
