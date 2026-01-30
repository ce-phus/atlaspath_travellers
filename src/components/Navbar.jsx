import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { 
  FaInstagram, 
  FaFacebookF, 
  FaWhatsapp,
  FaTwitter 
} from 'react-icons/fa';
import { logo } from '../assets';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const contentVariants = {
    hidden: { 
      y: -20,
      opacity: 0 
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1
      }
    },
    exit: { 
      y: -20,
      opacity: 0,
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const menuItemVariants = {
    hidden: { 
      x: -20,
      opacity: 0 
    },
    visible: (i) => ({ 
      x: 0,
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut",
        delay: 0.1 + i * 0.05
      }
    }),
    exit: { 
      x: -20,
      opacity: 0,
      transition: { 
        duration: 0.2,
        ease: "easeIn"
      }
    }
  };

  const menuItems = [
    { to: "/relocation", label: "Atlas Path Relocation" },
    { to: "/destinations", label: "Destinations" },
    { to: "/about", label: "About Us" },
    { to: "/packages", label: "Packages" },
    { to: "/contact", label: "Contact Us" }
  ];

  return (
    <nav className="bg-transparent border-b border-transparent fixed w-full top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-2 sm:py-4 md:py-7 py-2.5">
        <div className="md:grid md:grid-cols-3 md:items-center uppercase  flex items-center justify-between h-16">
          {/* LEFT: Navigation links (desktop) */}
          <div className="hidden md:flex md:items-center md:space xl:space-x-6">
            <Link to="/pottery-process" className="text-white font-medium">Atlas Path</Link>
            <Link to="/qa" className="text-white font-medium">Destinations</Link>
            <Link to="/booking-policy" className="text-white font-medium">About</Link>
            <Link to="/booking" className="text-white font-medium">Packages</Link>
            <Link to="/contact" className="text-white font-medium">Contact</Link>
          </div>

          {/* CENTER: Logo */}
          <div className="flex justify-center">
            <Link to="/" className="flex-shrink-0 relative flex items-center">
              <img src={logo} alt="Studio Logo" className="h-[80px] w-auto" />
            </Link>
          </div>

          {/* RIGHT: Social icons (desktop) + hamburger (mobile) */}
          <div className="flex items-center justify-end space-x-4">
            <div className="hidden md:flex md:items-center md:space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebookF className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaWhatsapp className="h-5 w-5" />
              </a>
            </div>

            <div className="md:hidden">
              <motion.button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-gray-900 focus:outline-none z-60 relative"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <HiX className="h-7 w-7 text-white" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <HiMenu className="h-7 w-7 text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Full Screen Mobile Menu Overlay with Framer Motion */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed inset-0 z-[60] bg-white"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <motion.div 
              className="absolute top-5 right-4 z-[70]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <motion.button
                onClick={closeMenu}
                className="p-2 text-gray-700 hover:text-gray-900 focus:outline-none"
                aria-label="Close menu"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HiX className="h-8 w-8" />
              </motion.button>
            </motion.div>

            {/* Menu Content */}
            <motion.div 
              className="h-full w-full flex flex-col uppercase mt-20 px-6"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >

              {/* Navigation Links */}
              <div className="w-full space-y-4">
                <AnimatePresence>
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.to}
                      custom={index}
                      variants={menuItemVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                    >
                      <Link
                        to={item.to}
                        className="block py-3 text-lg font-semibold text-gray-800 hover:text-ceramic-600 transition duration-150"
                        onClick={closeMenu}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <motion.div 
                className="mt-12 flex items-center justify-center space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <motion.a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-rose-600"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaInstagram size={26} />
                </motion.a>
                <motion.a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-blue-600"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaFacebookF size={26} />
                </motion.a>
                <motion.a 
                  href="https://wa.me/2547xxxxxxxx" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 hover:text-green-600"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaWhatsapp size={26} />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;