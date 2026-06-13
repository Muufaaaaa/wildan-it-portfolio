import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, ImageIcon } from "lucide-react";

function ProjectCard({ project, index, onViewDetail }) {
  const [imageError, setImageError] = useState(false);

  const shouldShowImage = project.image && !imageError;

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
    >
      <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-cyan-300/20" />

      <div className="relative">
        <div className="mb-6 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 via-blue-500/10 to-purple-500/10">
          {shouldShowImage ? (
            <img
              src={project.image}
              alt={`${project.title} preview`}
              onError={() => setImageError(true)}
              className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-56 items-center justify-center p-6">
              <div className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
                  <ImageIcon size={30} />
                </div>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                  {project.category}
                </p>

                <h3 className="mt-3 text-3xl font-black text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Screenshot coming soon
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
            {project.type}
          </span>

          <span className="rounded-full border border-white/10 bg-[#050816]/70 px-3 py-1 text-xs font-medium text-slate-400">
            {project.status}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white">{project.title}</h3>

        <p className="mt-1 text-sm font-medium text-cyan-300">
          {project.subtitle}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => onViewDetail(project)}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >
            View Detail
            <ArrowUpRight size={16} />
          </button>

          {project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;