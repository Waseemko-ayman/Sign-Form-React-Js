import React from 'react'
import { useAuthContext } from '../../../Context/AuthContext'
import { Navigate } from 'react-router-dom';
import { ROLES } from '../../../Constants';
import { PATHS } from '../../../router/paths';

const UserGuard = ({ children }) => {
  const { role } = useAuthContext();
  if(role === ROLES.USER || role === ROLES.ADMIN) return children
    return <Navigate to={PATHS.LOGIN} replace={true} />
}

export default UserGuard;