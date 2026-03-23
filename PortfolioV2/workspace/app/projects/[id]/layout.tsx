import { Metadata } from 'next';
import { projects } from '@/app/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string } | Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const routeId = decodeURIComponent(resolvedParams?.id ?? '');
  const project = projects.find((p) => p.id === routeId);

  if (!project) {
    return {
      title: 'Projet | Portfolio',
      description: 'Détail d’un projet du portfolio.',
    };
  }

  return {
    title: `${project.title} | Portfolio`,
    description: project.description,
  };
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
