import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderPage from "./components/Layout/HeaderPage";
import FooterPage from "./components/Layout/FooterPage";
import Main from "./components/Layout/Main";
import Product from "./components/Layout/Product";

function App() {
  return (
    <>
      <Router>
        <HeaderPage />
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/product/:categoryID" element={<Product />}></Route>
          <Route path="/contact" element={<Product />}></Route>
          <Route path="/about" element={<Product />}></Route>
        </Routes>
        <FooterPage />
      </Router>
    </>
  );
}

export default App;
