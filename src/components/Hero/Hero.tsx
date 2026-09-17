import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-24">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex items-center gap-2 text-sm text-[#9CA3AF]"
          >
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for work
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Full-Stack
            <br />
            <span className="text-[#9CA3AF]">Web Developer.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-base leading-7 text-[#9CA3AF] sm:text-lg"
          >
            I build modern web applications, SaaS products, and digital
            experiences that are fast, responsive, and built to solve real
            business problems.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {["React", "TypeScript", "Next.js", "Node.js", "Firebase"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-[#24282C] bg-[#111315] px-3 py-1.5 text-xs text-[#9CA3AF]"
                >
                  {tech}
                </span>
              ),
            )}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#work"
              className="rounded-full bg-[#F5F5F5] px-6 py-3 text-sm font-medium text-[#08090A] transition-transform duration-300 hover:scale-105"
            >
              View my work →
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#24282C] bg-[#111315] px-6 py-3 text-sm font-medium text-[#F5F5F5] transition-all duration-300 hover:border-[#6366F1]/60 hover:bg-[#171A1D]"
            >
              GitHub ↗
            </a>
          </motion.div>
        </div>

        {/* Right Visual */}
        <div className="relative hidden lg:block">
          <div className="relative mx-auto aspect-square max-w-lg">
            {/* Glow */}
            <div className="absolute inset-10 rounded-full bg-[#6366F1]/10 blur-3xl" />

            {/* Placeholder Product Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute inset-8 rounded-2xl border border-[#24282C] bg-[#111315] p-5 shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-[#24282C] pb-4">
                <div>
                  <p className="text-xs text-[#6B7280]">Analytics Dashboard</p>
                  <p className="mt-1 text-sm font-medium">Revenue Overview</p>
                </div>

                <div className="h-2 w-2 rounded-full bg-green-400" />
              </div>

              {/* Fake chart */}
              <div className="mt-8 flex h-48 items-end gap-3">
                {[35, 55, 42, 70, 58, 82, 65, 92].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{
                      duration: 0.6,
                      delay: 0.6 + index * 0.05,
                    }}
                    className="flex-1 rounded-t-md bg-[#6366F1]/60"
                  />
                ))}
              </div>

              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="text-xs text-[#6B7280]">Total Revenue</p>
                  <p className="mt-1 text-2xl font-semibold">$48,290</p>
                </div>

                <span className="text-xs text-green-400">+18.4%</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#24282C 1px, transparent 1px),
              linear-gradient(90deg, #24282C 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 70%)",
          }}
        />
      </div>
    </section>
  );
}

export default Hero;
