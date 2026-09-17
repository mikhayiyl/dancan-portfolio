import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#24282C]/60 bg-[#08090A]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-semibold tracking-tight text-[#F5F5F5]"
        >
          Dancan<span className="text-[#6366F1]">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-[#9CA3AF] transition-colors hover:text-[#F5F5F5]"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full border border-[#24282C] bg-[#111315] px-4 py-2 text-sm font-medium text-[#F5F5F5] transition-all hover:border-[#6366F1] hover:bg-[#171A1D]"
          >
            Let&apos;s talk <span className="ml-1">→</span>
          </a>
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
                isOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-[#F5F5F5] transition-transform ${
                isOpen ? "-translate-y-[3px] -rotate-45" : ""
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
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="border-b border-[#24282C] px-3 py-4 text-sm text-[#9CA3AF] transition-colors last:border-0 hover:text-[#F5F5F5]"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-3 rounded-xl bg-[#6366F1] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#818CF8]"
              >
                Let&apos;s talk →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
