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
    <div className="flex-1 overflow-auto bg-slate-50 p-4 sm:p-6">
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-medium">
              <tr>
                {activeSchema.fields.map((field) => (
                  <th key={field.name} className="px-6 py-4">{field.name}</th>
                ))}
                <th className="px-6 py-4 text-right sticky right-0 bg-slate-50 shadow-[-10px_0_15px_-10px_rgba(0,0,0,0.05)]">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.length === 0 ? (
                <tr>
                  <td colSpan={activeSchema.fields.length + 1} className="px-6 py-12 text-center text-slate-500">
                    <div className="flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <Search size={24} />
                      </div>
                      <p>Aucune donnée trouvée pour <span className="font-semibold">{activeModel}</span>.</p>
                      <button
                        onClick={onOpenCreate}
                        className="text-blue-600 hover:underline font-medium mt-2"
                      >
                        Créer le premier enregistrement
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/80 transition-colors group">
                    {activeSchema.fields.map((field) => (
                      <td key={field.name} className="px-6 py-4">
                        {field.type === 'Boolean' ? (
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${item[field.name] ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'}`}>
                            {item[field.name] ? 'Oui' : 'Non'}
                          </span>
                        ) : field.relationTo ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-indigo-50 text-indigo-700 text-xs font-medium font-mono border border-indigo-100">
                            <Layers size={10} />
                            {item[field.name]}
                          </span>
                        ) : field.type === 'Text' ? (
                          <span className="text-slate-600 truncate block max-w-xs" title={item[field.name]}>
                            {item[field.name] || <span className="text-slate-300 italic">Vide</span>}
                          </span>
                        ) : field.isId ? (
                          <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">{item[field.name]}</span>
                        ) : (
                          <span className={!item[field.name] ? 'text-slate-300 italic' : 'text-slate-700'}>
                            {item[field.name] || '-'}
                          </span>
                        )}
                      </td>
                    ))}
                    <td className="px-6 py-4 text-right sticky right-0 bg-white group-hover:bg-slate-50/80 shadow-[-10px_0_15px_-10px_rgba(0,0,0,0.02)] transition-colors">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onOpenEdit(item)}
                          className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                          title="Modifier"
                        >
                          <Edit2 size={16} />
                        </button>
                        <button
                          onClick={() => onConfirmDelete(item)}
                          className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
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
