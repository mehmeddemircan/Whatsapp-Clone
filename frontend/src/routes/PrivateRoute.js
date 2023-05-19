import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// Custom PrivateRoute component
const PrivateRoute = ({ children }) => {
  const login = useSelector((state) => state.user.login);


  // Render loading state if authentication status is still being determined

  if (login.authenticate) {
    // Render the protected page if user is authenticated
    return children;
  } else {
    // Redirect to login page if user is not authenticated
    return <Navigate to="/" replace />;
  }
};
export default PrivateRoute;
