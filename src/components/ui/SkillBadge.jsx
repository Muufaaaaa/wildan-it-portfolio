function SkillBadge({ skill }) {
  return (
    <span className="group relative overflow-hidden rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 transition hover:border-cyan-300/50 hover:bg-cyan-300/20">
      <span className="relative z-10">{skill}</span>
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
    </span>
  );
}

export default SkillBadge;