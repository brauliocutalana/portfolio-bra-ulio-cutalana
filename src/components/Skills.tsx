import { useState } from 'react';
import { 
  Cpu, 
  Terminal, 
  Layout, 
  Palette, 
  GitBranch, 
  Accessibility, 
  Sliders, 
  Code, 
  CpuIcon,
  Sparkles,
  Zap,
  Blocks,
  Gauge
} from 'lucide-react';
import { skills } from '../data';
import { Skill } from '../types';

// Map icon names to Lucide Icon components safely
const iconMap: { [key: string]: any } = {
  ReactIcon: Cpu,
  JsIcon: Terminal,
  HtmlIcon: Layout,
  TailwindIcon: Palette,
  GitIcon: GitBranch,
  AccessibilityIcon: Accessibility,
  UiIcon: Sliders,
  CodeIcon: Code,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'frontend' | 'concept'>('all');

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'frontend', label: 'Front End' },
    { id: 'concept', label: 'Boas Práticas' },
  ];

  const filteredSkills = skills.filter(
    (skill) => activeCategory === 'all' || skill.category === activeCategory
  );

  return (
    <section id="habilidades" className="py-24 bg-[#0a192f] text-slate-200 border-t border-slate-900 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3.5 py-1.5 rounded-full font-mono text-xs font-semibold uppercase tracking-wider">
            <Zap className="h-3.5 w-3.5 text-blue-400" />
            <span>Stack de Tecnologia</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Minhas Habilidades
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full" />
          <p className="font-sans text-sm text-slate-400 max-w-xl mx-auto">
            Destaque de proficiência técnica nas principais ferramentas, frameworks e diretrizes de desenvolvimento do ecossistema front-end moderno.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`skills-tab-${cat.id}`}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`font-sans text-sm font-medium px-4.5 py-2.5 rounded-xl transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-600/15'
                  : 'bg-slate-900/50 hover:bg-slate-800 text-slate-300 border border-slate-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.iconName] || Code;
            return (
              <div
                key={skill.name}
                id={`skill-card-${index}`}
                className="bg-slate-900/50 rounded-2xl p-6 border border-slate-800/80 shadow-lg hover:shadow-xl hover:border-blue-500/30 transition-all group hover:-translate-y-1 duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Skill icon & Level badge */}
                  <div className="flex items-center justify-between">
                    <div className="bg-blue-500/10 text-blue-400 p-3 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full border border-slate-700/50">
                      {skill.level}
                    </span>
                  </div>

                  {/* Skill Name */}
                  <div className="space-y-1.5 text-left">
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="font-sans text-xs text-slate-400 leading-relaxed font-normal">
                      {skill.description}
                    </p>
                  </div>
                </div>

                {/* Level Bar Indicator */}
                <div className="mt-5 pt-4 border-t border-slate-800/60 space-y-1.5">
                  <div className="flex items-center justify-between text-[10px] font-mono font-semibold text-slate-500">
                    <span>Proficiência</span>
                    <span className="text-blue-400 font-bold">
                      {skill.level === 'Especialista' ? '95%' : skill.level === 'Avançado' ? '85%' : '75%'}
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-blue-600 h-full rounded-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-400 transition-all duration-500"
                      style={{ 
                        width: skill.level === 'Especialista' ? '95%' : skill.level === 'Avançado' ? '85%' : '75%' 
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Secondary Skills info blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-10 border-t border-slate-850">
          <div className="flex items-start space-x-3.5 text-left">
            <div className="bg-emerald-500/15 text-emerald-400 p-2.5 rounded-xl mt-0.5">
              <Blocks className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-bold text-sm text-white">Componentização Inteligente</h4>
              <p className="text-xs text-slate-400 font-sans leading-normal">
                Estruturas de componentes desacoplados, de fácil manutenção e altamente reutilizáveis seguindo padrões do React.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3.5 text-left">
            <div className="bg-violet-500/15 text-violet-400 p-2.5 rounded-xl mt-0.5">
              <Gauge className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-bold text-sm text-white">Otimização de Performance</h4>
              <p className="text-xs text-slate-400 font-sans leading-normal">
                Minimização de re-renderizações, code-splitting, lazy loading de componentes e compressão inteligente de assets.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3.5 text-left">
            <div className="bg-amber-500/15 text-amber-400 p-2.5 rounded-xl mt-0.5">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <h4 className="font-display font-bold text-sm text-white">Estética Minimalista</h4>
              <p className="text-xs text-slate-400 font-sans leading-normal">
                Interfaces focadas no conteúdo, uso consciente do espaço negativo, contrastes precisos e microinterações elegantes.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
