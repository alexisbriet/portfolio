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
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-4 mb-4 text-red-600">
          <div className="p-3 bg-red-100 rounded-full">
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
          <button onClick={onClose} className="px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
            Annuler
          </button>
          <button onClick={onDelete} className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors">
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}
