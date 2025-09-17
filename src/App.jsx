import { useState } from "react";
import { Home } from "./pages/Home";
import { CheckOut } from "./pages/Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetails } from "./components/ProductDetails";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/CartDrawer" element={<CheckOut />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
