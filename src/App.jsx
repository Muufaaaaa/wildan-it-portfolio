import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/ui/ScrollToTop";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Journey from "./components/sections/Journey";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-cyan-500/15 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[460px] w-[460px] rounded-full bg-purple-500/15 blur-[140px]" />
        <div className="absolute bottom-1/3 left-0 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[130px]" />
      </div>

      <div className="relative z-10">
        <Navbar />

        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />

        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}

export default App;