import "./App.css";
import HeaderPage from "./assets/Components/Layout/HeaderPage";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./assets/Components/Layout/Main";
function App() {
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");
  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);
  return (
    <Router>
      <div className={`container ${theme}`}>
        <HeaderPage theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
