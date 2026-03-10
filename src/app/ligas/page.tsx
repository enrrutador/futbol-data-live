'use client';

import Link from 'next/link';
import { Trophy, ChevronLeft } from 'lucide-react';

const leagues = [
  { id: 'arg', name: 'Liga Profesional', country: 'Argentina' },
  { id: 'esp', name: 'La Liga', country: 'España' },
  { id: 'eng', name: 'Premier League', country: 'Inglaterra' },
  { id: 'ita', name: 'Serie A', country: 'Italia' },
];

export default function LigasPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-dark-800 to-dark-900 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-6 transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Inicio
          </Link>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Trophy className="w-8 h-8 text-primary-400" />
            Ligas
          </h1>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {leagues.map((league) => (
            <Link key={league.id} href={`/liga/${league.id}`}>
              <div className="card p-6 hover:border-primary-500/50 transition-colors">
                <h3 className="text-xl font-bold text-white">{league.name}</h3>
                <p className="text-gray-400">{league.country}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
