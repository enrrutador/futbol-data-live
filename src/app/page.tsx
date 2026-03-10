import Link from 'next/link';

const liveMatches = [
  { id: '1', homeTeam: 'Boca', awayTeam: 'River', homeScore: 2, awayScore: 1, minute: 67, status: 'LIVE' as const },
];

export default function Home() {
  return (
<<<<<<< HEAD
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
=======
    <main className="p-4 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-8">
        Futbol Data Live
      </h1>
      <p className="text-gray-400 text-xl mb-4">
        Resultados en tiempo real de futbol
      </p>
      <p className="text-gray-500">
        Datos de las principales ligas europeas
      </p>
      <div className="mt-8">
        {/* Match cards will go here */}
        <p className="text-gray-600 italic">Partidos apareceran aqui</p>
>>>>>>> b793163b10f4975ee2bc3680f6a6c744f50910c4
      </div>
    </div>
  );
}
