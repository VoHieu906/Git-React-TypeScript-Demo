import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/Layout/HeaderPage";

function App() {
  return (
    <>
      <Router>
        <HeaderPage />
      </Router>
    </>
  );
}

export default App;
