import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const authState = {
  user: null,
  setUser: () => {},
};

export default function AuthProvider({ children }) {
  // Simply check token to find out already signin or not
  // If token expired, backend will response with error status code
  const isSignedIn = localStorage.getItem("token") ? true : false;
  const [user, setUser] = useState(
    isSignedIn ? { id: localStorage.getItem("userId") } : null
  );

  authState.user = user;
  authState.setUser = setUser;

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export function updateUser(user) {
  authState.setUser(user);
}
