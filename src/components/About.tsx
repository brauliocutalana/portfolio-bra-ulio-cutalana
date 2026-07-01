import { Languages, Briefcase, GraduationCap, MapPin, Mail, Sparkles, Trophy } from 'lucide-react';
import { personalInfo, experiences } from '../data';

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#0a192f] text-slate-200 border-t border-slate-900 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="h-3.5 w-3.5 text-blue-400" />
            <span>Minha Trajetória</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Sobre Mim
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        {/* Grid: Story & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Biography Column (7 cols on large screens) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-2xl text-white tracking-tight flex items-center space-x-2.5">
              <span>Olá, eu sou o Bráulio</span>
              <span className="animate-bounce">👋</span>
            </h3>
            
            <p className="font-sans text-base text-slate-300 leading-relaxed font-normal">
              {personalInfo.bio}
            </p>

            <p className="font-sans text-base text-slate-300 leading-relaxed font-normal">
              Minha paixão pela tecnologia começou ao perceber como as linhas de código podem se transformar em ferramentas visuais interativas que facilitam a vida das pessoas. Hoje, busco constantemente aperfeiçoar meus conhecimentos técnicos e me manter atualizado com as tendências do mercado de desenvolvimento web.
            </p>

            {/* Language and Location Attributes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start space-x-3 bg-slate-900/50 p-4 rounded-xl border border-slate-850">
                <div className="bg-blue-500/15 text-blue-400 p-2.5 rounded-lg">
                  <Languages className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-white">Idiomas</h4>
                  <ul className="text-xs text-slate-300 space-y-1 font-sans">
                    {personalInfo.languages.map((lang, idx) => (
                      <li key={idx} className="flex items-center space-x-1.5">
                        <span className="font-semibold text-slate-200">{lang.name}:</span>
                        <span>{lang.level}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-3 bg-slate-900/50 p-4 rounded-xl border border-slate-850">
                <div className="bg-blue-500/15 text-blue-400 p-2.5 rounded-lg">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-sm text-white">Localização</h4>
                  <p className="text-xs text-slate-300 font-sans">
                    {personalInfo.location}
                  </p>
                  <p className="text-[10px] text-blue-400 font-sans font-medium">Disponível para trabalho remoto</p>
                </div>
              </div>
            </div>

            {/* Core Values badges */}
            <div className="pt-4">
              <h4 className="font-display font-bold text-sm text-white mb-3">Valores Profissionais</h4>
              <div className="flex flex-wrap gap-2.5">
                {['Código Limpo (Clean Code)', 'Comprometimento', 'Design Responsivo', 'Foco no Usuário', 'Resolução de Problemas', 'Evolução Contínua'].map((val, idx) => (
                  <span 
                    key={idx} 
                    className="font-sans text-xs bg-slate-900/60 border border-slate-800/80 hover:bg-blue-950/40 hover:border-blue-500/30 hover:text-blue-400 px-3 py-1.5 rounded-lg font-medium text-slate-300 transition-colors cursor-pointer"
                  >
                    {val}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline / Experience Column (5 cols on large screens) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-2xl text-white tracking-tight flex items-center space-x-2.5">
              <Briefcase className="h-5.5 w-5.5 text-blue-400" />
              <span>Experiência Profissional</span>
            </h3>

            {/* Experience Timeline */}
            <div className="relative border-l border-slate-800 pl-6 ml-3 space-y-8 py-2">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative group">
                  {/* Timeline point indicator */}
                  <span className="absolute -left-[30px] top-1.5 flex items-center justify-center bg-[#0a192f] border-2 border-blue-500 rounded-full h-5 w-5 group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <span className="h-1.5 w-1.5 bg-blue-500 rounded-full group-hover:bg-white transition-all" />
                  </span>

                  {/* Experience Card */}
                  <div className="space-y-2.5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between sm:space-x-2">
                      <h4 className="font-display font-bold text-base text-white">
                        {exp.role}
                      </h4>
                      <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                        {exp.period}
                      </span>
                    </div>

                    <p className="font-display font-semibold text-xs text-blue-400">
                      {exp.company}
                    </p>

                    <p className="font-sans text-xs text-slate-300 leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    {/* Bullet Achievements */}
                    <ul className="text-xs text-slate-400 space-y-1.5 pl-4 list-disc font-sans leading-relaxed">
                      {exp.achievements.map((ach, idx) => (
                        <li key={idx} className="group-hover:text-slate-200 transition-colors">
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Education Callout */}
            <div className="mt-6 p-4 bg-slate-900/50 rounded-2xl border border-slate-850 flex items-start space-x-3.5">
              <div className="bg-indigo-500/15 text-indigo-400 p-2.5 rounded-xl">
                <GraduationCap className="h-5.5 w-5.5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-sm text-white">Cursos & Certificações</h4>
                <p className="text-xs text-slate-300 font-sans leading-normal">
                  Especialização em Desenvolvimento Web Moderno (React, Next.js, TypeScript), Algoritmos e UI/UX de alta performance.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
