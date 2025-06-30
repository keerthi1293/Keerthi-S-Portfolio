// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full px-6 py-4 bg-black text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Keerthi S</h1>
      <ul className="flex gap-6 text-sm">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/Keerthi_S_Resume.pdf" target="_blank">Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
