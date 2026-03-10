'use client';

import Link from 'next/link';
import { ChevronRight, Tv } from 'lucide-react';

interface MatchCardProps {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number | null;
  awayScore?: number | null;
  minute?: number;
  time?: string;
  status: 'LIVE' | 'FINISHED' | 'SCHEDULED';
}

export function MatchCard({ 
  id, 
  homeTeam, 
  awayTeam, 
  homeScore, 
  awayScore, 
  minute, 
  time, 
  status 
}: MatchCardProps) {
  const isLive = status === 'LIVE';
  const isFinished = status === 'FINISHED';
  const isScheduled = status === 'SCHEDULED';

  return (
    <Link href={`/partido/${id}`}>
      <div className={`card p-4 hover:border-primary-500/50 transition-all duration-300 cursor-pointer group ${
        isLive ? 'border-l-4 border-l-live' : ''
      }`}>
        <div className="flex items-center justify-between">
          {/* Status/Time */}
          <div className="w-20 flex-shrink-0">
            {isLive && (
              <div className="flex flex-col items-center">
                <span className="badge-live flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-live rounded-full animate-pulse"></span>
                  {minute}&apos;
                </span>
                <span className="text-live text-xs font-medium mt-1">EN VIVO</span>
              </div>
            )}
            {isFinished && (
              <span className="badge-finished text-center block">FIN</span>
            )}
            {isScheduled && time && (
              <span className="badge-scheduled text-center block">{time}</span>
            )}
          </div>

          {/* Teams and Score */}
          <div className="flex-1 mx-4">
            {/* Home Team */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-sm font-bold text-gray-400">
                  {homeTeam.charAt(0)}
                </div>
                <span className={`font-medium ${isLive ? 'text-white' : 'text-gray-300'}`}>
                  {homeTeam}
                </span>
              </div>
              {homeScore !== null && homeScore !== undefined && (
                <span className={`score ${isLive ? 'score-live' : 'text-white'}`}>
                  {homeScore}
                </span>
              )}
            </div>

            {/* Away Team */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-sm font-bold text-gray-400">
                  {awayTeam.charAt(0)}
                </div>
                <span className={`font-medium ${isLive ? 'text-white' : 'text-gray-300'}`}>
                  {awayTeam}
                </span>
              </div>
              {awayScore !== null && awayScore !== undefined && (
                <span className={`score ${isLive ? 'score-live' : 'text-white'}`}>
                  {awayScore}
                </span>
              )}
            </div>
          </div>

          {/* Arrow */}
          <div className="w-8 flex-shrink-0 flex justify-end">
            {isLive && (
              <div className="flex items-center gap-1 text-live">
                <Tv className="w-4 h-4" />
              </div>
            )}
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary-400 transition-colors" />
          </div>
        </div>

        {/* Live indicators below */}
        {isLive && (
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 h-1 bg-dark-700 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-live to-live-pulse transition-all duration-1000"
                style={{ width: `${Math.min((minute || 0) / 90 * 100, 100)}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{Math.round((minute || 0) / 90 * 100)}%</span>
          </div>
        )}
      </div>
    </Link>
  );
}
