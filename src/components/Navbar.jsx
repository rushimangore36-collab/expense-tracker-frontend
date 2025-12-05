import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ logged, setLogged }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", logged ? "true" : "false");
  }, [logged]);

  async function loggedOut() {
    setLogged(false);
    localStorage.removeItem("token");
  }

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full fixed bg-linear-to-r from-gray-800 to-blue-700 text-white px-2 py-1 flex items-center justify-between shadow-lg rounded-[3px]">
        {/* Logo */}
        <div
          className="text-3xl pl-5 font-extrabold tracking-wide 
  text-transparent bg-clip-text 
  bg-linear-to-r from-cyan-600 to-cyan-300"
        >
          Expense Tracker
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          <li className="cursor-pointer hover:text-blue-200 transition">
            <Link to="/home">HOME</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-200 transition">
            <Link to="/about">ABOUT</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-200 transition">
            <Link to="/contactus">CONTACT US</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-200 transition">
            <Link to="/developer">DEVELOPER</Link>
          </li>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:flex items-center space-x-3">
          {logged ? (
            <Link
              onClick={loggedOut}
              to="/auth/login"
              className="px-3 py-1.5 rounded-lg bg-red-500 text-white hover:bg-blue-50 text-sm font-semibold transition"
            >
              LogOut
            </Link>
          ) : (
            <Link
              to="/auth/login"
              className="px-3 py-1.5 rounded-lg bg-white text-blue-600 hover:bg-blue-50 text-sm font-semibold transition"
            >
              Login
            </Link>
          )}

          <Link
            to="/auth/signup"
            className="px-3 py-1 rounded-lg bg-linear-to-r from-green-500 to-green-300 text-white  transition font-semibold"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Auth Buttons */}
        <div className="flex md:hidden gap-2 ml-15">
          {logged ? (
            <Link
              onClick={loggedOut}
              to="/auth/login"
              className="px-3 py-1.5 rounded-lg bg-linear-to-r from-red-700 to-red-500 text-white text-sm font-semibold transition"
            >
              LogOut
            </Link>
          ) : (
            <Link
              to="/auth/login"
              className="px-3 py-1.5 rounded-lg text-white border-2 border-white bg-linear-to-r from-blue-800 to-blue-500  text-sm font-semibold transition"
            >
              Login
            </Link>
          )}

          <Link
            to="/auth/signup"
            className="px-3 py-1.5 rounded-lg bg-linear-to-r from-green-700 to-green-500 border-2 border-white text-white  text-sm font-semibold transition"
          >
            SignUp
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col gap-1.5 ml-4 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="w-7 h-0.5 bg-white transition"></span>
          <span className="w-7 h-0.5 bg-white transition"></span>
          <span className="w-7 h-0.5 bg-white transition"></span>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 rounded-xl h-75 w-64 bg-linear-to-r from-blue-800 to-blue-500 text-white p-6 shadow-xl transform transition-transform duration-300 z-50 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-bold">Menu</h3>
          <button
            className="text-3xl hover:text-blue-200 transition cursor-pointer"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>

        {/* Menu Items */}
        <ul className="space-y-5 text-lg font-medium">
          <li className="hover:text-blue-200 transition">
            <Link to="/home" onClick={() => setOpen(false)}>
              HOME
            </Link>
          </li>
          <li className="hover:text-blue-200 transition">
            <Link to="/about" onClick={() => setOpen(false)}>
              ABOUT
            </Link>
          </li>
          <li className="hover:text-blue-200 transition">
            <Link to="/contactus" onClick={() => setOpen(false)}>
              CONTACT US
            </Link>
          </li>
          <li className="hover:text-blue-200 transition">
            <Link to="/developer" onClick={() => setOpen(false)}>
              DEVELOPER
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
