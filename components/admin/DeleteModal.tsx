import { AlertTriangle } from 'lucide-react';

type DeleteModalProps = {
  isOpen: boolean;
  data: Record<string, any> | null;
  onClose: () => void;
  onDelete: () => void;
};

export function DeleteModal({ isOpen, data, onClose, onDelete }: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-950/20 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-4 mb-4 text-red-600">
          <div className="rounded-2xl border border-red-100 bg-red-50 p-3">
            <AlertTriangle size={24} />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Confirmer la suppression</h2>
        </div>
        <p className="text-slate-600 mb-6">
          Êtes-vous sûr de vouloir supprimer cet enregistrement ? Cette action est irréversible.
          <br /><br />
          <span className="font-mono text-xs bg-slate-100 p-2 rounded block break-all">
            ID: {data?.id}
          </span>
        </p>
        <div className="flex justify-end gap-3">
          <button type="button" onClick={onClose} className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">
            Annuler
          </button>
          <button type="button" onClick={onDelete} className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-red-700">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
