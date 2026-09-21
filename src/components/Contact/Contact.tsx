import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#24282C] px-6 py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#6366F1]/10 blur-3xl" />

      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-sm text-[#6366F1]">GET IN TOUCH</p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl">
            Let&apos;s build something useful.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#9CA3AF] sm:text-lg">
            Have a project, an idea, or an opportunity worth discussing?
            I&apos;m always open to conversations about building practical
            digital products.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:duhnycan@gmail.com"
              className="inline-flex items-center justify-center border border-[#F5F5F5] bg-[#F5F5F5] px-6 py-3 text-sm font-medium text-[#08090A] transition-all duration-300 hover:bg-white"
            >
              Email me
              <span className="ml-2">↗</span>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#24282C] px-6 py-3 text-sm font-medium text-[#F5F5F5] transition-all duration-300 hover:border-[#6366F1]/60 hover:bg-[#171A1D]"
            >
              GitHub
              <span className="ml-2">↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/dancan-muthini-b051a7193/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-[#24282C] px-6 py-3 text-sm font-medium text-[#F5F5F5] transition-all duration-300 hover:border-[#6366F1]/60 hover:bg-[#171A1D]"
            >
              LinkedIn
              <span className="ml-2">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
