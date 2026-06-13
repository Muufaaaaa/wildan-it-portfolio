import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Laptop,
  Rocket,
  Sparkles,
  Terminal,
} from "lucide-react";

import { projects } from "../../data/projects";
import { profile } from "../../data/profile";

const roles = [
  "Web Developer",
  "Game Developer",
  "Web3 Builder",
  "Automation Enthusiast",
  "Discord Bot Developer",
];

const floatingPositions = [
  {
    position: "left-0 top-10",
    delay: 0,
  },
  {
    position: "right-0 top-36",
    delay: 0.25,
  },
  {
    position: "left-10 bottom-10",
    delay: 0.5,
  },
];

function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const currentYear = new Date().getFullYear();

  const stats = [
    {
      value: projects.length,
      label: "Projects",
    },
    {
      value: profile.focusAreas.length,
      label: "Focus Areas",
    },
    {
      value: currentYear,
      label: "Active Builder",
    },
  ];

  const floatingProjects = projects.slice(0, 3).map((project, index) => ({
    title: project.title,
    category: project.subtitle,
    ...floatingPositions[index],
  }));

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting && text === currentRole) {
          setIsDeleting(true);
          return;
        }

        if (isDeleting && text === "") {
          setIsDeleting(false);
          setRoleIndex((currentIndex) => {
            return (currentIndex + 1) % roles.length;
          });
          return;
        }

        const nextText = isDeleting
          ? currentRole.substring(0, text.length - 1)
          : currentRole.substring(0, text.length + 1);

        setText(nextText);
      },
      !isDeleting && text === currentRole ? 1200 : isDeleting ? 45 : 85
    );

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      <div className="bg-tech-grid absolute inset-0 opacity-60" />

      <div className="absolute left-10 top-28 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-[130px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-200">
            <Sparkles size={16} />
            Personal IT Portfolio
          </div>

          <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            Hi, I&apos;m
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <div className="mt-5 min-h-10 text-xl font-bold text-slate-200 md:text-2xl">
            <span className="text-slate-400">I build as a </span>
            <span className="text-cyan-300">{text}</span>
            <span className="ml-1 animate-pulse text-cyan-300">|</span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            {profile.shortDescription} Saya membangun produk digital mulai dari
            sistem e-commerce Laravel dan sertifikat Web3 hingga game edukasi
            Roblox dan bot Discord.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects

              <ArrowUpRight
                size={18}
                className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 font-bold text-white transition hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 sm:gap-4">
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl"
              >
                <p className="text-2xl font-black text-white md:text-3xl">
                  {item.value}
                </p>

                <p className="mt-1 text-xs text-slate-400 md:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative hidden min-h-[560px] lg:block"
        >
          {floatingProjects.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: project.delay + 0.35,
              }}
              className={`floating-card absolute ${project.position} z-20 w-56 rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-xl`}
            >
              <p className="text-sm font-semibold text-cyan-300">
                {project.category}
              </p>

              <h3 className="mt-2 text-lg font-bold text-white">
                {project.title}
              </h3>
            </motion.div>
          ))}

          <div className="absolute inset-x-16 top-20 rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-400">
                <Terminal size={14} />
                portfolio.jsx
              </div>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <p>
                <span className="text-purple-300">const</span>{" "}
                <span className="text-cyan-300">developer</span>{" "}
                <span className="text-slate-500">= {"{"}</span>
              </p>

              <p className="pl-5 text-slate-300">
                name: <span className="text-cyan-300">"{profile.name}"</span>,
              </p>

              <p className="pl-5 text-slate-300">
                role: <span className="text-blue-300">"{profile.role}"</span>,
              </p>

              <p className="pl-5 text-slate-300">
                focus:{" "}
                <span className="text-purple-300">
                  {JSON.stringify(profile.focusAreas)}
                </span>
                ,
              </p>

              <p className="pl-5 text-slate-300">
                status:{" "}
                <span className="text-emerald-300">
                  "{profile.availability}"
                </span>
                ,
              </p>

              <p>
                <span className="text-slate-500">{"}"}</span>
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-center">
                <Code2 className="mx-auto text-cyan-300" />
                <p className="mt-2 text-xs text-slate-300">Web</p>
              </div>

              <div className="rounded-2xl border border-purple-400/20 bg-purple-400/10 p-4 text-center">
                <Rocket className="mx-auto text-purple-300" />
                <p className="mt-2 text-xs text-slate-300">Web3</p>
              </div>

              <div className="rounded-2xl border border-blue-400/20 bg-blue-400/10 p-4 text-center">
                <Laptop className="mx-auto text-blue-300" />
                <p className="mt-2 text-xs text-slate-300">Game</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;