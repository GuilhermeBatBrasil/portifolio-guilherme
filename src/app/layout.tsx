import '../../styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
import { ReactNode } from 'react';

export const metadata = {
  title: 'SeuNome | Front-end Developer',
  description: 'Portfólio pessoal de desenvolvedor front-end',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
