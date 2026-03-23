import type { Metadata } from 'next';
import './globals.css';
import { StarField } from '@/components/StarField';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Portfolio | Développeur Informatique',
  description:
    'Portfolio personnel mettant en avant un design spatial immersif avec animations fluides et projets innovants.',
  keywords: ['portfolio', 'développeur', 'frontend', 'react', 'next.js'],
  icons: {
    icon: '/favicon.ico?v=4',
    shortcut: '/favicon.ico?v=4',
    apple: '/favicon-profile.png?v=4',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        <StarField />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
