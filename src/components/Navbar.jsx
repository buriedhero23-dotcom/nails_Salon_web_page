import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../style/Navbar.css";
import AnimatedLogoText from "./AnimatedLogoText";
import logoIcon from "../../images/icons/logo-no-text.png"
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Moje práce", id: "portfolio" },
    { label: "Ceník a služby", id: "prices" },
    { label: "O mně", id: "about" },
    { label: "Kontakty", id: "contacts" },
  ];

  const scrollToSection = (id) => {
    const scroll = () => {
      if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      const section = document.getElementById(id);
      if (!section) return;

      const navbarHeight = document.querySelector(".navbar")?.offsetHeight || 0;
      const top =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight - 16;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    };

    setIsMenuOpen(false);

    setTimeout(scroll, 280);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <motion.button
          type="button"
          className="navbar-logo"
          onClick={() => scrollToSection("hero")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="navbar-logo-icon">
            <img
              src={logoIcon}
              alt="RunaNails Studio logo"
              className="navbar-logo-img"
            />
          </span>
          <AnimatedLogoText />
        </motion.button>

        <ul className="nav-menu desktop-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className="nav-link"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="hamburger-menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle mobile menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <ul className="nav-menu mobile-menu">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    className="nav-link mobile-nav-link"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;