import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logged, setLogged }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", logged ? "true" : "false");
  }, [logged]);

  function loggedOut() {
    setLogged(false);
    localStorage.removeItem("token");
    setOpen(false);
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full fixed top-0 left-0 bg-gray-900 text-white px-4 py-3 flex items-center justify-between shadow-lg">

        {/* Logo */}
        <div className="text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          💰Expense Tracker
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          <li><Link to="/home" className="hover:text-blue-300">HOME</Link></li>
          <li><Link to="/about" className="hover:text-blue-300">ABOUT</Link></li>
          <li><Link to="/contactus" className="hover:text-blue-300">CONTACT US</Link></li>
          <li><Link to="/developer" className="hover:text-blue-300">DEVELOPER</Link></li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-3">
          {logged ? (
            <Link
              onClick={loggedOut}
              to="/auth/login"
              className="px-3 py-1.5 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/auth/login"
              className="px-3 py-1.5 rounded-lg bg-white text-blue-600 hover:bg-blue-100 text-sm font-semibold"
            >
              Login
            </Link>
          )}

          <Link
            to="/auth/signup"
            className="px-3 py-1.5 rounded-lg bg-green-600 hover:bg-green-500 text-white text-sm font-semibold"
          >
            Sign Up
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col gap-1 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </nav>

      {/* MOBILE DRAWER — slides UNDER navbar */}
      <div
        className={`fixed top-0 right-0 h-120 rounded-lg w-64 bg-gray-800 text-white p-6 shadow-xl transform transition-transform duration-300 z-40 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          className="text-3xl absolute top-3 right-4"
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        <h3 className="text-2xl font-bold mb-8 mt-6">Menu</h3>

        {/* Menu Links */}
        <ul className="space-y-5 text-lg font-medium">
          <li><Link to="/home" onClick={() => setOpen(false)}>HOME</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>ABOUT</Link></li>
          <li><Link to="/contactus" onClick={() => setOpen(false)}>CONTACT US</Link></li>
          <li><Link to="/developer" onClick={() => setOpen(false)}>DEVELOPER</Link></li>
        </ul>

        {/* Auth Buttons */}
        <div className="mt-10 flex flex-col gap-3">
          {logged ? (
            <Link
              onClick={loggedOut}
              to="/auth/login"
              className="px-4 py-2 rounded-lg bg-red-600 text-center"
            >
              Logout
            </Link>
          ) : (
            <Link
              to="/auth/login"
              className="px-4 py-2 rounded-lg bg-white text-blue-700 text-center"
            >
              Login
            </Link>
          )}

          <Link
            to="/auth/signup"
            className="px-4 py-2 rounded-lg bg-green-600 text-white text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
