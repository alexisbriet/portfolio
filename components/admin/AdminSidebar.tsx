import type { AdminSchema } from './admin-schema';
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
      `fixed lg:static inset-y-0 left-0 z-40 w-72 bg-slate-900 text-slate-300 flex flex-col
        transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`
    }>
      <div className="p-6 flex items-center gap-3 border-b border-slate-800">
        <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-white">
          <Database size={18} />
        </div>
        <h1 className="text-xl font-bold text-white tracking-tight">Prisma Admin</h1>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3 px-3">Modèles de données</div>
        {Object.entries(schema).map(([modelName, config]) => {
          const Icon = config.icon;
          const count = db[modelName]?.length || 0;
          const isActive = activeModel === modelName;

          return (
            <button
              key={modelName}
              onClick={() => {
                onSelectModel(modelName);
                onClose();
              }}
              className={
                `w-full flex items-center justify-between px-3 py-2.5 rounded-lg transition-all duration-200 group
                  ${isActive ? 'bg-blue-600/10 text-blue-400' : 'hover:bg-slate-800 hover:text-slate-100'}`
              }
            >
              <div className="flex items-center gap-3">
                <Icon size={18} className={isActive ? 'text-blue-500' : 'text-slate-500 group-hover:text-slate-300'} />
                <span className="font-medium">{modelName}</span>
              </div>
              {count > 0 && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${isActive ? 'bg-blue-600/20 text-blue-400' : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'}`}>
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
