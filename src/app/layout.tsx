import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FutbolData Live - Resultados en Vivo',
  description: 'Resultados de fútbol en tiempo real',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <nav className="bg-slate-800 border-b border-slate-700 px-4 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <span className="font-bold text-xl text-white">Futbol<span className="text-emerald-500">Data</span></span>
            <div className="flex gap-4">
              <a href="/" className="text-slate-300 hover:text-white">Inicio</a>
              <a href="/ligas" className="text-slate-300 hover:text-white">Ligas</a>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
