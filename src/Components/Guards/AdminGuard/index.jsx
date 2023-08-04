import React from 'react'
import { ROLES } from '../../../Constants';
import { Navigate, Outlet } from 'react-router-dom';
import { PATHS } from '../../router/paths';
import { useAuthContext } from '../../../Context/AuthContext';

const AdminGuard = () => {
  const { role } = useAuthContext();
  if(role === ROLES.ADMIN) return <Outlet />
    return <Navigate to={PATHS.HOME} replace={true} />
}

export default AdminGuard