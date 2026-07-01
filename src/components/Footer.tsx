import { Github, Linkedin, Mail, ArrowUp, Code, Heart } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#0a192f] border-t border-slate-900 py-12 text-slate-400 font-sans text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900/60">
          
          {/* Logo brand */}
          <div className="flex items-center space-x-2.5">
            <div className="bg-blue-600/20 text-blue-400 p-2 rounded-lg border border-blue-500/10">
              <Code className="h-4.5 w-4.5" />
            </div>
            <span className="font-display font-bold text-lg tracking-tight text-white">
              Bráulio<span className="text-blue-400 font-normal">.Cutalana</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-5">
            <a
              id="footer-github-link"
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              title="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              id="footer-linkedin-link"
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              id="footer-email-link"
              href={`mailto:${personalInfo.email}`}
              className="hover:text-cyan-400 transition-colors"
              title="Email Profissional"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            id="footer-scroll-top-btn"
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-xs hover:text-white transition-colors uppercase font-mono tracking-wider bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 px-3.5 py-2 rounded-xl cursor-pointer"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

        {/* Lower footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Bráulio C. Cutalana. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-1">
            <span>Desenvolvido com</span>
            <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
            <span>em React e Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
