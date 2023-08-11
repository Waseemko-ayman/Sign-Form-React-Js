import React from 'react'
import { ROLES } from '../../../Constants';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../../Context/AuthContext';
import { PATHS } from '../../../router/paths';

const AdminGuard = ({ children }) => {
  const { role } = useAuthContext();
  if(role === ROLES.ADMIN) return children
    return <Navigate to={PATHS.HOME} replace={true} />
}

export default AdminGuard