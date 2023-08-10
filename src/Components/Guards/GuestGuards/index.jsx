import React from "react";
import { useAuthContext } from "../../../Context/AuthContext";
import { ROLES } from "../../../Constants";
import { Navigate } from "react-router-dom";
import { PATHS } from "../../../router/paths";

const GuestGuards = ({ children }) => {
  const { role } = useAuthContext();
  if (role === ROLES.ADMIN || role === ROLES.USER ) 
    return <Navigate to={PATHS.HOME} replace={true} />;
  return children
};

export default GuestGuards;