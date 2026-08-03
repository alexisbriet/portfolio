import { BookOpen, ExternalLink } from "lucide-react";
import { DeveloperData } from "./types";

type ArticlesSectionProps = {
    developerData: DeveloperData;
    darkMode: boolean;
    filteredArticles: DeveloperData["posts"];
};

export default function ArticlesSection({
    developerData,
    darkMode,
    filteredArticles
}: ArticlesSectionProps) {
    return (
        <section id="articles" className="space-y-6">
            <div className="flex items-center gap-3">
                <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-xl border border-cyan-500/20">
                    <BookOpen className="w-6 h-6" />
                </div>

                <div>
                    <h2 className="text-2xl font-bold">
                        Articles & Publications
                    </h2>

                    <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Partage de connaissances, tutoriels techniques et réflexions sur le développement
                    </p>
                </div>
            </div>

            {filteredArticles.length === 0 ? (
                <p className={darkMode ? "text-slate-400" : "text-slate-600"}>
                    Aucun article disponible.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filteredArticles.map((article) => (
                        <a
                            key={article.id}
                            href={article.url ?? "#"}
                            target="_blank"
                            rel="noreferrer"
                            className={`group p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${darkMode
                                    ? 'bg-slate-900/50 border-slate-800 hover:border-cyan-500/50'
                                    : 'bg-white border-slate-200 shadow-sm hover:border-cyan-500/50'
                                }`}
                        >
                            <div className="space-y-3">
                                <div className="flex items-center justify-between text-xs font-semibold">
                                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                        {article.platform}
                                    </span>

                                    <span className="text-slate-400">
                                        {article.readTime}
                                    </span>
                                </div>

                                <h3 className="font-bold text-lg leading-snug group-hover:text-cyan-400 transition-colors">
                                    {article.title}
                                </h3>

                                <p className={`text-sm line-clamp-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'
                                    }`}>
                                    {article.description}
                                </p>
                            </div>

                            <div className="pt-4 mt-4 border-t border-slate-800/50 flex items-center justify-between">
                                <div className="flex flex-wrap gap-1.5">
                                    {(article.tags ?? []).map((tag, idx) => (
                                        <span
                                            key={`${tag}-${idx}`}
                                            className="text-xs font-mono text-slate-400"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>

                                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors shrink-0 ml-2" />
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </section>
    );
}