import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Laptop,
  Rocket,
  X,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import { achievements } from "../../data/achievements";

const achievementIcons = {
  "Bootcamp Project": Rocket,
  "Web Development Project": Code2,
  "Game Development Project": Laptop,
  "Automation Project": Rocket,
};

function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(null);
  const [imageErrors, setImageErrors] = useState({});
  const [modalImageError, setModalImageError] = useState(false);

  const closeButtonRef = useRef(null);

  const handleImageError = (achievementId) => {
    setImageErrors((currentErrors) => ({
      ...currentErrors,
      [achievementId]: true,
    }));
  };

  const handleOpenDetail = (achievement) => {
    setSelectedAchievement(achievement);
    setModalImageError(false);
  };

  const handleCloseDetail = () => {
    setSelectedAchievement(null);
    setModalImageError(false);
  };

  useEffect(() => {
    if (!selectedAchievement) {
      document.body.style.overflow = "";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 100);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedAchievement(null);
        setModalImageError(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [selectedAchievement]);

  const completedTotal = achievements.filter(
    (achievement) => achievement.status === "Completed"
  ).length;

  const skillTotal = new Set(
    achievements.flatMap((achievement) => achievement.skills)
  ).size;

  return (
    <section id="achievements" className="relative px-6 py-24">
      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-purple-500/10 blur-[130px]" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Achievements"
          title="Learning, Projects & Milestones"
          description="Dokumentasi milestone pembelajaran, bootcamp, dan project akademik yang memperkuat pengalaman saya di berbagai bidang teknologi."
        />

        <div className="mb-10 grid gap-4 sm:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur-xl"
          >
            <p className="text-3xl font-black text-white">
              {achievements.length}
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Milestones
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 text-center backdrop-blur-xl"
          >
            <p className="text-3xl font-black text-white">
              {completedTotal}
            </p>

            <p className="mt-2 text-sm text-cyan-100">
              Completed
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="rounded-3xl border border-purple-300/20 bg-purple-300/10 p-6 text-center backdrop-blur-xl"
          >
            <p className="text-3xl font-black text-white">
              {skillTotal}+
            </p>

            <p className="mt-2 text-sm text-purple-100">
              Technologies Practiced
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => {
            const Icon =
              achievementIcons[achievement.type] || Code2;

            const imageAvailable =
              Boolean(achievement.image) &&
              !imageErrors[achievement.id];

            return (
              <motion.article
                key={achievement.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <div className="absolute right-0 top-0 h-40 w-40 translate-x-12 -translate-y-12 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-cyan-300/20" />

                <div className="relative">
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 via-blue-500/10 to-purple-500/10">
                    {imageAvailable ? (
                      <img
                        src={achievement.image}
                        alt={`${achievement.title} documentation`}
                        width="1600"
                        height="900"
                        loading="lazy"
                        decoding="async"
                        onError={() =>
                          handleImageError(achievement.id)
                        }
                        className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-52 items-center justify-center p-6">
                        <div className="text-center">
                          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
                            <Icon size={30} />
                          </div>

                          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                            {achievement.type}
                          </p>

                          <p className="mt-3 text-sm text-slate-400">
                            Documentation coming soon
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                      {achievement.type}
                    </span>

                    <span
                      className={`rounded-full border px-3 py-1 text-xs font-medium ${
                        achievement.status === "Completed"
                          ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
                          : "border-yellow-300/20 bg-yellow-300/10 text-yellow-200"
                      }`}
                    >
                      {achievement.status}
                    </span>
                  </div>

                  <h3 className="mt-5 text-2xl font-black text-white">
                    {achievement.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-cyan-300">
                    {achievement.issuer}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {achievement.date}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    {achievement.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {achievement.skills
                      .slice(0, 5)
                      .map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      handleOpenDetail(achievement)
                    }
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
                  >
                    View Achievement
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {selectedAchievement && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/75 px-4 py-8 backdrop-blur-md sm:px-6"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              handleCloseDetail();
            }
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="achievement-modal-title"
            aria-describedby="achievement-modal-description"
            initial={{ opacity: 0, scale: 0.93, y: 22 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#080c1a] p-6 shadow-2xl md:p-8"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={handleCloseDetail}
              aria-label="Close achievement detail"
              className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-[#080c1a]/90 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="pr-12">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                {selectedAchievement.type}
              </p>

              <h3
                id="achievement-modal-title"
                className="mt-4 text-3xl font-black text-white md:text-5xl"
              >
                {selectedAchievement.title}
              </h3>

              <p className="mt-3 text-lg font-semibold text-cyan-300">
                {selectedAchievement.issuer}
              </p>

              <p className="mt-2 text-sm text-slate-500">
                {selectedAchievement.date}
              </p>
            </div>

            <div className="mt-8 overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 via-blue-500/10 to-purple-500/10">
              {selectedAchievement.image &&
              !modalImageError ? (
                <img
                  src={selectedAchievement.image}
                  alt={`${selectedAchievement.title} documentation`}
                  width="1600"
                  height="900"
                  decoding="async"
                  onError={() =>
                    setModalImageError(true)
                  }
                  className="h-64 w-full object-cover md:h-96"
                />
              ) : (
                <div className="flex h-64 items-center justify-center p-8 text-center md:h-96">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                      {selectedAchievement.type}
                    </p>

                    <h4 className="mt-4 text-2xl font-black text-white">
                      {selectedAchievement.title}
                    </h4>

                    <p className="mt-3 text-sm text-slate-400">
                      Documentation image has not been added.
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                <h4 className="text-lg font-bold text-white">
                  Achievement Overview
                </h4>

                <p
                  id="achievement-modal-description"
                  className="mt-4 text-sm leading-relaxed text-slate-400"
                >
                  {selectedAchievement.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                    {selectedAchievement.type}
                  </span>

                  <span
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${
                      selectedAchievement.status === "Completed"
                        ? "border-emerald-300/20 bg-emerald-300/10 text-emerald-200"
                        : "border-yellow-300/20 bg-yellow-300/10 text-yellow-200"
                    }`}
                  >
                    {selectedAchievement.status}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                  <h4 className="text-lg font-bold text-white">
                    Key Highlights
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {selectedAchievement.highlights.map(
                      (highlight) => (
                        <li
                          key={highlight}
                          className="flex gap-3 text-sm leading-relaxed text-slate-400"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                          <span>{highlight}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6">
                  <h4 className="text-lg font-bold text-white">
                    Skills Practiced
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedAchievement.skills.map(
                      (skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {selectedAchievement.credentialUrl && (
                <a
                  href={
                    selectedAchievement.credentialUrl
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300"
                >
                  Open Credential
                </a>
              )}

              <button
                type="button"
                onClick={handleCloseDetail}
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

export default Achievements;