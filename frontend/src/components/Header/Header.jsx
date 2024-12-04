import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-black dark:text-white">
          <a href="/">MiLogo</a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden" onClick={toggleMenu}>
          <button className="focus:outline-none">
            <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-800 md:relative md:top-0 md:left-0 md:w-auto md:flex md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="/" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition p-2">Inicio</a>
          <a href="#about" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition p-2">Acerca de Nosotros</a>
          <a href="#services" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition p-2">Servicios</a>
          <a href="#contact" className="block text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition p-2">Contáctanos</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
