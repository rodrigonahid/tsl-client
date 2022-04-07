import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react/cjs/react.development";

import Header from "./components/Header";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Register from "./components/Register";
import UserCreated from "./components/UserCreated";
import VerifyAccount from "./components/VerifyAccount";
import Wall from "./components/Wall";
import { AuthContext } from "./contexts/AuthContext";
import ThemeContext from "./styles/theme";

function App() {
  const { isAuthed } = useContext(AuthContext);
  return (
    <ThemeContext>
      <Router>
        <Header />
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route exact path="/" element={<Wall />} />
          <Route path="/verify-account" element={<VerifyAccount />} />
          {!isAuthed && (
            <>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/register/success" element={<UserCreated />} />
            </>
          )}
        </Routes>
      </Router>
    </ThemeContext>
  );
}

export default App;
