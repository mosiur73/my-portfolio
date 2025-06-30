import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import resumeFile from '../../../public/Resume.pdf';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const links = (
    <>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'text-purple-500 font-semibold' : 'hover:text-purple-400')}>
        Home
      </NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-purple-500 font-semibold' : 'hover:text-purple-400')}>
        About
      </NavLink>
      <NavLink to="/skill" className={({ isActive }) => (isActive ? 'text-purple-500 font-semibold' : 'hover:text-purple-400')}>
        Skill
      </NavLink>
      <NavLink to="/education" className={({ isActive }) => (isActive ? 'text-purple-500 font-semibold' : 'hover:text-purple-400')}>
        Education
      </NavLink>
      <NavLink to="/project" className={({ isActive }) => (isActive ? 'text-purple-500 font-semibold' : 'hover:text-purple-400')}>
        Project
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-purple-500 font-semibold' : 'hover:text-purple-400')}>
        Contact
      </NavLink>
    </>
  );

  return (
    <nav className="w-full fixed top-0 left-0 bg-black bg-opacity-80 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          Mosiur<span className="text-purple-500">Dev</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex gap-8 text-lg">{links}</div>

        {/* Resume Button */}
        <div className="hidden lg:block">
          <a
            href={resumeFile}
            download="Mosiur_Resume.pdf"
            className="px-4 py-2 border border-purple-500 rounded-md hover:bg-purple-500 hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <IoClose size={28} /> : <IoReorderThreeOutline size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black bg-opacity-90 text-white flex flex-col items-center space-y-4 py-4 animate-fade-down">
          {links}
          <a
            href={resumeFile}
            download="Mosiur_Resume.pdf"
            className="mt-4 px-4 py-2 border border-purple-500 rounded-md hover:bg-purple-500 hover:text-white transition duration-300"
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
