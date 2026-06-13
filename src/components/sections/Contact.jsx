import { useState } from "react";
import { motion } from "motion/react";
import { Code2, Laptop, Mail, Rocket } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";

const contactCards = [
  {
    title: "Email",
    value: "danfaiz09@gmail.com",
    href: "mailto:danfaiz09@gmail.com",
    icon: Mail,
  },
  {
    title: "Project Discussion",
    value: "Open for collaboration",
    href: "#projects",
    icon: Code2,
  },
  {
    title: "Focus Area",
    value: "Web, Game, Automation, Web3",
    href: "#skills",
    icon: Rocket,
  },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Muufaaaaa",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/wildan-faiz-782286286/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/muufa_5078/",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6289652173426",
  },
];

function encodeFormData(data) {
  return new URLSearchParams(data).toString();
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    "bot-field": "",
  });

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: "", message: "" });

    const payload = {
      "form-name": "contact",
      ...formData,
    };

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodeFormData(payload),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormStatus({
        type: "success",
        message: "Pesan berhasil dikirim. Terima kasih sudah menghubungi saya!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        "bot-field": "",
      });
    } catch (error) {
      setFormStatus({
        type: "error",
        message:
          "Pesan belum bisa dikirim. Jika masih gagal, hubungi langsung lewat email.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-[130px]" />
      <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Contact"
          title="Let's Build Something Together"
          description="Terbuka untuk kolaborasi project, pengembangan website, game, automation system, bot Discord, dan eksperimen teknologi digital."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="space-y-6"
          >
            <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 via-blue-500/10 to-purple-500/10 p-8 backdrop-blur-xl">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-300">
                <Laptop size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-black text-white md:text-3xl">
                Ready to collaborate?
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                Punya ide project, tugas kelompok, website, game, bot, atau
                sistem otomasi? Kirim pesan lewat form ini atau hubungi saya
                langsung melalui email.
              </p>
            </div>

            <div className="grid gap-4">
              {contactCards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.a
                    key={card.title}
                    href={card.href}
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, delay: index * 0.08 }}
                    className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/[0.08]"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300 transition group-hover:scale-110">
                      <Icon size={24} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-cyan-300">
                        {card.title}
                      </p>
                      <p className="mt-1 text-sm text-slate-300">
                        {card.value}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Social Links
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href === "#" ? "_self" : "_blank"}
                    rel="noreferrer"
                    className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <p className="mt-4 text-xs leading-relaxed text-slate-500">
                Ganti tanda # di socialLinks dengan link asli GitHub, LinkedIn,
                Instagram, atau WhatsApp lu.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
            className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl md:p-8"
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />

              <p className="hidden">
                <label>
                  Jangan isi field ini:
                  <input
                    name="bot-field"
                    value={formData["bot-field"]}
                    onChange={handleChange}
                  />
                </label>
              </p>

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Nama Lengkap
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama lu"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#050816]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-[#050816]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="nama@email.com"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#050816]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-[#050816]"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Subjek
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Contoh: Diskusi project website"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#050816]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-[#050816]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-300"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan lu di sini..."
                  required
                  className="w-full resize-none rounded-2xl border border-white/10 bg-[#050816]/70 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-300/50 focus:bg-[#050816]"
                ></textarea>
              </div>

              {formStatus.message && (
                <div
                  className={`rounded-2xl border px-4 py-3 text-sm ${
                    formStatus.type === "success"
                      ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
                      : "border-red-300/30 bg-red-300/10 text-red-200"
                  }`}
                >
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;