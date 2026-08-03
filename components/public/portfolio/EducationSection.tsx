import { Award, GraduationCap, Star } from 'lucide-react';

import type { DeveloperData } from './types';

type EducationSectionProps = {
  developerData: DeveloperData;
  darkMode: boolean;
};

export function EducationSection({ developerData, darkMode }: EducationSectionProps) {
  return (
    <section id="education" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Formations & Diplômes</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Parcours académique</p>
          </div>
        </div>

        <div className="space-y-4">
          {developerData.education.map((education, index) => (
            <div key={`${education.degree}-${index}`} className={`p-6 rounded-2xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <h3 className="font-bold text-lg text-cyan-400">{education.degree}</h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700">{education.year}</span>
              </div>
              <p className="text-sm font-semibold opacity-90 mb-2">{education.school}</p>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{education.details}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Certifications</h2>
            <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Validation des acquis</p>
          </div>
        </div>

        <div className="space-y-4">
          {developerData.certifications.map((certification, index) => (
            <div key={`${certification.name}-${index}`} className={`p-4 rounded-xl border flex items-start gap-3 ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 shrink-0">
                <Star className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold">{certification.name}</h4>
                <p className="text-xs text-slate-400">{certification.issuer} • {certification.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
