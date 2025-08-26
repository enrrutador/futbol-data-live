import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

type Jugador = {
  id: string | number
  nombre: string
}

export default async function JugadoresPage() {
  // Cliente Supabase con tipo genérico any para evitar error TS
  const supabase = createServerComponentClient<any>({ cookies })

  const { data: jugadores, error } = await supabase
    .from("jugadores")
    .select("*")

  if (error) {
    console.error("Error cargando jugadores:", error.message)
    return <div className="p-6">Error al cargar los jugadores.</div>
  }

  if (!jugadores || jugadores.length === 0) {
    return <div className="p-6">No hay jugadores aún.</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Jugadores</h1>
      <ul className="space-y-2">
        {jugadores.map((j: Jugador) => (
          <li
            key={j.id}
            className="border p-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
          >
            {j.nombre}
          </li>
        ))}
      </ul>
    </div>
  )
}
