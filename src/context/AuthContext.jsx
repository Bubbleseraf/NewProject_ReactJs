import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  function register(userData) {
    setUser(userData);
  }

  function logout() {
    setUser(null);
  }

  const value = {
    user,
    isAuthenticated: !!user,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}