import React, { useState } from 'react';

export interface Team {
  id: string;
  name: string;
  logo?: string;
  league: string;
}

export interface TeamSelectorProps {
  teams: Team[];
  selectedTeamId?: string;
  onSelectTeam: (team: Team) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const mockTeams: Team[] = [
  { id: '1', name: 'Boca Juniors', league: 'Primera División', logo: '🔵' },
  { id: '2', name: 'River Plate', league: 'Primera División', logo: '⚪' },
  { id: '3', name: 'Racing Club', league: 'Primera División', logo: '🔵' },
  { id: '4', name: 'Independiente', league: 'Primera División', logo: '🔴' },
  { id: '5', name: 'San Lorenzo', league: 'Primera División', logo: '🔵' },
  { id: '6', name: 'Vélez Sarsfield', league: 'Primera División', logo: '⚪' },
  { id: '7', name: 'Huracán', league: 'Primera División', logo: '🔴' },
  { id: '8', name: 'Lanús', league: 'Primera División', logo: '🟤' },
];

export const TeamSelector: React.FC<TeamSelectorProps> = ({
  teams = mockTeams,
  selectedTeamId,
  onSelectTeam,
  placeholder = 'Seleccionar equipo...',
  className = '',
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedTeam = teams.find((t) => t.id === selectedTeamId);

  const handleSelect = (team: Team) => {
    onSelectTeam(team);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`
          w-full px-4 py-3 text-left bg-white border-2 rounded-lg
          transition-all duration-200 ease-in-out
          ${disabled 
            ? 'bg-gray-100 border-gray-200 text-gray-400 cursor-not-allowed' 
            : 'border-gray-300 hover:border-blue-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 cursor-pointer'
          }
          flex items-center justify-between
        `}
      >
        <span className={selectedTeam ? 'text-gray-900' : 'text-gray-400'}>
          {selectedTeam ? (
            <span className="flex items-center gap-2">
              <span className="text-2xl">{selectedTeam.logo}</span>
              <span>
                <span className="font-medium">{selectedTeam.name}</span>
                <span className="text-gray-500 text-sm ml-2">{selectedTeam.league}</span>
              </span>
            </span>
          ) : (
            placeholder
          )}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && !disabled && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-50 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-auto">
            {teams.length === 0 ? (
              <div className="px-4 py-3 text-gray-500 text-sm">No hay equipos disponibles</div>
            ) : (
              <ul className="py-1">
                {teams.map((team) => (
                  <li key={team.id}>
                    <button
                      type="button"
                      onClick={() => handleSelect(team)}
                      className={`
                        w-full px-4 py-3 text-left transition-colors duration-150
                        flex items-center gap-3
                        ${selectedTeamId === team.id
                          ? 'bg-blue-50 text-blue-700'
                          : 'hover:bg-gray-50 text-gray-700'
                        }
                      `}
                    >
                      <span className="text-2xl">{team.logo}</span>
                      <div className="flex-1">
                        <div className="font-medium">{team.name}</div>
                        <div className="text-xs text-gray-500">{team.league}</div>
                      </div>
                      {selectedTeamId === team.id && (
                        <svg
                          className="w-5 h-5 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TeamSelector;
