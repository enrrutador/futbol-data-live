'use client';

import Link from 'next/link';
import { ChevronRight, Trophy } from 'lucide-react';

interface LeagueCardProps {
  id: string;
  name: string;
  country: string;
  matches: number;
  logo: string;
}

export function LeagueCard({ id, name, country, matches, logo }: LeagueCardProps) {
  return (
    <Link href={`/liga/${id}`}>
      <div className="card p-4 hover:border-primary-500/50 transition-all duration-300 cursor-pointer group h-full">
        <div className="flex items-start justify-between mb-3">
          <div className="w-12 h-12 rounded-xl bg-dark-700 flex items-center justify-center text-2xl">
            {logo}
          </div>
          <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary-400 transition-colors" />
        </div>
        
        <h3 className="font-bold text-white group-hover:text-primary-400 transition-colors mb-1">
          {name}
        </h3>
        
        <p className="text-sm text-gray-400 mb-3">
          {country}
        </p>
        
        <div className="flex items-center gap-2">
          <span className="px-2 py-1 rounded bg-primary-500/20 text-primary-400 text-xs font-medium">
            {matches} partidos
          </span>
          <span className="text-xs text-gray-500">hoy</span>
        </div>
      </div>
    </Link>
  );
}
