import React, { use } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";


const PrivateRoute = ({ children }) => {
  const { users, loading } = use(AuthContext);

  const location = useLocation();
  if (loading) {
    return (
      <p>Loging..</p>
    );
  }

  if (!users) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  return children;
};

export default PrivateRoute;