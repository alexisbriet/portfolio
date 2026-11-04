import { Search, Menu, Plus, ChevronRight } from 'lucide-react';

type AdminHeaderProps = {
  activeModel: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  onOpenCreate: () => void;
  onToggleMobile: () => void;
};

export function AdminHeader({ activeModel, searchTerm, onSearchChange, onOpenCreate, onToggleMobile }: AdminHeaderProps) {
  return (
    <header className="z-10 flex items-center justify-between gap-3 border-b border-slate-200 bg-white/95 px-4 py-3 shadow-sm backdrop-blur sm:px-6 sm:py-4">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        <button
          type="button"
          onClick={onToggleMobile}
          aria-label="Ouvrir le menu d’administration"
          className="rounded-xl border border-slate-200 p-2 text-slate-500 transition-colors hover:bg-slate-100 lg:hidden"
        >
          <Menu size={20} />
        </button>
        <div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex">
          <span>Modèles</span>
          <ChevronRight size={14} />
          <span className="truncate font-semibold text-slate-900">{activeModel}</span>
        </div>
        <h2 className="truncate text-sm font-semibold text-slate-800 sm:hidden">{activeModel}</h2>
      </div>

      <div className="flex min-w-0 items-center gap-2 sm:gap-4">
        <div className="relative hidden min-w-0 sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Rechercher..."
            aria-label="Rechercher dans les enregistrements"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-40 rounded-xl border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm outline-none transition-all placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-500/10 sm:w-56 lg:w-64"
          />
        </div>
        <button
          type="button"
          onClick={onOpenCreate}
          className="flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm shadow-cyan-900/10 transition-all hover:-translate-y-0.5 hover:shadow-md sm:px-4"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Nouvel enregistrement</span>
          <span className="sm:hidden">Nouveau</span>
        </button>
      </div>
    </header>
  );
}
