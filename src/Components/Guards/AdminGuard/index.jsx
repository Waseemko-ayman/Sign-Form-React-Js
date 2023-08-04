import React from 'react'
import { ROLES } from '../../Constants';
import { useAuthContext } from '../../Context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from '../../router/paths';

const AdminGuard = () => {
  const { role } = useAuthContext();
  if(role === ROLES.ADMIN) return <Outlet />
    return <Navigate to={PATHS.HOME} replace={true} />
}

export default AdminGuard