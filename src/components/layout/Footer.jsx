import { Code2, Mail, Rocket } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Journey", href: "#journey" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
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
                Wildan<span className="text-cyan-300">.dev</span>
              </p>
            </div>

            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-400">
              Personal IT Portfolio focused on Web Development, Game Development,
              Automation, Discord Bot, and Web3 Projects.
            </p>

            <div className="mt-5 flex gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-cyan-300">
                <Code2 size={19} />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-purple-300">
                <Rocket size={19} />
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-blue-300">
                <Mail size={19} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-300">
              Navigation
            </h3>

            <div className="mt-5 grid gap-3">
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
              <p className="text-sm font-semibold text-white">
                Available for collaboration
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">
                Open for web projects, game ideas, automation systems, and
                digital product experiments.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row md:text-left">
          <p className="text-sm text-slate-500">
            © 2026 Wildan Faiz.
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