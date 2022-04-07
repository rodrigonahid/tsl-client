import { createContext } from "react";
import { useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children, value }) => {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const authorization = localStorage.getItem("Authorization");
    if (authorization) {
      setIsAuthed(true);
    }
  }, []);

  const data = {
    isAuthed,
    setIsAuthed,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};
