import { ArrowLeft, ExternalLink, CheckCircle2, AlertCircle, Layers } from 'lucide-react';
import type { Project } from './types';
import { FaGithub } from 'react-icons/fa';

type ProjectDetailViewProps = {
  project: Project;
  darkMode: boolean;
  onBack: () => void;
};

export function ProjectDetailView({ project, darkMode, onBack }: ProjectDetailViewProps) {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Bouton de retour */}
      <button
        onClick={onBack}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition-colors border ${
          darkMode 
            ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30' 
            : 'bg-white border-slate-200 text-slate-700 hover:text-cyan-600 shadow-xs'
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        Retour aux projets
      </button>

      {/* En-tête du projet */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
            {project.category}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.techs.map((tech, index) => (
              <span key={index} className="text-xs px-2.5 py-0.5 rounded bg-slate-800/80 text-slate-300 border border-slate-700/60 font-mono">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{project.title}</h1>
        <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          {project.description}
        </p>

        {/* Liens d'action principaux */}
        <div className="flex items-center gap-4 pt-2">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 hover:opacity-90 transition-opacity"
            >
              <ExternalLink className="w-4 h-4" />
              Voir la démo live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm border transition-colors ${
                darkMode 
                  ? 'bg-slate-900 border-slate-700 text-slate-200 hover:border-slate-600' 
                  : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-50'
              }`}
            >
              <FaGithub className="w-4 h-4" />
              Code Source GitHub
            </a>
          )}
        </div>
      </div>

      {/* Image principale / Bannière */}
      <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl h-72 sm:h-96">
        <img 
          src={project.image} 
          alt={project.title} 
          width={1200}
          height={675}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
      </div>

      {/* Grille de contenu détaillée */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        {/* Colonne principale (Description longue & Fonctionnalités) */}
        <div className="lg:col-span-2 space-y-8">
          <div className={`p-6 sm:p-8 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-xs'}`}>
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" />
              À propos du projet
            </h2>
            <div className={`prose max-w-none space-y-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <p>{project.longDescription || project.description}</p>
            </div>
          </div>

          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className={`p-6 sm:p-8 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-xs'}`}>
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                Fonctionnalités clés
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index} className={`flex items-start gap-2.5 text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Colonne secondaire (Défis techniques / Infos rapides) */}
        <div className="space-y-6">
          {project.challenges && project.challenges.length > 0 && (
            <div className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-xs'}`}>
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-amber-400" />
                Défis & Solutions
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    • {challenge}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}