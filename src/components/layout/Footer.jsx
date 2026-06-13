import { Code2, Mail, Rocket } from "lucide-react";
import { profile } from "../../data/profile";

const footerLinks = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Projects",
    href: "#projects",
  },
  {
    label: "Journey",
    href: "#journey",
  },
  {
    label: "Achievements",
    href: "#achievements",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  const [brandName, brandSuffix] = profile.brand.split(".");

  return (
    <footer className="border-t border-white/10 bg-[#050816] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-sm font-black text-cyan-300">
                WF
              </div>

              <p className="text-xl font-black text-white">
                {brandName}

                {brandSuffix && (
                  <span className="text-cyan-300">.{brandSuffix}</span>
                )}
              </p>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Personal IT Portfolio focused on Web Development, Game
              Development, Automation, Discord Bot, and Web3 projects.
            </p>

            <div className="mt-5 flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300">
                <Code2 size={19} />
              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-300">
                <Rocket size={19} />
              </div>

              <a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300 transition hover:border-cyan-300/40 hover:bg-white/[0.08]"
              >
                <Mail size={19} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Navigation
            </h3>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-slate-400 transition hover:text-cyan-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Status
            </h3>

            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />

                <p className="text-sm font-semibold text-white">
                  {profile.availability}
                </p>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-slate-400">
                Open for web projects, game ideas, automation systems, Discord
                bots, and digital product experiments.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500">
            © {currentYear} {profile.name}. Built with React, Tailwind CSS, and
            Motion.
          </p>

          <p className="text-sm text-slate-500">
            Designed as a modern interactive IT portfolio.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;