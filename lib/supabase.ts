import { createClient } from '@supabase/supabase-js'

// Mock data para cuando no hay variables (GitHub Pages estático)
export const mockData = {
  partidos: [
    { id: 1, equipo_local: 'Real Madrid', equipo_visitante: 'Barcelona', goles_local: 2, goles_visitante: 1, liga: 'La Liga', fecha: '2026-03-04' },
    { id: 2, equipo_local: 'Manchester City', equipo_visitante: 'Liverpool', goles_local: 0, goles_visitante: 0, liga: 'Premier League', fecha: '2026-03-04' },
    { id: 3, equipo_local: 'Bayern Munich', equipo_visitante: 'Dortmund', goles_local: 3, goles_visitante: 2, liga: 'Bundesliga', fecha: '2026-03-03' },
    { id: 4, equipo_local: 'Inter', equipo_visitante: 'Milan', goles_local: 1, goles_visitante: 1, liga: 'Serie A', fecha: '2026-03-03' },
  ],
  ligas: [
    { id: 'laliga', nombre: 'La Liga', pais: 'España', logo: '/liga/laliga.png' },
    { id: 'premier', nombre: 'Premier League', pais: 'Inglaterra', logo: '/liga/premier.png' },
    { id: 'bundesliga', nombre: 'Bundesliga', pais: 'Alemania', logo: '/liga/bundesliga.png' },
    { id: 'seriea', nombre: 'Serie A', pais: 'Italia', logo: '/liga/seriea.png' },
  ]
}

// Verificar si estamos en GitHub Pages (static) o local
const isStaticBuild = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_BUILD_MODE === 'static'

// Crear cliente Supabase solo si existen las variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = supabaseUrl && supabaseAnonKey && !isStaticBuild
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Función helper para obtener datos (real o mock)
export async function getData(table: string) {
  if (supabase) {
    const { data, error } = await supabase.from(table).select('*')
    if (error) {
      console.warn('Error de Supabase, usando datos mock:', error)
      return mockData[table as keyof typeof mockData] || []
    }
    return data
  }
  // Devolver datos mock si no hay conexión a Supabase
  return mockData[table as keyof typeof mockData] || []
}

// Guardar datos en localStorage (simulación)
export function saveToLocal(key: string, data: any) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(`futbol-data-${key}`, JSON.stringify(data))
  }
}

// Leer datos de localStorage
export function loadFromLocal(key: string) {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(`futbol-data-${key}`)
    return data ? JSON.parse(data) : null
  }
  return null
}
