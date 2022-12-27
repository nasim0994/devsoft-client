import React, { useContext } from "react";
// import "./PrivateRoute.css";
import { Navigate, useLocation } from "react-router-dom";
import { AuthProvider } from "../ContextApi/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthProvider);

  const location = useLocation();

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
