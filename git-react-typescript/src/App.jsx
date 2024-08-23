import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/Layout/HeaderPage";
import FooterPage from "./components/Layout/FooterPage";

function App() {
  return (
    <>
      <Router>
        <HeaderPage />
        <FooterPage />
      </Router>
    </>
  );
}

export default App;
