import { CheckCircle2, Copy, Download, Mail, MapPin } from 'lucide-react';

import type { DeveloperData } from './types';
import { redirect } from 'next/navigation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type HeroSectionProps = {
  developerData: DeveloperData;
  darkMode: boolean;
  copiedField: string | null;
  onCopy: (text: string, field: string) => void;
};

export function HeroSection({ developerData, darkMode, copiedField, onCopy }: HeroSectionProps) {

  function downloadCV() {
    window.open("https://drive.google.com/file/d/1wgfxGdjUm1S6PTuO2X071W9cqmWjAnLc/view?usp=sharing", "_blank", "noopener,noreferrer");
  }

  return (
    <section id="about" className="relative pt-6">
      <div className={`p-8 rounded-3xl border relative overflow-hidden transition-all shadow-xl ${darkMode ? 'bg-linear-to-br from-slate-900 via-slate-900/90 to-slate-950 border-slate-800 shadow-cyan-950/10' : 'bg-white border-slate-200 shadow-slate-200/50'}`}>
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex-1 space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              {developerData.availability}
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">{developerData.name}</h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-cyan-400">{developerData.title}</h2>

            <p className={`max-w-2xl text-base leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {developerData.bio}
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{developerData.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-cyan-400" />
                <button
                  onClick={() => onCopy(developerData.email, 'email')}
                  className="hover:text-cyan-400 transition-colors flex items-center gap-1"
                >
                  {developerData.email}
                  {copiedField === 'email' ? <CheckCircle2 className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3 h-3 opacity-60" />}
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-linear-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Me contacter
              </a>

              <a
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  downloadCV();
                }}
                className={`px-5 py-3 rounded-xl border text-sm font-semibold transition-all flex items-center gap-2 ${darkMode ? 'border-slate-700 bg-slate-800/60 hover:bg-slate-800 hover:border-slate-600 text-slate-200' : 'border-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-800'}`}
              >
                <Download className="w-4 h-4 text-cyan-400" />
                Télécharger CV
              </a>

              <div className="flex items-center gap-2 ml-2">
                <a href={developerData.github} target="_blank" rel="noreferrer" className="p-3 rounded-xl border border-slate-700/60 hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                  <FaGithub className="w-5 h-5" />
                </a>
                <a href={developerData.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-xl border border-slate-700/60 hover:border-cyan-500 hover:text-cyan-400 transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-4 border-cyan-500/30 shadow-2xl relative group">
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQFdiSmZASUD5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1714480524826?e=1787184000&v=beta&t=4pX2qHkwFjzXHvSXz4nm8d_4Wesg7TCYZvVijIi7dQo"
                alt="Photo de profil"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 right-3 text-center">
                <span className="text-xs font-mono bg-slate-900/90 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/30">
                  &lt;FullStack /&gt;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
