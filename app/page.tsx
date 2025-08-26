export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-promiedos-accent mb-4">
        Fútbol Data Live
      </h1>
      <p className="text-lg mb-6">
        Replicando Promiedos + Transfermarkt con Supabase y Next.js
      </p>
      <a
        href="/jugadores"
        className="bg-promiedos-accent text-white px-4 py-2 rounded"
      >
        Ver jugadores
      </a>
    </main>
  )
}
