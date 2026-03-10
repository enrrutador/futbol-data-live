import React from 'react';
import { Trophy, ChevronUp, ChevronDown, Minus } from 'lucide-react';

interface Standing {
  position: number;
  team: string;
  played: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}

interface LeagueTableProps {
  leagueName: string;
  standings: Standing[];
}

export const LeagueTable: React.FC<LeagueTableProps> = ({ leagueName, standings }) => {
  const getPositionStyle = (position: number) => {
    if (position <= 4) return 'bg-green-100 text-green-800'; // Champions
    if (position <= 6) return 'bg-blue-100 text-blue-800';  // Europa League
    if (position >= standings.length - 3) return 'bg-red-100 text-red-800'; // Descenso
    return 'bg-gray-50 text-gray-800';
  };
  
  const getPositionIcon = (position: number) => {
    // Simulación de variación de posición
    if (position % 3 === 0) return <ChevronUp className="w-4 h-4 text-green-500" />;
    if (position % 3 === 1) return <Minus className="w-4 h-4 text-gray-400" />;
    return <ChevronDown className="w-4 h-4 text-red-500" />;
  };
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 px-6 py-4">
        <div className="flex items-center">
          <Trophy className="w-6 h-6 text-yellow-400 mr-3" />
          <h2 className="text-xl font-bold text-white">{leagueName}</h2>
        </div>
      </div>
      
      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              <th className="px-4 py-3">Pos</th>
              <th className="px-4 py-3">Equipo</th>
              <th className="px-4 py-3 text-center">PJ</th>
              <th className="px-4 py-3 text-center">G</th>
              <th className="px-4 py-3 text-center">E</th>
              <th className="px-4 py-3 text-center">P</th>
              <th className="px-4 py-3 text-center">GF</th>
              <th className="px-4 py-3 text-center">GC</th>
              <th className="px-4 py-3 text-center">DG</th>
              <th className="px-4 py-3 text-center">Pts</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {standings.map((team) => (
              <tr 
                key={team.position}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${getPositionStyle(team.position)}`}>
                      {team.position}
                    </span>
                    <span className="ml-2">{getPositionIcon(team.position)}</span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <div className="flex items-center">
                    <span className="font-semibold text-gray-900">{team.team}</span>
                  </div>
                </td>
                <td className="px-4 py-3 text-center text-gray-600">{team.played}</td>
                <td className="px-4 py-3 text-center text-green-600">{team.wins}</td>
                <td className="px-4 py-3 text-center text-yellow-600">{team.draws}</td>
                <td className="px-4 py-3 text-center text-red-600">{team.losses}</td>
                <td className="px-4 py-3 text-center text-gray-600">{team.goalsFor}</td>
                <td className="px-4 py-3 text-center text-gray-600">{team.goalsAgainst}</td>
                <td className="px-4 py-3 text-center">
                  <span className={`font-semibold ${team.goalDifference >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                  </span>
                </td>
                <td className="px-4 py-3 text-center">
                  <span className="font-bold text-lg text-blue-600">{team.points}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Leyenda */}
      <div className="px-6 py-3 bg-gray-50 border-t text-xs text-gray-600 flex gap-4">
        <span className="flex items-center">
          <span className="w-3 h-3 bg-green-100 rounded mr-1"></span> Champions
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-blue-100 rounded mr-1"></span> Europa League
        </span>
        <span className="flex items-center">
          <span className="w-3 h-3 bg-red-100 rounded mr-1"></span> Descenso
        </span>
      </div>
    </div>
  );
};

// Ejemplo de uso:
// const standings = [
//   { position: 1, team: "Boca Juniors", played: 10, wins: 7, draws: 2, losses: 1, goalsFor: 18, goalsAgainst: 8, goalDifference: 10, points: 23 },
//   { position: 2, team: "River Plate", played: 10, wins: 6, draws: 3, losses: 1, goalsFor: 15, goalsAgainst: 6, goalDifference: 9, points: 21 },
// ];
// <LeagueTable leagueName="Liga Profesional Argentina" standings={standings} />
