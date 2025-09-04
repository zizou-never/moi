import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Préparation Résidanat Constantine',
  description: 'Votre guide complet pour le concours de résidanat.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.className} bg-gray-50`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
