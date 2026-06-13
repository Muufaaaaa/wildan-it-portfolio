import { motion } from "motion/react";
import { Code2, Rocket, Laptop } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import { journey } from "../../data/journey";

const journeyIcons = [Code2, Code2, Rocket, Rocket, Laptop, Rocket];

function Journey() {
  return (
    <section id="journey" className="relative px-6 py-24">
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute bottom-20 left-0 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Journey"
          title="Learning & Project Timeline"
          description="Perjalanan belajar dan pengembangan project dari dasar pemrograman sampai membangun sistem digital yang lebih kompleks."
        />

        <div className="mb-12 grid gap-4 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-center backdrop-blur-xl"
          >
            <p className="text-3xl font-black text-white">2024</p>
            <p className="mt-2 text-sm text-slate-400">Started Journey</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-6 text-center backdrop-blur-xl"
          >
            <p className="text-3xl font-black text-white">5</p>
            <p className="mt-2 text-sm text-cyan-100">Projects Built</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="rounded-3xl border border-purple-300/20 bg-purple-300/10 p-6 text-center backdrop-blur-xl"
          >
            <p className="text-3xl font-black text-white">2026</p>
            <p className="mt-2 text-sm text-purple-100">Active Builder</p>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/40 to-purple-300/0 md:left-1/2" />

          <div className="space-y-8">
            {journey.map((item, index) => {
              const Icon = journeyIcons[index] || Code2;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.6, delay: index * 0.08 }}
                  className={`relative grid gap-6 pl-14 md:grid-cols-2 md:pl-0 ${
                    isEven ? "" : "md:[&>article]:col-start-2"
                  }`}
                >
                  <div className="absolute left-0 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-300/30 bg-[#050816] text-cyan-300 shadow-[0_0_35px_rgba(34,211,238,0.25)] md:left-1/2 md:-translate-x-1/2">
                    <Icon size={19} />
                  </div>

                  <article className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]">
                    <div className="absolute right-0 top-0 h-32 w-32 translate-x-10 -translate-y-10 rounded-full bg-cyan-300/10 blur-3xl transition group-hover:bg-cyan-300/20" />

                    <div className="relative">
                      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                        <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
                          {item.year}
                        </span>

                        <span className="rounded-full border border-white/10 bg-[#050816]/70 px-3 py-1 text-xs font-medium text-slate-400">
                          Milestone 0{index + 1}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white md:text-2xl">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-sm leading-relaxed text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mt-12 rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 via-blue-500/10 to-purple-500/10 p-8 text-center backdrop-blur-xl md:p-10"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Current Direction
          </p>

          <h3 className="mt-4 text-2xl font-black text-white md:text-3xl">
            Growing as a multi-domain IT builder
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-300">
            Fokus perkembangan saya saat ini adalah memperkuat kemampuan
            membangun project end-to-end: mulai dari ide, UI/UX, frontend,
            backend, database, automation, deployment, sampai integrasi sistem
            yang bisa digunakan secara nyata.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Journey;