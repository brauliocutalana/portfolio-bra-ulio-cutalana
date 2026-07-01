import { ArrowRight, Github, Linkedin, Mail, Award, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-28 pb-16 flex items-center bg-[#0a192f] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.05),rgba(29,78,216,0.18))] text-white overflow-hidden"
    >
      {/* Decorative grid pattern background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />

      {/* Ambient glowing blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/30 px-3.5 py-1.5 rounded-full text-blue-400 font-mono text-xs w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponível para novos projetos</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                {personalInfo.name}
              </h1>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-blue-400 tracking-tight">
                {personalInfo.title}
              </h2>
            </div>

            {/* Tagline / Subtitle */}
            <p className="font-sans text-lg sm:text-xl text-slate-300 font-light max-w-xl leading-relaxed">
              {personalInfo.subtitle}
            </p>

            {/* Quick Pitch points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center space-x-2.5 text-slate-300 text-sm">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />
                <span>Interfaces fluidas com React.js</span>
              </div>
              <div className="flex items-center space-x-2.5 text-slate-300 text-sm">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />
                <span>Português Nativo & Inglês Fluente</span>
              </div>
              <div className="flex items-center space-x-2.5 text-slate-300 text-sm">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />
                <span>Código Semântico e Acessível</span>
              </div>
              <div className="flex items-center space-x-2.5 text-slate-300 text-sm">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-400 flex-shrink-0" />
                <span>Integração de APIs e Desempenho</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                id="hero-contact"
                onClick={() => scrollToSection('contato')}
                className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 font-sans font-semibold text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 transition-all text-center flex items-center justify-center space-x-2 group active:scale-98 cursor-pointer"
              >
                <span>Entrar em Contato</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                id="hero-about"
                onClick={() => scrollToSection('sobre')}
                className="px-6 py-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 font-sans font-semibold text-slate-200 hover:text-white transition-all text-center flex items-center justify-center space-x-2 active:scale-98 cursor-pointer"
              >
                <span>Saber Mais</span>
              </button>
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-4 pt-4 text-slate-400">
              <a
                id="hero-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white hover:scale-110 transition-all p-1.5 hover:bg-slate-800 rounded-lg"
                title="GitHub"
              >
                <Github className="h-5.5 w-5.5" />
              </a>
              <a
                id="hero-linkedin-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-400 hover:scale-110 transition-all p-1.5 hover:bg-slate-800 rounded-lg"
                title="LinkedIn"
              >
                <Linkedin className="h-5.5 w-5.5" />
              </a>
              <a
                id="hero-email-link"
                href={`mailto:${personalInfo.email}`}
                className="hover:text-cyan-400 hover:scale-110 transition-all p-1.5 hover:bg-slate-800 rounded-lg"
                title="Email Profissional"
              >
                <Mail className="h-5.5 w-5.5" />
              </a>
            </div>
          </div>

          {/* Profile Photo Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] group">
              <img
                src={personalInfo.photo}
                alt="Bráulio C. Cutalana - Desenvolvedor Front End"
                referrerPolicy="no-referrer"
                className="w-full h-auto rounded-3xl shadow-2xl transform group-hover:scale-[1.01] transition-transform duration-500 block"
              />
            </div>
          </div>

        </div>

        {/* Dynamic Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 border-t border-slate-800/80 mt-20 pt-10">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col space-y-1 text-center md:text-left bg-slate-900/50 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-xs shadow-xl">
              <span className="font-display font-extrabold text-3xl sm:text-4xl text-blue-400 tracking-tight">
                {stat.value}
              </span>
              <span className="font-sans text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
