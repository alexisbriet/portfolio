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
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10 shadow-sm">
      <div className="flex items-center gap-4">
        <button
          onClick={onToggleMobile}
          className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg"
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center gap-2 text-sm text-slate-500 hidden sm:flex">
          <span>Modèles</span>
          <ChevronRight size={14} />
          <span className="font-semibold text-slate-900">{activeModel}</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9 pr-4 py-2 bg-slate-100 border-transparent rounded-full text-sm focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none w-64 transition-all"
          />
        </div>
        <button
          onClick={onOpenCreate}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 shadow-sm hover:shadow transition-all"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Nouvel enregistrement</span>
          <span className="sm:hidden">Nouveau</span>
        </button>
      </div>
    </header>
  );
}
