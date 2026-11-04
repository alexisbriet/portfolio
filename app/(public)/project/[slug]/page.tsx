import { ProjectDetailPage } from './ProjectDetailPage';
import { getProjectBySlug } from '@/app/actions/project.actions';
import { notFound } from 'next/navigation';

export default async function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <ProjectDetailPage
            project={{
                id: project.id,
                slug: project.slug ?? slug,
                title: project.title,
                category: project.category,
                image: project.image ?? "",
                description: project.description,
                content: project.content,
                techs: project.technologies.map((technology) => technology.name),
                github: project.github ?? undefined,
                demo: project.demo ?? undefined,
                featured: project.featured,
            }}
        />
    );
}