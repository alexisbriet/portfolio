import { useEffect, useState } from 'react';
import { Plus, Edit2, X } from 'lucide-react';
import type { AdminSchema, FieldConfig, ModelSchema } from './admin-schema';
import type { FieldConfig as FormFieldConfig } from '@/components/form-types';

type FormModalProps = {
  isOpen: boolean;
  mode: 'create' | 'edit';
  activeModel: string;
  activeSchema: ModelSchema;
  formFields?: FormFieldConfig<Record<string, any>>[];
  data: Record<string, any> | null;
  db: Record<string, any[]>;
  onClose: () => void;
  onSave: (formData: Record<string, any>) => void;
};

export function FormModal({
  isOpen,
  mode,
  activeModel,
  activeSchema,
  formFields,
  data,
  db,
  onClose,
  onSave,
}: FormModalProps) {
  const [formData, setFormData] = useState<Record<string, any>>(data || {});

  const resolvedFields = (formFields && formFields.length > 0
    ? formFields
    : activeSchema.fields.map((field: FieldConfig) => ({
        name: field.name,
        label: field.name,
        required: !field.optional,
      }))
  ) as FormFieldConfig<Record<string, any>>[];

  useEffect(() => {
    setFormData(data || {});
  }, [data, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>, field: FieldConfig) => {
    let value: any = e.target.type === 'checkbox' ? (e.target as HTMLInputElement).checked : e.target.value;
    if (field.type === 'Int' && value !== '') value = parseInt(value, 10);
    setFormData((prev) => ({ ...prev, [field.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center p-6 border-b border-slate-100 bg-slate-50/50">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            {mode === 'create' ? <Plus size={20} className="text-blue-600" /> : <Edit2 size={20} className="text-blue-600" />}
            {mode === 'create' ? 'Ajouter' : 'Modifier'} un enregistrement {activeModel}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
            <X size={24} />
          </button>
        </div>

        <form id="form-modal" onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-5">
          {resolvedFields.map((fieldConfig) => {
            const schemaField = activeSchema.fields.find((field: FieldConfig) => field.name === fieldConfig.name);
            const field = (schemaField ?? { name: fieldConfig.name, type: 'String' as const, optional: !fieldConfig.required }) as FieldConfig & {
              type: 'String' | 'Int' | 'Boolean' | 'Text';
              isId?: boolean;
              relationTo?: string;
            };

            if (field.isId) {
              if (mode === 'create') return null;
              return (
                <div key={field.name}>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">{fieldConfig.label ?? field.name} (ID)</label>
                  <input type="text" value={formData[field.name] ?? ''} disabled className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded-lg text-slate-500 cursor-not-allowed" />
                </div>
              );
            }

            return (
              <div key={field.name}>
                <label className="block text-sm font-semibold text-slate-700 mb-1">
                  {fieldConfig.label ?? field.name} {field.optional ? <span className="text-slate-400 font-normal">(Optionnel)</span> : <span className="text-red-500">*</span>}
                </label>

                {field.relationTo ? (
                  <select
                    required={!field.optional}
                    value={formData[field.name] ?? ''}
                    onChange={(e) => handleChange(e, field)}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  >
                    <option value="">Sélectionner {field.relationTo}...</option>
                    {(db[field.relationTo] || []).map((rel) => (
                      <option key={rel.id} value={rel.id}>
                        {rel.id} - {rel.name || rel.title || rel.email || rel.company || 'Item'}
                      </option>
                    ))}
                  </select>
                ) : field.type === 'Boolean' ? (
                  <label className="flex items-center gap-3 p-3 border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                    <input
                      type="checkbox"
                      checked={formData[field.name] ?? false}
                      onChange={(e) => handleChange(e, field)}
                      className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
                    />
                    <span className="text-slate-700 font-medium">Activer {field.name}</span>
                  </label>
                ) : field.type === 'Text' ? (
                  <textarea
                    required={!field.optional}
                    value={formData[field.name] ?? ''}
                    onChange={(e) => handleChange(e, field)}
                    rows={4}
                    placeholder={fieldConfig.placeholder}
                    className="w-full p-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-y"
                  />
                ) : (
                  <input
                    type={field.type === 'Int' ? 'number' : 'text'}
                    required={!field.optional}
                    value={formData[field.name] ?? ''}
                    onChange={(e) => handleChange(e, field)}
                    placeholder={fieldConfig.placeholder}
                    className="w-full p-2.5 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                  />
                )}
              </div>
            );
          })}
        </form>

        <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-3">
          <button type="button" onClick={onClose} className="px-5 py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
            Annuler
          </button>
          <button type="submit" form="form-modal" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors">
            Enregistrer
          </button>
        </div>
      </div>
    </div>
  );
}
