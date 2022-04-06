import { createContext } from "react/cjs/react.development";

export const AuthContext = createContext();

export const AuthProvider = ({ children, value }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
