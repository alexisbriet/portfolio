import { Layers, Search, Edit2, Trash2 } from 'lucide-react';
import type { FieldConfig, ModelSchema } from './admin-schema';

type AdminTableProps = {
  activeModel: string;
  activeSchema: ModelSchema;
  filteredData: Array<Record<string, any>>;
  onOpenEdit: (item: Record<string, any>) => void;
  onConfirmDelete: (item: Record<string, any>) => void;
  onOpenCreate: () => void;
};

export function AdminTable({
  activeModel,
  activeSchema,
  filteredData,
  onOpenEdit,
  onConfirmDelete,
  onOpenCreate,
}: AdminTableProps) {
  return (
    <div className="flex-1 overflow-auto bg-slate-50/80 p-3 sm:p-6">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm shadow-slate-900/[0.03]">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="border-b border-slate-200 bg-slate-50/90 text-xs font-semibold uppercase tracking-wide text-slate-500">
              <tr>
                {activeSchema.fields.map((field) => (
                  <th key={field.name} scope="col" className="px-5 py-4">{field.name}</th>
                ))}
                <th scope="col" className="sticky right-0 bg-slate-50 px-5 py-4 text-right shadow-[-10px_0_15px_-10px_rgba(0,0,0,0.05)]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100/80">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={activeSchema.fields.length + 1} className="px-6 py-12 text-center text-slate-500">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <Search size={24} />
                      </div>
                      <p>Aucune donnée trouvée pour <span className="font-semibold">{activeModel}</span>.</p>
                      <button
                        type="button"
                        onClick={onOpenCreate}
                        className="mt-2 font-semibold text-cyan-700 transition-colors hover:text-blue-700 hover:underline"
                      >
                        Créer le premier enregistrement
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredData.map((item) => (
                  <tr key={item.id} className="group transition-colors hover:bg-cyan-50/30">
                    {activeSchema.fields.map((field) => (
                      <td key={field.name} className="px-5 py-3.5">
                        {field.type === 'Boolean' ? (
                          <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${item[field.name] ? 'bg-emerald-50 text-emerald-700 ring-1 ring-inset ring-emerald-600/15' : 'bg-slate-100 text-slate-600 ring-1 ring-inset ring-slate-500/10'}`}>
                            {item[field.name] ? 'Oui' : 'Non'}
                          </span>
                        ) : field.relationTo ? (
                          <span className="inline-flex items-center gap-1.5 rounded-md border border-cyan-100 bg-cyan-50 px-2 py-1 font-mono text-xs font-medium text-cyan-800">
                            <Layers size={10} />
                            {item[field.name]}
                          </span>
                        ) : field.type === 'Text' ? (
                          <span className="block max-w-xs truncate text-slate-600" title={item[field.name]}>
                            {item[field.name] || <span className="text-slate-300 italic">Vide</span>}
                          </span>
                        ) : field.isId ? (
                          <span className="rounded-md bg-slate-100 px-2 py-1 font-mono text-xs text-slate-500">{item[field.name]}</span>
                        ) : (
                          <span className={!item[field.name] ? 'italic text-slate-300' : 'text-slate-700'}>
                            {item[field.name] || '-'}
                          </span>
                        )}
                      </td>
                    ))}
                    <td className="sticky right-0 bg-white px-5 py-3.5 text-right shadow-[-10px_0_15px_-10px_rgba(0,0,0,0.02)] transition-colors group-hover:bg-cyan-50/30">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => onOpenEdit(item)}
                          aria-label={`Modifier ${activeModel}`}
                          className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-cyan-50 hover:text-cyan-700"
                          title="Modifier"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          type="button"
                          onClick={() => onConfirmDelete(item)}
                          aria-label={`Supprimer ${activeModel}`}
                          className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-red-50 hover:text-red-600"
                          title="Supprimer"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
