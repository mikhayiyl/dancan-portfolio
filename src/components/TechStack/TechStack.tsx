import { motion } from "framer-motion";

const technologies = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "Firebase",
  "SQL",
  "Tailwind CSS",
  "Git",
];

function TechStack() {
  return (
    <section className="border-y border-[#24282C]/60">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B7280]"
        >
          Technologies I work with
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-x-6 gap-y-3"
        >
          {technologies.map((technology) => (
            <span
              key={technology}
              className="text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-[#F5F5F5]"
            >
              {technology}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default TechStack;
