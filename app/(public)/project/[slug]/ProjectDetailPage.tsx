'use client';

import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import type { ProjectItem } from '@/components/public/portfolio/types';
import { useTheme } from '@/components/public/layout/theme-context';

type ProjectDetailPageProps = {
  project: ProjectItem;
};

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const { darkMode } = useTheme();
  const articleParagraphs = (project.content || project.description)
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <article className="animate-fade-in">
        <Link
          href="/#projects"
          className={`mb-10 inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
            darkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-cyan-600'
          }`}
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux projets
        </Link>

        <header className="mx-auto max-w-3xl space-y-5">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
            {project.category}
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className={`text-lg leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {project.description}
          </p>

          {project.techs.length > 0 && (
            <ul className="flex flex-wrap gap-2 pt-1" aria-label="Technologies utilisées">
              {project.techs.map((technology, index) => (
                <li
                  key={`${technology}-${index}`}
                  className={`rounded-md border px-2.5 py-1 font-mono text-xs ${
                    darkMode
                      ? 'border-slate-700 bg-slate-900 text-slate-300'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  {technology}
                </li>
              ))}
            </ul>
          )}
        </header>

        {project.image && (
          <figure className={`my-10 overflow-hidden rounded-2xl border shadow-2xl ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
            <img src={project.image} alt={project.title} width={1200} height={675} fetchPriority="high" decoding="async" className="aspect-video max-h-[34rem] w-full object-cover" />
          </figure>
        )}

        <div className="mx-auto max-w-3xl">
          <div
            className={`space-y-6 text-base leading-8 sm:text-lg ${
              darkMode ? 'text-slate-300' : 'text-slate-700'
            }`}
          >
            {articleParagraphs.map((paragraph, index) => (
              <p key={`${index}-${paragraph.slice(0, 24)}`} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>

          {(project.demo || project.github) && (
            <footer className={`mt-12 flex flex-wrap gap-3 border-t pt-6 ${
              darkMode ? 'border-slate-800' : 'border-slate-200'
            }`}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-opacity hover:opacity-90"
                >
                  <ExternalLink className="h-4 w-4" />
                  Voir la démo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors ${
                    darkMode
                      ? 'border-slate-700 bg-slate-900 text-slate-200 hover:border-slate-600'
                      : 'border-slate-300 bg-white text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <FaGithub className="h-4 w-4" />
                  Code source
                </a>
              )}
            </footer>
          )}
        </div>
      </article>
    </main>
  );
}
