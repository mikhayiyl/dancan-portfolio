import { motion } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiFirebase,
} from "react-icons/si";
import { TbDatabase } from "react-icons/tb";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Firebase", icon: SiFirebase },
  { name: "SQL", icon: TbDatabase },
];

const revenuePoints = "0,75 22,58 44,68 66,38 88,52 110,25 132,42 154,12";

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#24282C]/50 pt-24">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-[#6366F1]/6 blur-[130px]" />

      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-15">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#24282C 1px, transparent 1px),
              linear-gradient(90deg, #24282C 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 72%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-14 sm:py-18 lg:grid-cols-2 lg:gap-8 lg:py-20">
        {/* Left Content */}
        <div className="relative z-10">
          {/* Availability */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#6B7280]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_7px_rgba(74,222,128,0.6)]" />
            Available for opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#F5F5F5] sm:text-6xl lg:text-7xl"
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
            className="mt-5 max-w-xl text-base leading-7 text-[#9CA3AF] sm:mt-6 sm:text-lg"
          >
            I build modern web applications, SaaS products, and digital
            experiences that are fast, responsive, and built to solve real
            business problems.
          </motion.p>

          {/* Technology Icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            {technologies.map(({ name, icon: Icon }) => (
              <div
                key={name}
                title={name}
                className="group flex h-9 w-9 items-center justify-center rounded-lg border border-[#24282C] bg-[#111315] text-[#9CA3AF] transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1]/50 hover:bg-[#171A1D] hover:text-[#818CF8]"
              >
                <Icon className="h-4.5 w-4.5 transition-transform duration-300 group-hover:scale-110" />
              </div>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#work"
              className="rounded-full bg-[#F5F5F5] px-6 py-3 text-sm font-medium text-[#08090A] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
            >
              View my work <span className="ml-1">→</span>
            </a>

            <a
              href="mailto:duhnycan@gmail.com"
              className="rounded-full border border-[#24282C] bg-[#111315] px-6 py-3 text-sm font-medium text-[#F5F5F5] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6366F1]/60 hover:bg-[#171A1D]"
            >
              Contact me <span className="ml-1">↗</span>
            </a>
          </motion.div>
        </div>

        {/* Right Analytics Visual */}
        <div className="relative hidden min-h-120 lg:block">
          {/* Main Glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366F1]/8 blur-[100px]" />

          {/* Revenue Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -5, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.3 },
              scale: { duration: 0.7, delay: 0.3 },
              y: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              },
            }}
            className="absolute left-[5%] top-[7%] z-20 w-[62%] rounded-2xl border border-[#24282C] bg-[#111315]/95 p-5 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] text-[#6B7280]">Total Revenue</p>
                <p className="mt-1 text-xl font-semibold text-[#F5F5F5]">
                  $84,250
                </p>
              </div>

              <span className="rounded-full bg-green-400/10 px-2 py-1 text-[9px] text-green-400">
                +18.4%
              </span>
            </div>

            {/* Line Chart */}
            <div className="mt-5 h-28">
              <svg
                viewBox="0 0 154 90"
                className="h-full w-full overflow-visible"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient
                    id="revenueGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#6366F1" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <polygon
                  points={`0,90 ${revenuePoints} 154,90`}
                  fill="url(#revenueGradient)"
                />

                <polyline
                  points={revenuePoints}
                  fill="none"
                  stroke="#818CF8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="mt-2 flex justify-between text-[9px] text-[#6B7280]">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </motion.div>

          {/* Sales Overview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, 4, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.45 },
              scale: { duration: 0.7, delay: 0.45 },
              y: {
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              },
            }}
            className="absolute right-[2%] top-[20%] z-10 w-[48%] rounded-2xl border border-[#24282C] bg-[#111315]/95 p-4 shadow-2xl backdrop-blur-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] text-[#6B7280]">Analytics</p>
                <p className="mt-1 text-xs font-medium text-[#F5F5F5]">
                  Sales Overview
                </p>
              </div>

              <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
            </div>

            <div className="mt-5 flex h-28 items-end gap-2">
              {[42, 68, 50, 78, 58, 88, 65, 94].map((height, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{
                    duration: 0.7,
                    delay: 0.65 + index * 0.05,
                  }}
                  className="flex-1 rounded-t-sm bg-[#6366F1]/60 transition-colors hover:bg-[#818CF8]"
                />
              ))}
            </div>

            <div className="mt-3 flex justify-between text-[8px] text-[#6B7280]">
              <span>W1</span>
              <span>W2</span>
              <span>W3</span>
              <span>W4</span>
            </div>
          </motion.div>

          {/* Top Products / Progress Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -4, 0],
            }}
            transition={{
              opacity: { duration: 0.7, delay: 0.55 },
              scale: { duration: 0.7, delay: 0.55 },
              y: {
                duration: 6.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              },
            }}
            className="absolute bottom-[8%] left-[25%] z-30 w-[42%] rounded-2xl border border-[#24282C] bg-[#111315]/95 p-5 shadow-2xl backdrop-blur-xl"
          >
            <p className="text-[9px] text-[#6B7280]">Top Products</p>

            <div className="mt-4 flex items-center gap-4">
              {/* Progress Ring */}
              <div
                className="relative h-20 w-20 shrink-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(#6366F1 0deg 259deg, #24282C 259deg 360deg)",
                }}
              >
                <div className="absolute inset-2 flex items-center justify-center rounded-full bg-[#111315]">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-[#F5F5F5]">72%</p>
                    <p className="text-[7px] text-[#6B7280]">Growth</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-[#F5F5F5]">Apparel</p>
                <p className="mt-1 text-[9px] leading-4 text-[#6B7280]">
                  Highest performing
                  <br />
                  product category
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Nodes */}
          <div className="absolute bottom-[12%] right-[8%] h-2 w-2 rounded-full bg-[#6366F1] shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
          <div className="absolute bottom-[28%] left-[12%] h-1.5 w-1.5 rounded-full bg-[#818CF8]/70" />
        </div>
      </div>

      {/* Subtle transition into next section */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-linear-to-r from-transparent via-[#24282C] to-transparent" />
    </section>
  );
}

export default Hero;
