import { Code2, Search } from 'lucide-react';
import type { DeveloperData } from './types';

type SkillsSectionProps = {
  developerData: DeveloperData;
  darkMode: boolean;
  skillFilter: string;
  onSkillFilterChange: (value: string) => void;
};

export function SkillsSection({ developerData, darkMode, skillFilter, onSkillFilterChange }: SkillsSectionProps) {
  return (
    <section id="skills" className="space-y-8">
      {/* En-tête avec barre de recherche */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
            <Code2 className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Stack & Compétences Techniques</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Technologies et outils maîtrisés au quotidien</p>
          </div>
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Filtrer une techno..."
            value={skillFilter}
            onChange={(event) => onSkillFilterChange(event.target.value)}
            className={`w-full pl-9 pr-4 py-2 text-sm rounded-xl border outline-none transition-all ${
              darkMode
                ? 'bg-slate-900 border-slate-800 focus:border-cyan-500 text-slate-200'
                : 'bg-white border-slate-200 focus:border-cyan-500 text-slate-800'
            }`}
          />
        </div>
      </div>

      {/* Grille des catégories de compétences */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {developerData.skillCategories.map((cat, index) => {
          const CategoryIcon = cat.icon;
          const filteredList = cat.skills.filter((skill) =>
            skill.name.toLowerCase().includes(skillFilter.toLowerCase())
          );

          if (skillFilter && filteredList.length === 0) return null;

          return (
            <div
              key={`${cat.name}-${index}`}
              className={`p-6 rounded-2xl border transition-all duration-300 ${
                darkMode
                  ? 'bg-slate-900/40 border-slate-800/80 hover:border-cyan-500/40'
                  : 'bg-white border-slate-200/80 shadow-xs hover:border-cyan-500/40'
              }`}
            >
              {/* Titre de la catégorie */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <CategoryIcon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg">{cat.name}</h3>
              </div>

              {/* Liste des compétences sous forme de badges modernes (sans range/barre) */}
              <div className="flex flex-wrap gap-2.5">
                {filteredList.map((skill, sIdx) => (
                  <div
                    key={`${skill.name}-${sIdx}`}
                    className={`group px-3.5 py-2 rounded-xl border text-sm font-medium flex items-center gap-2.5 transition-all duration-200 ${
                      darkMode
                        ? 'bg-slate-800/60 border-slate-700/80 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-cyan-500/50 hover:bg-cyan-50/50'
                    }`}
                  >
                    {/* Petit point lumineux interactif */}
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}