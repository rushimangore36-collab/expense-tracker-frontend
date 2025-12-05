import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-1 mt-10">
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-1">
        <p className="text-sm">
          © {new Date().getFullYear()} Expense Tracker. All rights reserved.
        </p>
        <div className="flex flex-col items-center">
          <p className="text-sm">Developed By Rushikesh Mangore</p>
          <p className="text-sm">Nov 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
