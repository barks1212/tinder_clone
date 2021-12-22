import React, { createContext, useContext } from "react";
import * as Google from "expo-google-app-auth";
import { IOS_CLIENT_ID } from "@env";

const AuthContext = createContext({});

const config = {
  iosClientId: IOS_CLIENT_ID,
  scopes: ["profile", "email"],
  permissions: ["public_profile", "email", "gender", "location"],
};

export const AuthProvider = ({ children }) => {
  const signInWithGoogle = async () => {
    await Google.loginAsync();
  };

  return (
    <AuthContext.Provider
      value={{
        user: null,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default function useAuth() {
  return useContext(AuthContext);
}
