import React from 'react';
import { Calendar, Clock, Trophy } from 'lucide-react';

interface MatchCardProps {
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  status: 'LIVE' | 'FINISHED' | 'SCHEDULED';
  league?: string;
}

export const MatchCard: React.FC<MatchCardProps> = ({
  homeTeam,
  awayTeam,
  homeScore,
  awayScore,
  date,
  status,
  league,
}) => {
  const isLive = status === 'LIVE';
  const isFinished = status === 'FINISHED';
  
  return (
    <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 ${
      isLive ? 'border-red-500' : isFinished ? 'border-gray-400' : 'border-blue-400'
    }`}>
      {/* Header - Liga y Estado */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center text-gray-600 text-sm">
          <Trophy className="w-4 h-4 mr-2" />
          <span>{league || 'Liga'}</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          isLive ? 'bg-red-100 text-red-700 animate-pulse' :
          isFinished ? 'bg-gray-100 text-gray-600' :
          'bg-blue-100 text-blue-700'
        }`}>
          {isLive ? 'EN VIVO' : isFinished ? 'FINALIZADO' : 'PROGRAMADO'}
        </span>
      </div>
      
      {/* Equipos y Marcador */}
      <div className="flex items-center justify-between">
        <div className="flex-1 text-center">
          <h3 className="font-bold text-lg text-gray-800">{homeTeam}</h3>
          <p className="text-sm text-gray-500">Local</p>
        </div>
        
        <div className="mx-4">
          {isFinished || isLive ? (
            <div className="text-3xl font-bold text-gray-900">
              {homeScore} - {awayScore}
            </div>
          ) : (
            <div className="text-2xl text-gray-400">VS</div>
          )}
        </div>
        
        <div className="flex-1 text-center">
          <h3 className="font-bold text-lg text-gray-800">{awayTeam}</h3>
          <p className="text-sm text-gray-500">Visitante</p>
        </div>
      </div>
      
      {/* Fecha */}
      <div className="flex items-center justify-center mt-4 text-gray-500 text-sm">
        <Calendar className="w-4 h-4 mr-2" />
        <span>{date}</span>
      </div>
    </div>
  );
};

// Ejemplo de uso:
// <MatchCard 
//   homeTeam="Boca Juniors" 
//   awayTeam="River Plate"
//   homeScore={2}
//   awayScore={1}
//   date="2026-03-15 16:00"
//   status="LIVE"
//   league="Liga Profesional Argentina"
// />
