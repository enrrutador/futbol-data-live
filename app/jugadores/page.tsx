import { supabase } from '@/lib/supabase'

import { cookies } from 'next/headers'

export default async function JugadoresPage() {
  const supabase = createServerComponentClient({ cookies })
  const { data: jugadores } = await supabase.from('jugadores').select('*')

  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold text-promiedos-accent mb-4">
        Jugadores
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {jugadores?.map((j) => (
          <div
            key={j.id}
            className="bg-promiedos-card rounded p-4 flex flex-col items-center"
          >
            <img
              src={j.foto_url || '/placeholder.png'}
              alt={j.nombre}
              className="w-20 h-20 rounded-full mb-2 object-cover"
            />
            <h2 className="text-xl font-semibold">{j.nombre}</h2>
            <p className="text-sm">{j.posicion}</p>
            <p className="text-sm text-promiedos-accent">
              Valor: €{j.valor_mercado?.toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
