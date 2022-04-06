import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react/cjs/react.development";

import Header from "./components/Header";
import Login from "./components/Login";
import Wall from "./components/Wall";
import { AuthProvider } from "./contexts/AuthContext";
import { GlobalStyle } from "./styles/global";
import ThemeContext from "./styles/theme";

function App() {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const authorization = localStorage.getItem("Authorization");
    if (authorization) {
      setIsAuthed(true);
    }
  }, []);

  return (
    <ThemeContext>
      <AuthProvider value={{ isAuthed, setIsAuthed }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Wall />} />
            {!isAuthed && <Route path="/login" element={<Login />} />}
          </Routes>
        </Router>
      </AuthProvider>
      <GlobalStyle />
    </ThemeContext>
  );
}

export default App;
