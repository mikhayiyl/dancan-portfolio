import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <main className="min-h-screen bg-[#08090A] px-6 py-32">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-3xl font-semibold">Project not found</h1>

          <Link to="/projects" className="mt-6 inline-block text-[#6366F1]">
            ← Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#08090A] py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link to="/projects" className="text-sm text-[#9CA3AF]">
          ← Back to projects
        </Link>

        <div className="mt-10">
          <p className="text-sm uppercase tracking-[0.2em] text-[#6366F1]">
            {project.category}
          </p>

          <h1 className="mt-4 text-4xl font-semibold sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#9CA3AF]">
            {project.description}
          </p>
        </div>

        <img
          src={project.image}
          alt={project.title}
          className="mt-12 w-full rounded-3xl border border-[#24282C]"
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#24282C] px-4 py-2 text-sm text-[#9CA3AF]"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-10 flex gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#F5F5F5] px-6 py-3 text-sm font-medium text-[#08090A]"
          >
            Live Demo ↗
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#24282C] px-6 py-3 text-sm"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetails;
