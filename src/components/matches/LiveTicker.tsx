'use client';

import { useState, useEffect } from 'react';
import { Activity, Flame } from 'lucide-react';

// Mock live events
const liveEvents = [
  { id: 1, minute: 67, text: '¡GOL! Boca Juniors 2-1 River Plate', highlight: true },
  { id: 2, minute: 23, text: 'Real Madrid vs Barcelona - Saque de centro', highlight: false },
  { id: 3, minute: 45, text: 'Final del primer tiempo - Inter 1-0 Milan', highlight: false },
  { id: 4, minute: 89, text: '¡Tarjeta roja! Manchester United', highlight: true },
  { id: 5, minute: 12, text: 'Gol de Bayern Munich - Lewandowski', highlight: false },
];

export function LiveTicker() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % liveEvents.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="card overflow-hidden">
      <div className="p-4 border-b border-dark-700 flex items-center justify-between">
        <h3 className="font-bold text-white flex items-center gap-2">
          <Activity className="w-4 h-4 text-live" />
          Minuto a Minuto
        </h3>
        <div className="flex items-center gap-1 text-live">
          <Flame className="w-3 h-3" />
          <span className="text-xs font-medium">LIVE</span>
        </div>
      </div>
      
      <div className="p-4 space-y-3 max-h-80 overflow-y-auto">
        {liveEvents.map((event, index) => (
          <div 
            key={event.id}
            className={`flex gap-3 p-3 rounded-lg transition-all duration-500 ${
              index === currentIndex ? 'bg-primary-500/10 border border-primary-500/30' : 'hover:bg-dark-700'
            }`}
          >
            <div className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${
              event.highlight ? 'bg-live/20 text-live' : 'bg-dark-700 text-gray-400'
            }`}>
              {event.minute}'
            </div>
            <div className="flex-1">
              <p className={`text-sm ${event.highlight ? 'text-white font-medium' : 'text-gray-400'}`}>
                {event.text}
              </p>
            </div>
            {event.highlight && (
              <div className="flex-shrink-0">
                <span className="w-2 h-2 bg-live rounded-full animate-pulse"></span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
