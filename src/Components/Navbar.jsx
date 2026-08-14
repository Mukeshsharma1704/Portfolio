import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiArrowUpRight,
} from "react-icons/fi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (href) => {
    // Close mobile menu first
    setMenuOpen(false);

    // Wait for menu animation before scrolling
    setTimeout(() => {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-[#f5f0e6]/90 backdrop-blur-md"
    >
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">

        {/* LOGO */}
        <button
          type="button"
          onClick={() => handleNavigation("#home")}
          className="group relative text-xl font-black tracking-[-0.05em] sm:text-2xl"
        >
          MUKESH KUMAR
          <span className="text-[#f04438]">.</span>

          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#f04438] transition-all duration-300 group-hover:w-full" />
        </button>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.name}
              type="button"
              onClick={() => handleNavigation(link.href)}
              className="group relative text-[11px] font-bold uppercase tracking-[0.1em]"
            >
              {link.name}

              <span className="absolute -bottom-2 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-[#f04438] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <button
          type="button"
          onClick={() => handleNavigation("#contact")}
          className="group hidden items-center gap-3 bg-[#f04438] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.08em] text-white transition-transform duration-300 hover:-translate-y-0.5 lg:flex"
        >
          Let's Work Together

          <FiArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="flex h-11 w-11 items-center justify-center border border-black/15 lg:hidden"
        >
          {menuOpen ? (
            <FiX size={22} />
          ) : (
            <FiMenu size={22} />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden border-t border-black/10 bg-[#f5f0e6] lg:hidden"
          >
            <div className="px-5 py-6 sm:px-8">

              {/* MOBILE NAVIGATION */}
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.name}
                  type="button"
                  onClick={() => handleNavigation(link.href)}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                  }}
                  className="block w-full border-b border-black/10 py-4 text-left text-sm font-bold uppercase tracking-[0.08em]"
                >
                  {link.name}
                </motion.button>
              ))}

              {/* MOBILE CTA */}
              <button
                type="button"
                onClick={() => handleNavigation("#contact")}
                className="mt-6 flex w-full items-center justify-between bg-[#f04438] px-5 py-4 text-left text-xs font-bold uppercase tracking-[0.08em] text-white"
              >
                Let's Work Together

                <FiArrowUpRight size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;