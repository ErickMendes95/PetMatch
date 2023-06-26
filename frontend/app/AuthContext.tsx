"use client";
import React, { createContext, useContext, useState } from "react";
import { AuthContextValue } from "./types/types";
import axios from "axios";

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const useAuth = (): AuthContextValue => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth está fora de um AuthContextProvider");
  }
  return context;
};

export const AuthContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    const response = await axios.post("http://localhost:4000/user/login",{email,password});
    setToken(response.data);
    setIsLoggedIn(true);
  };

  const logout = () => {
    setToken(null);
    setIsLoggedIn(false);
  };

  const authContextValue: AuthContextValue = {
    isLoggedIn,
    token,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};
