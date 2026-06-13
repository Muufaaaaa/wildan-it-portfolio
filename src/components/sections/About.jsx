import { motion } from "motion/react";
import { Code2, Laptop, Rocket } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const focusAreas = [
  {
    title: "Web Development",
    description:
      "Membangun aplikasi web modern, responsif, dan fungsional menggunakan React, Laravel, PHP, MySQL, dan Tailwind CSS.",
    icon: Code2,
  },
  {
    title: "Game Development",
    description:
      "Mengembangkan pengalaman game edukatif di Roblox Studio melalui sistem NPC, quest, HUD, dan interaksi pemain.",
    icon: Laptop,
  },
  {
    title: "Automation & Web3",
    description:
      "Mengeksplorasi workflow automation, Discord bot, smart contract, IPFS, dan integrasi wallet untuk sistem digital interaktif.",
    icon: Rocket,
  },
];

const profileFacts = [
  {
    label: "Role",
    value: "Informatics Engineering Student",
  },
  {
    label: "Focus",
    value: "Web, Game, Automation, Web3",
  },
  {
    label: "Current Level",
    value: "Semester 4",
  },
  {
    label: "Location",
    value: "Indonesia",
  },
];

function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="absolute left-0 top-1/3 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About Me"
          title="From Student Projects to Real Digital Products"
          description="Saya tidak hanya belajar teori informatika, tapi juga membangun project nyata yang menggabungkan web development, game development, automation, dan Web3."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl"
          >
            <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-blue-500/10 to-purple-500/15 p-6">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-cyan-300/20 blur-3xl" />

              <div className="relative flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-300/30 bg-[#050816]/80 text-2xl font-black text-cyan-300 shadow-[0_0_45px_rgba(34,211,238,0.25)]">
                  WF
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                    Portfolio Owner
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-white">
                    Wildan Faiz
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    IT Project Builder
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {profileFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-2xl border border-white/10 bg-[#0b1020]/80 p-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                    {fact.label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-200">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl md:p-10">
              <p className="text-lg leading-relaxed text-slate-300">
                Saya adalah mahasiswa Teknik Informatika yang berfokus pada
                pengembangan sistem digital yang praktis dan bisa digunakan.
                Project yang saya bangun mencakup aplikasi e-commerce berbasis
                Laravel, platform sertifikat digital berbasis Web3, game
                edukasi Roblox, workflow automation menggunakan n8n, dan
                Discord bot untuk manajemen aktivitas akademik.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Bagi saya, project IT yang bagus bukan hanya soal tampilan yang
                menarik, tetapi juga soal struktur sistem, alur penggunaan,
                integrasi data, dan kemampuan menyelesaikan masalah nyata secara
                efisien.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
                <p className="text-3xl font-black text-white">5</p>
                <p className="mt-1 text-sm text-cyan-100">Project Built</p>
              </div>

              <div className="rounded-3xl border border-purple-300/20 bg-purple-300/10 p-5">
                <p className="text-3xl font-black text-white">5</p>
                <p className="mt-1 text-sm text-purple-100">Tech Areas</p>
              </div>

              <div className="rounded-3xl border border-blue-300/20 bg-blue-300/10 p-5">
                <p className="text-3xl font-black text-white">4th</p>
                <p className="mt-1 text-sm text-blue-100">Semester</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 transition group-hover:scale-110">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white">
                  {area.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {area.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default About;