"use client";

import { useEffect, useState } from 'react';
import { SCHEMA, INITIAL_DB, AdminModel } from './admin-schema';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { AdminTable } from './AdminTable';
import { FormModal } from './FormModal';
import { DeleteModal } from './DeleteModal';
import { useRouter } from 'next/navigation';
import { createDeveloperFormFields } from '@/app/schemas/developer.schema';
import { createAchievementFormFields, createCertificationFormFields, createDeveloperStatFormFields, createEducationFormFields, createExperienceFormFields, createExperienceSkillFormFields, createPostFormFields, createProjectFormFields, createProjectTechnologyFormFields, createSkillCategoryFormFields, createSkillFormFields } from '@/app/schemas';
import { createTestimonialFormFields } from '@/app/schemas/testimonial.schema';
import { createUserFormFields } from '@/app/schemas/user.schema';

type AdminData = Record<AdminModel, any[]>;

const FORM_FIELDS: Partial<Record<AdminModel, any>> = {
    Achievement: createAchievementFormFields,
    Certification: createCertificationFormFields,
    DeveloperStat: createDeveloperStatFormFields,
    Developer: createDeveloperFormFields,
    Education: createEducationFormFields,
    ExperienceSkill: createExperienceSkillFormFields,
    Experience: createExperienceFormFields,
    Post: createPostFormFields,
    ProjectTechnology: createProjectTechnologyFormFields,
    Project: createProjectFormFields,
    SkillCategory: createSkillCategoryFormFields,
    Skill: createSkillFormFields,
    Testimonial: createTestimonialFormFields,
    User: createUserFormFields
};

export default function AdminPageContent({
    initialActiveModel,
    initialDb,
    createAction,
    updateAction,
    deleteAction,
}: {
    initialActiveModel: AdminModel;
    initialDb: Partial<AdminData>;
    createAction: (values: any) => Promise<any>;
    updateAction: (id: string, values: any) => Promise<any>;
    deleteAction: (id: string) => Promise<any>;
}) {
    const [db, setDb] = useState<AdminData>(() => ({
        ...INITIAL_DB,
        ...initialDb,
    } as AdminData));
    const [activeModel, setActiveModel] = useState<AdminModel>(initialActiveModel);
    const [searchTerm, setSearchTerm] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [modalConfig, setModalConfig] = useState({ isOpen: false, mode: 'create' as 'create' | 'edit', data: null as Record<string, any> | null });
    const [deleteModalConfig, setDeleteModalConfig] = useState({ isOpen: false, data: null as Record<string, any> | null });

    useEffect(() => {
        setDb({
            ...INITIAL_DB,
            ...initialDb,
        } as AdminData);
        setActiveModel(initialActiveModel);
    }, [initialActiveModel, initialDb]);

    const activeSchema = SCHEMA[activeModel];
    const tableData = db[activeModel] || [];
    const activeFormFields = FORM_FIELDS[activeModel];

    const filteredData = tableData.filter(item =>
        Object.values(item).some(value => String(value).toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleSave = async (formData: Record<string, any>) => {
        try {
            const saved = modalConfig.mode === 'create'
                ? await createAction(formData)
                : await updateAction(formData.id, formData);

            setDb(prev => {
                const newDb = { ...prev };
                const modelData = [...(newDb[activeModel] || [])];

                if (modalConfig.mode === 'create') {
                    modelData.unshift(saved);
                } else {
                    const index = modelData.findIndex(item => item.id === saved.id);
                    if (index > -1) {
                        modelData[index] = saved;
                    }
                }

                newDb[activeModel] = modelData;
                return newDb;
            });
            setModalConfig({ isOpen: false, mode: 'create', data: null });
        } catch (error) {
            console.error("Erreur CRUD:", error);
        }
    };

    const confirmDelete = (item: Record<string, any>) => {
        setDeleteModalConfig({ isOpen: true, data: item });
    };

    const handleDelete = async () => {
        const record = deleteModalConfig.data;
        if (!record) return;

        try {
            await deleteAction(record.id);
            setDb(prev => {
                const newDb = { ...prev };
                newDb[activeModel] = prev[activeModel].filter((item: any) => item.id !== record.id);
                return newDb;
            });
            setDeleteModalConfig({ isOpen: false, data: null });
        } catch (error) {
            console.error("Erreur suppression:", error);
        }
    };

    const openEdit = (item: Record<string, any>) => {
        setModalConfig({ isOpen: true, mode: 'edit', data: item });
    };

    const router = useRouter();
    const handleSelectModel = (model: AdminModel) => {
        setActiveModel(model);

        router.push(`/admin?model=${model}`);

        setSearchTerm('');
        setIsMobileMenuOpen(false);
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
                onSelectModel={handleSelectModel}
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
                formFields={activeFormFields}
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
