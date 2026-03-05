export default function Home() {
  return (
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
      </div>
    </main>
  );
}
