import { motion } from "motion/react";
import { Code2, Laptop, Rocket } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import SkillBadge from "../ui/SkillBadge";
import { skillGroups } from "../../data/skills";

const skillIcons = {
  "Frontend Development": Code2,
  "Backend Development": Code2,
  "Game Development": Laptop,
  Automation: Rocket,
  Web3: Rocket,
  "Tools & Workflow": Laptop,
};

const skillStats = [
  {
    value: "6",
    label: "Skill Categories",
  },
  {
    value: "30+",
    label: "Tools & Technologies",
  },
  {
    value: "5",
    label: "Project Domains",
  },
];

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="absolute left-1/2 top-1/4 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Tech Stack"
          title="Skills & Technologies"
          description="Kumpulan teknologi yang saya gunakan untuk membangun web app, game, automation system, Discord bot, dan eksperimen Web3."
        />

        <div className="mb-10 grid gap-4 md:grid-cols-3">
          {skillStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur-xl"
            >
              <p className="text-3xl font-black text-white md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = skillIcons[group.title] || Code2;

            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-cyan-300/20" />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 transition group-hover:scale-110 group-hover:border-cyan-300/40">
                      <Icon size={26} />
                    </div>

                    <span className="rounded-full border border-white/10 bg-[#050816]/80 px-3 py-1 text-xs font-medium text-slate-400">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white">
                    {group.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {group.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mt-10 rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 via-blue-500/10 to-purple-500/10 p-8 backdrop-blur-xl md:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Developer Direction
              </p>

              <h3 className="mt-4 text-2xl font-black text-white md:text-3xl">
                Building across multiple IT domains
              </h3>
            </div>

            <p className="text-base leading-relaxed text-slate-300">
              Fokus skill saya tidak hanya di satu area. Saya membangun fondasi
              dari frontend, backend, database, automation, game development,
              sampai Web3. Pendekatan ini membantu saya memahami project secara
              lebih menyeluruh: mulai dari UI, logic, data, integrasi, sampai
              pengalaman pengguna.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;