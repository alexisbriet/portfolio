import { ExternalLink, Sparkles } from 'lucide-react';

import type { DeveloperData } from './types';

type ProjectsSectionProps = {
  developerData: DeveloperData;
  darkMode: boolean;
  projectCategory: string;
  onCategoryChange: (value: string) => void;
  filteredProjects: typeof developerData.projects;
};

export function ProjectsSection({ developerData, darkMode, projectCategory, onCategoryChange, filteredProjects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Projets Réalisés</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Une sélection de mes travaux personnels et professionnels</p>
          </div>
        </div>

        <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-900/60 border border-slate-800 self-start sm:self-auto">
          {['Tous', 'Web App', 'SaaS', 'DevOps'].map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${projectCategory === cat ? 'bg-linear-to-r from-cyan-500 to-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-slate-200'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/50' : 'bg-white border-slate-200 shadow-sm'}`}
          >
            <div className="relative h-48 overflow-hidden">
              <img src={project.image ? project.image : 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80'} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <span className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-900/80 text-cyan-300 border border-cyan-500/30">
                {project.category}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className={`text-sm line-clamp-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.techs.map((tech, index) => (
                  <span key={`${tech}-${index}`} className="text-xs px-2 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors">
                  Code Source
                </a>
                <a href={project.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:underline">
                  <ExternalLink className="w-4 h-4" />
                  Démo Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
