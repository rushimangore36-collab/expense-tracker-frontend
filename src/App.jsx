import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Developer from "./pages/Developer";

const App = () => {
  const [logged, setLogged] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  if (!logged) {
    alert("Logged Out, Please Login to continue.");
  }

  return (
    <div className="min-h-screen bg-linear-to-r from-slate-300 to-slate-50 flex flex-col">
      <Navbar logged={logged} setLogged={setLogged} />
      <div className="grow pt-20">
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/developer" element={<Developer />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/auth/login" element={<Login setLogged={setLogged} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
