import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const userLoggedIn = true;
  return userLoggedIn ? <Outlet /> : <Navigate to="/authentication/sign-in" replace />;
};

export default ProtectedRoute;
