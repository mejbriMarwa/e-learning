import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRouter = () => {
  const { isAuth } = useSelector((state) => state.user);
  return isAuth ? <Outlet /> : <Navigate to="/LoginPage" />;
};
export default ProtectedRouter;
