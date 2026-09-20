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
    <section className="border-t border-[#24282C]/60 py-24 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl sm:mb-16"
        >
          <p className="mb-3 text-sm font-medium text-[#6366F1]">My Process</p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            From idea to
            <span className="text-[#9CA3AF]"> product.</span>
          </h2>
        </motion.div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Mobile vertical line */}
          <div className="absolute bottom-0 left-6 top-0 w-px bg-[#24282C] sm:hidden" />

          {/* Tablet / Desktop horizontal line */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-[#24282C] sm:block lg:block" />

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-16 lg:grid-cols-5 lg:gap-x-0 lg:gap-y-0">
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
                className="relative flex gap-6 sm:block"
              >
                {/* Mobile number */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#6366F1] bg-[#08090A] font-mono text-xs text-[#6366F1] sm:mx-auto">
                  {step.number}
                </div>

                {/* Content */}
                <div className="pt-1 sm:mt-6 sm:pt-0 sm:text-center lg:px-5 lg:text-left">
                  <h3 className="text-lg font-semibold">{step.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-[#9CA3AF]">
                    {step.description}
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

export default Process;
