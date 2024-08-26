import "./App.css";
import HeaderPage from "./assets/Components/Layout/HeaderPage";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./assets/Components/Layout/Home";
import Login from "./assets/Components/User/Login";
function App() {
  const currentTheme = localStorage.getItem("currentTheme");
  const [theme, setTheme] = useState(currentTheme ? currentTheme : "light");
  useEffect(() => {
    localStorage.setItem("currentTheme", theme);
  }, [theme]);
  return (
    <Router>
      <div className={`container-fluid ${theme}`}>
        <header className="row align-items-center d-flex justify-content-between">
          <HeaderPage theme={theme} setTheme={setTheme} />
        </header>
        <div className="main container-fluid">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
