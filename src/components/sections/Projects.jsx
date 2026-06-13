import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [modalImageError, setModalImageError] = useState(false);

  const categories = useMemo(() => {
    const uniqueCategories = projects.map((project) => project.category);
    return ["All", ...new Set(uniqueCategories)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const handleViewDetail = (project) => {
    setSelectedProject(project);
    setModalImageError(false);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    setModalImageError(false);
  };

  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute bottom-20 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Featured Work"
          title="Selected Projects"
          description="Project utama yang merepresentasikan kemampuan saya dalam web development, game development, automation, bot development, dan Web3."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-cyan-300 bg-cyan-300 text-slate-950"
                    : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-cyan-300/40 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid gap-6 lg:grid-cols-2"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onViewDetail={handleViewDetail}
            />
          ))}
        </motion.div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-6 py-10 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#080c1a] p-6 shadow-2xl md:p-8"
          >
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="Close project detail"
            >
              <X size={20} />
            </button>

            <div className="pr-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                {selectedProject.category}
              </p>

              <h3 className="mt-4 text-3xl font-black text-white md:text-5xl">
                {selectedProject.title}
              </h3>

              <p className="mt-2 text-lg font-semibold text-cyan-300">
                {selectedProject.subtitle}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  {selectedProject.type}
                </span>

                <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-400">
                  {selectedProject.status}
                </span>
              </div>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 via-blue-500/10 to-purple-500/10">
              {selectedProject.image && !modalImageError ? (
                <img
                  src={selectedProject.image}
                  alt={`${selectedProject.title} preview`}
                  onError={() => setModalImageError(true)}
                  className="h-72 w-full object-cover"
                />
              ) : (
                <div className="flex h-72 items-center justify-center p-6 text-center">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      {selectedProject.category}
                    </p>

                    <h4 className="mt-3 text-2xl font-black text-white">
                      {selectedProject.title}
                    </h4>

                    <p className="mt-2 text-sm text-slate-400">
                      Project screenshot coming soon
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                <h4 className="text-lg font-bold text-white">
                  Project Overview
                </h4>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {selectedProject.description}
                </p>

                <h4 className="mt-7 text-lg font-bold text-white">My Role</h4>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  {selectedProject.role}
                </p>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                  <h4 className="text-lg font-bold text-white">Tech Stack</h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                  <h4 className="text-lg font-bold text-white">
                    Key Highlights
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {selectedProject.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed text-slate-400"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {selectedProject.liveUrl !== "#" && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
                >
                  Open Live Demo
                </a>
              )}

              {selectedProject.githubUrl !== "#" && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Open Repository
                </a>
              )}

              <button
                type="button"
                onClick={handleCloseModal}
                className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
              >
                Close Detail
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

export default Projects;