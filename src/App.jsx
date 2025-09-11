import { useState } from "react";
import { Home } from "./pages/Home";
import { CheckOut } from "./pages/Checkout";
import { ProductDetails } from "./pages/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ProductDetails" element={<ProductDetails />} />
          <Route path="/Checkout" element={<CheckOut />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
