import React, { createContext, useContext, useEffect } from 'react'
import useAuth from '../Hook/useAuth';

const AuthContext = createContext(null);
export const useAuthContext = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const data = useAuth();
// console.log(data)

  return (
    <AuthContext.Provider value={data}>
      { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider;