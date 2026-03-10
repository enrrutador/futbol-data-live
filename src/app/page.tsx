import Link from 'next/link';

const liveMatches = [
  { id: '1', homeTeam: 'Boca', awayTeam: 'River', homeScore: 2, awayScore: 1, minute: 67, status: 'LIVE' as const },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-white mb-6">FutbolData Live</h1>
        {liveMatches.map((match) => (
          <div key={match.id} className="card p-6 mb-4">
            <div className="flex justify-between items-center">
              <span className="text-white font-bold text-lg">{match.homeTeam}</span>
              <span className="text-2xl font-bold text-live animate-pulse">{match.homeScore} - {match.awayScore}</span>
              <span className="text-white font-bold text-lg">{match.awayTeam}</span>
            </div>
            <div className="text-center mt-2">
              <span className="text-live text-sm font-medium">{match.minute}&apos; EN VIVO</span>
            </div>
          </div>
        ))}
        <div className="mt-8">
          <Link href="/ligas" className="text-primary-400 hover:text-primary-300 font-medium">Ver Ligas →</Link>
        </div>
      </div>
    </div>
  );
}
