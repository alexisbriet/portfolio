import { UserCheck } from 'lucide-react';

import type { DeveloperData } from './types';

type TestimonialsSectionProps = {
  developerData: DeveloperData;
  darkMode: boolean;
};

export function TestimonialsSection({ developerData, darkMode }: TestimonialsSectionProps) {
  return (
    <section className="space-y-6">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
          <UserCheck className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Recommandations</h2>
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Ce que disent mes pairs et collaborateurs</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {developerData.testimonials.map((testimonial, index) => (
          <div key={`${testimonial.author}-${index}`} className={`p-6 rounded-2xl border italic relative ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
            <p className={`text-sm leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
              &quot;{testimonial.quote}&quot;
            </p>
            <div className="not-italic">
              <h4 className="font-bold text-sm text-cyan-400">{testimonial.author}</h4>
              <p className="text-xs text-slate-400">{testimonial.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
