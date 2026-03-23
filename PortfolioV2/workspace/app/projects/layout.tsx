import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mes Projets | Portfolio',
  description: 'Explorez tous mes projets de développement web.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
