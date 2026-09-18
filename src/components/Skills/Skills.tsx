import { motion } from "framer-motion";
import { skillGroups } from "../../data/Skills";

function Skills() {
  return (
    <section id="skills" className="border-t border-[#24282C]/60 py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium text-[#6366F1]">
            Skills & Expertise
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            The tools I use to
            <span className="text-[#9CA3AF]"> build.</span>
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-[#24282C] bg-[#24282C] md:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#111315] p-7 transition-colors duration-300 hover:bg-[#171A1D]"
            >
              <h3 className="text-sm font-medium text-[#F5F5F5]">
                {group.title}
              </h3>

              <div className="mt-6 space-y-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-3 text-sm text-[#9CA3AF]"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-[#6366F1] transition-transform duration-300 group-hover:scale-125" />
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently Exploring */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 rounded-3xl border border-[#24282C] bg-[#111315] p-7"
        >
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium">Currently exploring</p>

              <p className="mt-1 text-sm text-[#6B7280]">
                Expanding my toolkit beyond the frontend.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "Prisma",
                "Next.js",
                "SQL",
                "React Native",
                "Microsoft AL",
                "Cloud",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#24282C] px-3 py-1.5 text-xs text-[#9CA3AF]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
