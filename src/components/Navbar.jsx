import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

function Navbar() {
  // State hook to manage mobile menu open/close state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Navigation menu items array
  const navItems = [
    "Moje práce",
    "Ceník a služby",
    "O mně",
    "Kontakty",
  ];

  // Animation variants for Framer Motion
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const hamburgerVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 90,
    },
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo Section */}
        <motion.div
          className="navbar-logo"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1>💅 RunaNails Studio</h1>
        </motion.div>

        {/* Desktop Navigation Links */}
        <ul className="nav-menu desktop-menu">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={menuVariants}
            >
              <a href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="nav-link">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Hamburger Menu Button */}
        <motion.button
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          variants={hamburgerVariants}
          animate={isMenuOpen ? "open" : "closed"}
          transition={{ duration: 0.3 }}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </motion.button>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-container"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <ul className="nav-menu mobile-menu">
              {navItems.map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="nav-link mobile-nav-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;