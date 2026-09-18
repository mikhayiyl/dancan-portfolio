import { motion } from "framer-motion";
import { experiences } from "../../data/Experience";

function Experience() {
  return (
    <section className="border-t border-[#24282C]/60 py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium text-[#6366F1]">Experience</p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Where I've
            <span className="text-[#9CA3AF]"> been building.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1.75 top-2 hidden h-full w-px bg-[#24282C] sm:block" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.period}-${experience.role}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative grid gap-4 sm:grid-cols-[180px_1fr] sm:gap-10"
              >
                {/* Date */}
                <div className="text-sm text-[#6B7280]">
                  {experience.period}
                </div>

                {/* Content */}
                <div className="relative sm:pl-8">
                  {/* Timeline Dot */}
                  <span className="absolute left-0 top-1.5 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#08090A] bg-[#6366F1] sm:block" />

                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                    {experience.company}
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">
                    {experience.role}
                  </h3>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[#9CA3AF]">
                    {experience.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
