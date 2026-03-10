import { Activity, RefreshCw, Filter } from 'lucide-react';
import { MatchCard } from '@/components/matches/MatchCard';

const liveMatches = [
  { id: '1', homeTeam: 'Boca Juniors', awayTeam: 'River Plate', homeScore: 2, awayScore: 1, minute: 67, status: 'LIVE' as const, league: 'Liga Profesional' },
  { id: '2', homeTeam: 'Real Madrid', awayTeam: 'Barcelona', homeScore: 0, awayScore: 0, minute: 23, status: 'LIVE' as const, league: 'La Liga' },
  { id: '6', homeTeam: 'Manchester United', awayTeam: 'Chelsea', homeScore: 1, awayScore: 2, minute: 78, status: 'LIVE' as const, league: 'Premier League' },
  { id: '7', homeTeam: 'Juventus', awayTeam: 'Napoli', homeScore: 0, awayScore: 1, minute: 45, status: 'LIVE' as const, league: 'Serie A' },
];

export default function EnVivoPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-dark-800 to-dark-900 border-b border-dark-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex h-10 w-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-live opacity-75"></span>
              <span className="relative inline-flex rounded-full h-10 w-10 bg-live items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </span>
            </div>
            <h1 className="text-3xl font-bold text-white">Partidos en Vivo</h1>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <p className="text-gray-400">
              {liveMatches.length} partidos en directo ahora mismo
            </p>
            
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-dark-700 hover:bg-dark-600 rounded-lg transition-colors text-sm">
                <Filter className="w-4 h-4" />
                Filtrar
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors text-sm text-white">
                <RefreshCw className="w-4 h-4" />
                Actualizar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Live Matches */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="space-y-4">
          {liveMatches.map((match) => (
            <div key={match.id} className="relative">
              {/* League badge */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10">
                <span className="bg-primary-600 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                  {match.league}
                </span>
              </div>
              <MatchCard 
                id={match.id}
                homeTeam={match.homeTeam}
                awayTeam={match.awayTeam}
                homeScore={match.homeScore}
                awayScore={match.awayScore}
                minute={match.minute}
                status={match.status}
              />
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Partidos hoy', value: '48' },
            { label: 'En vivo', value: '12', highlight: true },
            { label: 'Próximos', value: '36' },
            { label: 'Goles hoy', value: '127' },
          ].map((stat) => (
            <div key={stat.label} className="card p-4 text-center">
              <p className={`text-2xl font-bold ${stat.highlight ? 'text-live' : 'text-white'}`}>
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
