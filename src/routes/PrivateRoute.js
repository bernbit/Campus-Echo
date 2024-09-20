import React from "react";
import useGeneral from "../context/GeneralContext";
import { Route, Routes, Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuthenticated } = useGeneral();

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;
