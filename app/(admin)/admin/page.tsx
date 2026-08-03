"use client";

import { useState } from 'react';
import { SCHEMA, INITIAL_DB, AdminModel, generateCuid, generateIntId } from './admin-schema';
import { AdminSidebar } from './components/AdminSidebar';
import { AdminHeader } from './components/AdminHeader';
import { AdminTable } from './components/AdminTable';
import { FormModal } from './components/FormModal';
import { DeleteModal } from './components/DeleteModal';

type AdminData = Record<AdminModel, any[]>;

export default function AdminPage() {
  const [db, setDb] = useState<AdminData>(INITIAL_DB);
  const [activeModel, setActiveModel] = useState<AdminModel>('User');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({ isOpen: false, mode: 'create' as 'create' | 'edit', data: null as Record<string, any> | null });
  const [deleteModalConfig, setDeleteModalConfig] = useState({ isOpen: false, data: null as Record<string, any> | null });

  const activeSchema = SCHEMA[activeModel];
  const tableData = db[activeModel] || [];

  const filteredData = tableData.filter(item =>
    Object.values(item).some(value => String(value).toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handleSave = (formData: Record<string, any>) => {
    setDb(prev => {
      const newDb = { ...prev };
      const modelData = [...(newDb[activeModel] || [])];

      if (modalConfig.mode === 'create') {
        const isIntId = activeSchema.fields.find(f => f.name === 'id')?.type === 'Int';
        const newId = isIntId ? generateIntId(modelData) : generateCuid();
        modelData.push({ ...formData, id: newId });
      } else {
        const index = modelData.findIndex(item => item.id === formData.id);
        if (index > -1) modelData[index] = formData;
      }

      newDb[activeModel] = modelData;
      return newDb;
    });
    setModalConfig({ isOpen: false, mode: 'create', data: null });
  };

  const confirmDelete = (item: Record<string, any>) => {
    setDeleteModalConfig({ isOpen: true, data: item });
  };

  const handleDelete = () => {
    const record = deleteModalConfig.data;
    if (!record) return;

    setDb(prev => {
      const newDb = { ...prev };
      newDb[activeModel] = prev[activeModel].filter((item: any) => item.id !== record.id);
      return newDb;
    });
    setDeleteModalConfig({ isOpen: false, data: null });
  };

  const openEdit = (item: Record<string, any>) => {
    setModalConfig({ isOpen: true, mode: 'edit', data: item });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex text-slate-900 font-sans">
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-slate-900/50 z-30 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <AdminSidebar
        schema={SCHEMA}
        db={db}
        activeModel={activeModel}
        isOpen={isMobileMenuOpen}
        onSelectModel={model => {
          setActiveModel(model);
          setSearchTerm('');
          setIsMobileMenuOpen(false);
        }}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <AdminHeader
          activeModel={activeModel}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          onOpenCreate={() => setModalConfig({ isOpen: true, mode: 'create', data: null })}
          onToggleMobile={() => setIsMobileMenuOpen(true)}
        />

        <AdminTable
          activeModel={activeModel}
          activeSchema={activeSchema}
          filteredData={filteredData}
          onOpenEdit={openEdit}
          onConfirmDelete={confirmDelete}
          onOpenCreate={() => setModalConfig({ isOpen: true, mode: 'create', data: null })}
        />
      </main>

      <FormModal
        isOpen={modalConfig.isOpen}
        mode={modalConfig.mode}
        activeModel={activeModel}
        activeSchema={activeSchema}
        data={modalConfig.data}
        db={db}
        onClose={() => setModalConfig({ isOpen: false, mode: 'create', data: null })}
        onSave={handleSave}
      />

      <DeleteModal
        isOpen={deleteModalConfig.isOpen}
        data={deleteModalConfig.data}
        onClose={() => setDeleteModalConfig({ isOpen: false, data: null })}
        onDelete={handleDelete}
      />
    </div>
  );
}
