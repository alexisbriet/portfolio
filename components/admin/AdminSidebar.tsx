import type { AdminModel, AdminSchema } from './admin-schema';
import { Database } from 'lucide-react';

type AdminSidebarProps = {
  schema: AdminSchema;
  db: Record<keyof AdminSchema, any[]>;
  activeModel: keyof AdminSchema;
  isOpen: boolean;
  onSelectModel: (model: keyof AdminSchema) => void;
  onClose: () => void;
};

export function AdminSidebar({ schema, db, activeModel, isOpen, onSelectModel, onClose }: AdminSidebarProps) {
  return (
    <aside className={
      `fixed lg:static inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-slate-800 bg-slate-950 text-slate-300 shadow-2xl shadow-slate-950/10 lg:shadow-none
        transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`
    }>
      <div className="flex items-center gap-3 border-b border-slate-800 px-5 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-lg shadow-cyan-900/30">
          <Database size={18} />
        </div>
        <div>
          <h1 className="text-base font-bold tracking-tight text-white">Portfolio Admin</h1>
          <p className="text-xs text-slate-500">Gestion des contenus</p>
        </div>
      </div>

      <div className="custom-scrollbar flex-1 space-y-1 overflow-y-auto px-3 py-5">
        <div className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">Modèles de données</div>
        {Object.entries(schema).map(([modelName, config]) => {
          const Icon = config.icon;
          const count = db[modelName as keyof typeof db]?.length || 0;
          const isActive = activeModel === modelName;
          const model = modelName as AdminModel;

          return (
            <button
              key={modelName}
              onClick={() => {
                onSelectModel(model);
                onClose();
              }}
              aria-current={isActive ? 'page' : undefined}
              className={
                `group flex w-full items-center justify-between rounded-xl px-3 py-2.5 transition-all duration-200
                  ${isActive ? 'bg-cyan-400/10 text-cyan-200 ring-1 ring-inset ring-cyan-400/15' : 'text-slate-400 hover:bg-slate-900 hover:text-slate-100'}`
              }
            >
              <div className="flex items-center gap-3">
                <Icon size={17} className={isActive ? 'text-cyan-300' : 'text-slate-500 group-hover:text-slate-300'} />
                <span className="text-sm font-medium">{modelName}</span>
              </div>
              {count > 0 && (
                <span className={`rounded-full px-2 py-0.5 text-[11px] tabular-nums ${isActive ? 'bg-cyan-400/10 text-cyan-200' : 'bg-slate-900 text-slate-500 group-hover:bg-slate-800 group-hover:text-slate-300'}`}>
                  {count}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
