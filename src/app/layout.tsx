import '../../styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { LanguageProvider } from '@/context/LanguageContext';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Guilherme | Front-end Developer',
  description: 'Portfólio pessoal de desenvolvedor front-end',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
