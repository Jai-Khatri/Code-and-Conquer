import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

// Navigation links
const navItems: { label: string; path: string }[] = [
  { label: 'Home', path: '/home' },
  { label: 'About', path: '/about' },
  { label: 'Creations & Credentials', path: '/creationsandcredentials' },
  { label: 'Contact', path: '/contact' },
];

const siteName = 'Code & Conquer';

// Animation variants
const navVariants: Variants = {
  hidden: { y: -50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
};

const menuVariants: Variants = {
  closed: { height: 0, opacity: 0, transition: { duration: 0.4 } },
  open: { height: 'auto', opacity: 1, transition: { duration: 0.4 } },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(prev => !prev);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-6 py-3 rounded-md text-xl font-medium transition transform duration-200 hover:scale-105 ${
      isActive ? 'bg-indigo-600 text-white' : 'text-gray-200 hover:text-indigo-400'
    }`;

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className="fixed top-0 w-full bg-gray-900 shadow-lg z-50"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10 py-4 flex justify-between items-center">
          {/* Brand name */}
          <NavLink
            to="/home"
            className="text-4xl font-extrabold text-teal-400 no-underline hover:text-teal-300 transition-colors duration-200"
          >
            {siteName}
          </NavLink>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <motion.div key={item.path} whileHover={{ y: -2 }}>
                <NavLink to={item.path} className={linkClass}>
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle Menu"
              className="text-gray-200 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          className="md:hidden bg-gray-900 overflow-hidden"
        >
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-6 py-4 text-xl font-medium transition-colors duration-200 ${
                  isActive ? 'bg-indigo-600 text-white' : 'text-gray-200 hover:bg-gray-800'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </motion.div>
      </motion.nav>
      {/* Spacer to push page content below fixed navbar */}
      <div className="h-10 md:h-15" />
    </>
  );
};

export default Navbar;
