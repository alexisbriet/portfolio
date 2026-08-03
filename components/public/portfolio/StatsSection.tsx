import type { DeveloperData } from './types';

type StatsSectionProps = {
  developerData: DeveloperData;
  darkMode: boolean;
};

export function StatsSection({ developerData, darkMode }: StatsSectionProps) {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {developerData.stats.map((stat, index) => (
        <div
          key={`${stat.label}-${index}`}
          className={`p-5 rounded-2xl border text-center transition-all hover:border-cyan-500/50 ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}
        >
          <div className="text-3xl sm:text-4xl font-extrabold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-1">
            {stat.value}
          </div>
          <div className={`text-xs sm:text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            {stat.label}
          </div>
        </div>
      ))}
    </section>
  );
}
