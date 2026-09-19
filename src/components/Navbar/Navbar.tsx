import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname, hash } = useLocation();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll when hash changes OR when navigating home
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  const navLinks = [
    { name: "Work", href: isHome ? "#work" : "/#work" },
    { name: "Skills", href: isHome ? "#skills" : "/#skills" },
    { name: "About", href: isHome ? "#about" : "/#about" },
    { name: "Contact", href: isHome ? "#contact" : "/#contact" },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#24282C]/60 bg-[#08090A]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}

        <Link
          to="/"
          className="text-xl font-semibold tracking-tight text-[#F5F5F5]"
          onClick={handleLogoClick}
        >
          Dancan<span className="text-[#6366F1]">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm text-[#9CA3AF] transition-colors hover:text-[#F5F5F5]"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/#contact"
            className="rounded-full border border-[#24282C] bg-[#111315] px-4 py-2 text-sm font-medium text-[#F5F5F5] transition-all hover:border-[#6366F1] hover:bg-[#171A1D]"
          >
            Let&apos;s talk <span className="ml-1">→</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#24282C] bg-[#111315] md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-px w-5 bg-[#F5F5F5] transition-transform ${
                isOpen ? "translate-y-0.75 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[#F5F5F5] transition-transform ${
                isOpen ? "-translate-y-0.75 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-6 rounded-2xl border border-[#24282C] bg-[#111315]/95 p-4 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[#24282C] px-3 py-4 text-sm text-[#9CA3AF] transition-colors last:border-0 hover:text-[#F5F5F5]"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to={isHome ? "#contact" : "/#contact"}
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-xl bg-[#6366F1] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#818CF8]"
              >
                Let&apos;s talk →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
