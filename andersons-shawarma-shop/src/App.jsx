import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/HomeSections/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/HomeSections/Footer";

function App() {
  return (
    <CartProvider>
      <Router>
        <Toaster position="top-center" reverseOrder={false} />
        <div className="min-h-screen flex flex-col bg-[#1F2629]">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
