import { cookies } from "next/headers"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"

export default async function JugadoresPage() {
  // Creamos el cliente de Supabase en el server component
  const supabase = createServerComponentClient({ cookies })

  // Consultamos la tabla "jugadores"
  const { data: jugadores, error } = await supabase.from("jugadores").select("*")

  if (error) {
    console.error("Error cargando jugadores:", error.message)
    return <div>Error al cargar los jugadores.</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Lista de Jugadores</h1>
      <ul className="space-y-2">
        {jugadores?.map((j: any) => (
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
