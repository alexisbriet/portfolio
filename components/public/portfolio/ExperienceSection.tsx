import { Building, Calendar, CheckCircle2, ChevronDown, ChevronUp, MapPin } from 'lucide-react';

import type { DeveloperData } from './types';

type ExperienceSectionProps = {
  developerData: DeveloperData;
  darkMode: boolean;
  expandedExp: string | null;
  onToggle: (id: string) => void;
};

export function ExperienceSection({ developerData, darkMode, expandedExp, onToggle }: ExperienceSectionProps) {
  return (
    <section id="experiences" className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
            <Building className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Expériences Professionnelles</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Mon parcours en entreprise et projets majeurs</p>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {developerData.experiences.map((exp) => {
          console.log(exp)
          const isExpanded = expandedExp === exp.id;

          return (
            <div
              key={exp.id}
              className={`rounded-2xl border transition-all overflow-hidden ${darkMode ? 'bg-slate-900/60 border-slate-800 hover:border-slate-700' : 'bg-white border-slate-200 shadow-sm'}`}
            >
              <div onClick={() => onToggle(exp.id)} className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg font-bold text-cyan-400">{exp.role}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{exp.type}</span>
                  </div>

                  <div className="flex items-center gap-4 text-sm font-medium opacity-90">
                    <span className="flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-4">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-cyan-400 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-800/40">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </div>
                  {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                </div>
              </div>

              {isExpanded && (
                <div className={`px-6 pb-6 pt-2 border-t space-y-4 ${darkMode ? 'border-slate-800/80 bg-slate-950/40' : 'border-slate-100 bg-slate-50/50'}`}>
                  <p className={`text-sm ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{exp.description}</p>

                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Réalisations clés :</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((item, index) => (
                        <li key={`${item}-${index}`} className="flex items-start gap-2.5 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                          <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.skills.map((skill, index) => (
                      <span
                        key={`${skill}-${index}`}
                        className={`text-xs px-2.5 py-1 rounded-md font-mono ${darkMode ? 'bg-slate-800 text-cyan-300 border border-slate-700' : 'bg-slate-100 text-slate-800 border border-slate-200'}`}
                      >
                        #{skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
