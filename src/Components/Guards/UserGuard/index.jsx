import React from 'react'
import { useAuthContext } from '../../../Context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom';
import { ROLES } from '../../../Constants';
import { PATHS } from '../../../router/paths';

const UserGuard = () => {
  const { role } = useAuthContext();
  if(role === ROLES.USER) return <Outlet />
    return <Navigate to={PATHS.HOME} replace={true} />
}

export default UserGuard;