import { useState, useEffect } from 'react';
import { Menu, X, Code, Terminal } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="header-nav"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a192f]/95 backdrop-blur-md shadow-lg border-b border-slate-800/60 py-3'
          : 'bg-[#0a192f]/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <div className="bg-gradient-to-tr from-blue-600 to-cyan-400 p-2 rounded-lg text-white shadow-md group-hover:scale-105 transition-transform">
              <Code className="h-5 w-5" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-white">
              Bráulio<span className="text-blue-400 font-normal">.Cutalana</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              id="nav-about"
              onClick={() => scrollToSection('sobre')}
              className="text-slate-300 hover:text-white font-sans text-sm font-medium transition-colors cursor-pointer"
            >
              Sobre Mim
            </button>
            <button
              id="nav-skills"
              onClick={() => scrollToSection('habilidades')}
              className="text-slate-300 hover:text-white font-sans text-sm font-medium transition-colors cursor-pointer"
            >
              Habilidades
            </button>
            <button
              id="nav-contact"
              onClick={() => scrollToSection('contato')}
              className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans text-sm font-medium transition-all shadow-md hover:shadow-blue-500/25 active:scale-95 cursor-pointer"
            >
              Fale Comigo
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-400 hover:text-white p-2 focus:outline-none cursor-pointer"
              aria-label="Abrir menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0d1e36] border-b border-slate-800/80 px-4 pt-2 pb-6 space-y-3 shadow-xl transition-all animate-in fade-in slide-in-from-top-5 duration-200">
          <button
            id="mobile-nav-about"
            onClick={() => scrollToSection('sobre')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-sans text-base font-medium"
          >
            Sobre Mim
          </button>
          <button
            id="mobile-nav-skills"
            onClick={() => scrollToSection('habilidades')}
            className="block w-full text-left px-3 py-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 font-sans text-base font-medium"
          >
            Habilidades
          </button>
          <div className="pt-2">
            <button
              id="mobile-nav-contact"
              onClick={() => scrollToSection('contato')}
              className="block w-full text-center px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-sans text-base font-medium shadow-lg"
            >
              Fale Comigo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
