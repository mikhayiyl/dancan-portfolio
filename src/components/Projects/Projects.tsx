import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <p className="mb-3 text-sm font-medium text-[#6366F1]">
            Selected Work
          </p>

          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Projects built to solve
            <span className="text-[#9CA3AF]"> real problems.</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-[#9CA3AF]">
            A selection of applications and digital products I've built,
            combining thoughtful interfaces with practical functionality.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featuredProject && (
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4 }}
            className="group overflow-hidden rounded-3xl border border-[#24282C] bg-[#111315] transition-shadow duration-500 hover:shadow-2xl hover:shadow-[#6366F1]/5"
          >
            {/* Project Preview */}
            <div className="relative aspect-video overflow-hidden border-b border-[#24282C] bg-[#08090A]">
              {/* Ambient glow */}
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366F1]/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

              {/* Browser window */}
              <div className="absolute inset-6 overflow-hidden rounded-xl border border-[#24282C] bg-[#111315] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                {/* Browser header */}
                <div className="flex h-9 items-center gap-1.5 border-b border-[#24282C] px-4">
                  <span className="h-2 w-2 rounded-full bg-[#24282C]" />
                  <span className="h-2 w-2 rounded-full bg-[#24282C]" />
                  <span className="h-2 w-2 rounded-full bg-[#24282C]" />

                  <div className="mx-auto h-4 w-40 rounded bg-[#08090A]" />
                </div>

                {/* Dashboard */}
                <div className="grid h-full grid-cols-[90px_1fr]">
                  {/* Sidebar */}
                  <div className="border-r border-[#24282C] p-3">
                    <div className="mb-6 h-4 w-10 rounded bg-[#6366F1]/40" />

                    <div className="space-y-3">
                      <div className="h-2 w-full rounded bg-[#24282C]" />
                      <div className="h-2 w-4/5 rounded bg-[#24282C]" />
                      <div className="h-2 w-full rounded bg-[#6366F1]/30" />
                      <div className="h-2 w-3/4 rounded bg-[#24282C]" />
                    </div>
                  </div>

                  {/* Main dashboard */}
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="h-3 w-20 rounded bg-[#24282C]" />
                        <div className="mt-2 h-5 w-32 rounded bg-[#F5F5F5]/10" />
                      </div>

                      <div className="h-6 w-16 rounded bg-[#6366F1]/20" />
                    </div>

                    {/* Chart */}
                    <div className="mt-8 flex h-28 items-end gap-2">
                      {[35, 50, 42, 65, 55, 78, 68, 90].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          whileInView={{ height: `${height}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.5,
                            delay: 0.2 + index * 0.05,
                          }}
                          className="flex-1 rounded-t-sm bg-[#6366F1]/40"
                        />
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="mt-5 grid grid-cols-3 gap-3">
                      <div className="rounded-lg border border-[#24282C] p-3">
                        <div className="h-2 w-10 rounded bg-[#24282C]" />
                        <div className="mt-2 h-4 w-14 rounded bg-[#F5F5F5]/10" />
                      </div>

                      <div className="rounded-lg border border-[#24282C] p-3">
                        <div className="h-2 w-10 rounded bg-[#24282C]" />
                        <div className="mt-2 h-4 w-14 rounded bg-[#F5F5F5]/10" />
                      </div>

                      <div className="rounded-lg border border-[#24282C] p-3">
                        <div className="h-2 w-10 rounded bg-[#24282C]" />
                        <div className="mt-2 h-4 w-14 rounded bg-[#F5F5F5]/10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Information */}
            <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                  {featuredProject.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-[#9CA3AF]">
                  {featuredProject.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featuredProject.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-[#24282C] px-3 py-1.5 text-xs text-[#9CA3AF]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Featured Project Actions */}
              <div className="flex flex-wrap gap-3">
                <Link
                  to={`/projects/${featuredProject.slug}`}
                  className="rounded-full bg-[#F5F5F5] px-5 py-2.5 text-sm font-medium text-[#08090A] transition-transform duration-300 hover:scale-105"
                >
                  View Project →
                </Link>

                <a
                  href={featuredProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#24282C] px-5 py-2.5 text-sm text-[#F5F5F5] transition-colors duration-300 hover:border-[#6366F1]/60"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>
          </motion.article>
        )}

        {/* Other Projects */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="block"
            >
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group overflow-hidden rounded-3xl border border-[#24282C] bg-[#111315] transition-shadow duration-500 hover:shadow-xl hover:shadow-[#6366F1]/5"
              >
                {/* Preview */}
                <div className="relative aspect-16/10 overflow-hidden border-b border-[#24282C] bg-[#08090A]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#6366F1_0%,transparent_45%)] opacity-5 transition-transform duration-700 group-hover:scale-125" />

                  <div className="absolute inset-8 rounded-2xl border border-[#24282C] bg-[#111315] transition-transform duration-700 group-hover:scale-[1.03]">
                    <div className="flex h-8 items-center gap-1.5 border-b border-[#24282C] px-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#24282C]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#24282C]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#24282C]" />
                    </div>

                    <div className="p-5">
                      <div className="h-3 w-24 rounded bg-[#24282C]" />
                      <div className="mt-3 h-5 w-36 rounded bg-[#F5F5F5]/10" />

                      <div className="mt-8 grid grid-cols-3 gap-2">
                        <div className="h-16 rounded-lg bg-[#08090A]" />
                        <div className="h-16 rounded-lg bg-[#08090A]" />
                        <div className="h-16 rounded-lg bg-[#08090A]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#6B7280]">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[#9CA3AF]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="text-xs text-[#6B7280]">
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-sm font-medium text-[#F5F5F5] transition-colors group-hover:text-[#6366F1]">
                    View Project →
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            to="/projects"
            className="rounded-full border border-[#24282C] px-6 py-3 text-sm font-medium transition-colors hover:border-[#6366F1]/60"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Projects;
