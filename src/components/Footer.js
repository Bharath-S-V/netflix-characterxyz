// components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white p-8">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Netflix Clone. All rights reserved.
        </p>
        <p className="text-sm mt-2">
          Made by <a href="https://github.com/Bharath-S-V">Bharath Sv</a>
        </p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
