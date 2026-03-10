import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface TeamStats {
  team: string;
  goals: number;
  matches: number;
  wins: number;
  losses: number;
  draws: number;
}

export interface StatsChartProps {
  data: TeamStats[];
  title?: string;
  className?: string;
}

const mockData: TeamStats[] = [
  { team: 'Boca', goals: 45, matches: 27, wins: 15, losses: 5, draws: 7 },
  { team: 'River', goals: 52, matches: 27, wins: 18, losses: 4, draws: 5 },
  { team: 'Racing', goals: 38, matches: 27, wins: 12, losses: 8, draws: 7 },
  { team: 'Independiente', goals: 33, matches: 27, wins: 10, losses: 9, draws: 8 },
  { team: 'San Lorenzo', goals: 29, matches: 27, wins: 9, losses: 10, draws: 8 },
];

export const StatsChart: React.FC<StatsChartProps> = ({ 
  data = mockData, 
  title = 'Estadísticas por Equipo',
  className = ''
}) => {
  return (
    <div className={`w-full bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis 
              dataKey="team" 
              tick={{ fill: '#374151', fontSize: 12 }}
              tickLine={{ stroke: '#6b7280' }}
            />
            <YAxis 
              tick={{ fill: '#374151', fontSize: 12 }}
              tickLine={{ stroke: '#6b7280' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: 'none', 
                borderRadius: '8px',
                color: '#fff'
              }}
            />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Bar dataKey="goals" name="Goles" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="wins" name="Victorias" fill="#22c55e" radius={[4, 4, 0, 0]} />
            <Bar dataKey="losses" name="Derrotas" fill="#ef4444" radius={[4, 4, 0, 0]} />
            <Bar dataKey="draws" name="Empates" fill="#eab308" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatsChart;
