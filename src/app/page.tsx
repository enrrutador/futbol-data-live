export default function Home() {
  return (
    <main className="p-4 bg-grey-900">
      <h1 className="text-3xl font-bold text-white mb-8">
        # Futbol Data Live 🎍</h1>
      <p className="text-gray-400 text-xl">
        Resultados en tiempo real de futbol! 🎏⛌,dara de las principales ligas europeas.
      </p>
      <div className="mt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <!-- Match cards will go here -->
      </div>
    </main>
  );
}