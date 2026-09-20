import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="py-24 sm:py-28 lg:py-32">
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
            {/* Project Image */}
            <Link to={`/projects/${featuredProject.slug}`} className="block">
              <div className="aspect-video overflow-hidden border-b border-[#24282C] bg-[#08090A]">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  decoding="async"
                  fetchPriority="high"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

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
              className="group"
            >
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="overflow-hidden rounded-3xl border border-[#24282C] bg-[#111315] transition-shadow duration-500 hover:shadow-xl hover:shadow-[#6366F1]/5"
              >
                {/* Project Image */}
                <div className="aspect-video overflow-hidden border-b border-[#24282C] bg-[#08090A]">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Project Information */}
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
                      <span
                        key={technology}
                        className="rounded-full border border-[#24282C] px-3 py-1 text-xs text-[#9CA3AF]"
                      >
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

        {/* View All */}
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
