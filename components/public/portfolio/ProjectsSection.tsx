import { ExternalLink, Sparkles, ArrowRight, Code2 } from 'lucide-react';
import Link from 'next/link';
import type { DeveloperData, ProjectItem } from './types';

type ProjectsSectionProps = {
  developerData: DeveloperData;
  darkMode: boolean;
  projectCategory: string;
  onCategoryChange: (value: string) => void;
  filteredProjects: ProjectItem[];
  // Callback optionnel si vous n'utilisez pas de router React/Next
  onSelectProjectSlug?: (slug: string) => void;
};

export function ProjectsSection({
  darkMode,
  projectCategory,
  onCategoryChange,
  filteredProjects,
  onSelectProjectSlug,
}: ProjectsSectionProps) {
  return (
    <section id="projects" className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
            <Sparkles className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Projets Réalisés</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              Une sélection de mes travaux personnels et professionnels
            </p>
          </div>
        </div>

        <div className={`flex items-center gap-2 p-1 rounded-xl border self-start sm:self-auto ${darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
          {['Tous', 'Web App', 'SaaS', 'DevOps'].map((cat) => (
            <button
              key={cat}
              onClick={() => onCategoryChange(cat)}
              aria-pressed={projectCategory === cat}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                projectCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-cyan-700'
              }`}
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
            className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
              darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/50' : 'bg-white border-slate-200 shadow-sm'
            }`}
          >
            <div className="relative h-48 overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  width={800}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div aria-hidden="true" className="flex h-full items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-950 text-cyan-300">
                  <Code2 className="h-12 w-12 opacity-70" strokeWidth={1.3} />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <span className="absolute right-3 top-3 rounded-full border border-cyan-500/30 bg-slate-900/90 px-2.5 py-1 text-xs font-semibold text-cyan-200">
                {project.category}
              </span>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
              <p className={`text-sm line-clamp-2 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>{project.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {project.techs.map((tech, index) => (
                  <span
                    key={`${tech}-${index}`}
                    className={`text-xs px-2 py-0.5 rounded border font-mono ${darkMode ? 'bg-slate-800/80 text-slate-300 border-slate-700/60' : 'bg-slate-100 text-slate-700 border-slate-200'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Pied de carte : Liens propres & uniformisés */}
              <div className={`pt-4 flex items-center justify-between border-t ${darkMode ? 'border-slate-800/40' : 'border-slate-100'}`}>
                {/* Liens externes (Code & Démo) */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex items-center gap-1.5 text-xs font-medium transition-colors ${
                        darkMode ? 'text-slate-400 hover:text-slate-200' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5" />
                      Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Démo
                    </a>
                  )}
                </div>

                {/* Lien ou Bouton vers la page détaillée du projet */}
                {project.slug && (
                  onSelectProjectSlug ? (
                    <button
                      onClick={() => onSelectProjectSlug(project.slug)}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        darkMode 
                          ? 'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20' 
                          : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200'
                      }`}
                    >
                      Détails <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <Link
                      href={`/project/${project.slug}`}
                      prefetch={false}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        darkMode 
                          ? 'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/20' 
                          : 'bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border border-cyan-200'
                      }`}
                    >
                      Détails <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}