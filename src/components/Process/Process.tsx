import { motion } from "framer-motion";

const processSteps = [
  {
    number: "01",
    title: "Understand",
    description:
      "I start by understanding the problem, the users, and what the product actually needs to accomplish.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "I turn the requirements into a clear interface and technical structure before jumping into implementation.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "I build the product with reusable components, clean architecture, responsive layouts, and practical integrations.",
  },
  {
    number: "04",
    title: "Test",
    description:
      "I test interactions, responsiveness, data flows, and edge cases to make sure the application behaves as expected.",
  },
  {
    number: "05",
    title: "Ship",
    description:
      "I deploy, monitor, refine, and continue improving the product based on real usage and feedback.",
  },
];

function Process() {
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
          <p className="mb-3 text-sm font-medium text-[#6366F1]">My Process</p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            From idea to
            <span className="text-[#9CA3AF]"> product.</span>
          </h2>
        </motion.div>

        {/* Process Grid */}
        <div className="grid gap-px overflow-hidden rounded-3xl border border-[#24282C] bg-[#24282C] sm:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="bg-[#111315] p-6 transition-colors duration-300 hover:bg-[#171A1D]"
            >
              <span className="font-mono text-xs text-[#6366F1]">
                {step.number}
              </span>

              <h3 className="mt-8 text-lg font-semibold">{step.title}</h3>

              <p className="mt-3 text-sm leading-6 text-[#9CA3AF]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
