import { Code2, Search } from 'lucide-react';

import type { ComponentType } from 'react';

import type { DeveloperData } from './types';

type SkillsSectionProps = {
  developerData: DeveloperData;
  darkMode: boolean;
  skillFilter: string;
  onSkillFilterChange: (value: string) => void;
};

export function SkillsSection({ developerData, darkMode, skillFilter, onSkillFilterChange }: SkillsSectionProps) {
  return (
    <section id="skills" className="space-y-6">
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
            className={`w-full pl-9 pr-4 py-2 text-sm rounded-xl border outline-none transition-all ${darkMode ? 'bg-slate-900 border-slate-800 focus:border-cyan-500 text-slate-200' : 'bg-white border-slate-200 focus:border-cyan-500 text-slate-800'}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {developerData.skillCategories.map((cat, index) => {
          const CategoryIcon = cat.icon as ComponentType<{ className?: string }>;
          const filteredList = cat.skills.filter((skill) => skill.name.toLowerCase().includes(skillFilter.toLowerCase()));

          if (skillFilter && filteredList.length === 0) return null;

          return (
            <div
              key={`${cat.name}-${index}`}
              className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <CategoryIcon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-lg">{cat.name}</h3>
              </div>

              <div className="space-y-4">
                {filteredList.map((skill, sIdx) => (
                  <div key={`${skill.name}-${sIdx}`} className="space-y-1.5">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span className="text-cyan-400 font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className={`h-2 w-full rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div className="h-full bg-linear-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-1000" style={{ width: `${skill.level}%` }} />
                    </div>
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
