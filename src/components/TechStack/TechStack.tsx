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
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B7280]">
          Technologies I work with
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="text-sm text-[#9CA3AF] transition-colors duration-300 hover:text-[#F5F5F5]"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;
