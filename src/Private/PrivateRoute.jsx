import React, { use } from "react";

import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Pages/Loader";


const PrivateRoute = ({ children }) => {
  const { users, loading } = use(AuthContext);

  const location = useLocation();
  if (loading) {
    return <Loader></Loader>
  }

  if (!users) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  return children;
};

export default PrivateRoute;