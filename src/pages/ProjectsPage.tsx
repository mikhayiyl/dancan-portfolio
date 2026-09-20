import { projects } from "../data/projects";
import { Link } from "react-router-dom";

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#08090A] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-medium text-[#6366F1]">My Work</p>

          <h1 className="text-4xl font-semibold sm:text-5xl">
            Projects I've built
          </h1>

          <p className="mt-5 text-[#9CA3AF]">
            A collection of applications, experiments, and digital products I've
            built while developing my skills.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="group"
            >
              <article className="overflow-hidden rounded-3xl border border-[#24282C] bg-[#111315] transition-transform duration-300 group-hover:-translate-y-1">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#6B7280]">
                    {project.category}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold">
                    {project.title}
                  </h2>

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

                  <div className="mt-6 text-sm font-medium text-[#F5F5F5]">
                    View Project →
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;
