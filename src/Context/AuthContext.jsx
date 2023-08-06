import React, { createContext, useContext, useState } from 'react'
import { ROLES } from '../Constants';

const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [role, setRole] = useState(ROLES.GUEST);
  const [user, seetUser] = useState(null);

  return (
    <AuthContext.Provider value={{ role, setRole, user, seetUser }}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;