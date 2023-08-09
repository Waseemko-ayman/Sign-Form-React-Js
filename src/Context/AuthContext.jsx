import React, { createContext, useContext, useState } from 'react'
import { ROLES } from '../Constants';
import useAuth from '../Hook/useAuth';

const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  // const [role, setRole] = useState(ROLES.USER);
  // const [user, setUser] = useState(null);

  const data = useAuth();

  return (
    <AuthContext.Provider value={data}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;