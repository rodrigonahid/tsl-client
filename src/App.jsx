import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Wall from "./components/Wall";
import { GlobalStyle } from "./styles/global";
import ThemeContext from "./styles/theme";

function App() {
  return (
    <ThemeContext theme>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Wall />} />
        </Routes>
      </Router>
      <GlobalStyle />
    </ThemeContext>
  );
}

export default App;
