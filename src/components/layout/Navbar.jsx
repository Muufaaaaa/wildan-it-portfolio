import { useEffect, useState } from "react";
import { Download, Menu, X } from "lucide-react";

import { profile } from "../../data/profile";

const navLinks = [
  {
    label: "Home",
    href: "#home",
  },
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

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition ${
        isScrolled
          ? "border-white/10 bg-[#050816]/85 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
          : "border-transparent bg-[#050816]/55 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-400/10 text-sm font-black text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.2)] transition group-hover:scale-105">
            WF
          </div>

          <span className="text-lg font-bold tracking-tight text-white">
            Wildan<span className="text-cyan-300">.dev</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group relative text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link.label}

              <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-cyan-300 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Download CV desktop */}
        {profile.cvUrl && (
          <a
            href={profile.cvUrl}
            download="Wildan-Faiz-CV.pdf"
            aria-label="Download CV Wildan Faiz"
            className="hidden items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-cyan-400 hover:text-slate-950 lg:inline-flex"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
        )}

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setIsOpen((currentValue) => !currentValue)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-white transition hover:bg-white/10 lg:hidden"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#050816]/95 px-6 py-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex max-h-[70vh] flex-col gap-3 overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/[0.08] hover:text-white"
              >
                {link.label}
              </a>
            ))}

            {/* Download CV mobile */}
            {profile.cvUrl && (
              <a
                href={profile.cvUrl}
                download="Wildan-Faiz-CV.pdf"
                onClick={closeMenu}
                aria-label="Download CV Wildan Faiz"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                <Download size={17} aria-hidden="true" />
                Download CV
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;