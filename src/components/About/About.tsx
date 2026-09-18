import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="border-t border-[#24282C]/60 py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr_1.2fr]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-[#6366F1]">About Me</p>

          <h2 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Building with
            <br />
            <span className="text-[#9CA3AF]">purpose.</span>
          </h2>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-base leading-8 text-[#9CA3AF] lg:text-lg lg:leading-8"
        >
          <p>
            I'm a full-stack web developer focused on building modern,
            responsive applications that solve practical problems.
          </p>

          <p>
            My work spans frontend development, backend APIs, databases,
            authentication, real-time applications, and business-focused
            software.
          </p>

          <p>
            I enjoy taking an idea from a rough concept to a working product,
            paying attention to both the technical foundation and the user
            experience along the way.
          </p>

          <div className="grid gap-6 border-t border-[#24282C] pt-8 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                Focus
              </p>

              <p className="mt-2 text-sm text-[#F5F5F5]">
                Web Applications & SaaS
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                Based in
              </p>

              <p className="mt-2 text-sm text-[#F5F5F5]">Kenya</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
