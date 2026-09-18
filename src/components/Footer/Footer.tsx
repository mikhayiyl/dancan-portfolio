import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-[#24282C]/60 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#6B7280] sm:flex-row">
        <motion.a
          href="#"
          whileHover={{ y: -2 }}
          className="text-lg font-semibold tracking-tight text-[#F5F5F5]"
        >
          Dancan<span className="text-[#6366F1]">.</span>
        </motion.a>

        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} Dancan. Built with React & TypeScript.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="#work"
            className="transition-colors duration-300 hover:text-[#F5F5F5]"
          >
            Work
          </a>

          <a
            href="#about"
            className="transition-colors duration-300 hover:text-[#F5F5F5]"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition-colors duration-300 hover:text-[#F5F5F5]"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
