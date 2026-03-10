# ⚽ Futbol Data Live [![CI](https://github.com/enrrutador/futbol-data-live/actions/workflows/ci.yml/badge.svg)](https://github.com/enrrutador/futbol-data-live/actions/workflows/ci.yml) [![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/) [![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)](https://www.typescriptlang.org/) [![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/) [![Supabase](https://img.shields.io/badge/Supabase-Database-3ECF8E?logo=supabase)](https://supabase.com/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38B2AC?logo=tailwind-css)](https://tailwindcss.com/) [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> 🏆 Plataforma web de estadísticas de fútbol en tiempo real con datos de múltiples APIs

## 📖 Descripción

**Futbol Data Live** es una aplicación web moderna construida con **Next.js 15** y **React 19** que proporciona estadísticas, resultados y análisis de partidos de fútbol en tiempo real. Integra múltiples fuentes de datos (API-Football, Football-Data.org, TheSportsDB) almacenando la información en **Supabase** para un acceso rápido y escalable.

## 🚀 Características

- ✅ **Datos en tiempo real** de ligas internacionales
- ✅ **Estadísticas avanzadas** con gráficos interactivos (Recharts)
- ✅ **Sistema de caché** con Supabase para optimizar API calls
- ✅ **Diseño responsive** con Tailwind CSS
- ✅ **TypeScript** para tipado seguro
- ✅ **Multi-API**: Integración con 3 proveedores de datos

## 📦 Instalación

### Prerrequisitos

- Node.js 18+
- npm o yarn
- Cuenta en [API-Football](https://www.api-football.com/) (plan gratuito: 100 req/día)
- Cuenta en [Supabase](https://supabase.com/)

### Pasos

```bash
# Clonar repositorio
git clone https://github.com/enrrutador/futbol-data-live.git
cd futbol-data-live

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus API keys

# Iniciar servidor de desarrollo
npm run dev
```

## 🛠️ Configuración

Crear archivo `.env.local`:

```bash
# API-Football (https://www.api-football.com/)
NEXT_PUBLIC_API_FOOTBALL_KEY=tu_api_key_aqui

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_aqui

# Football-Data.org (https://www.football-data.org/)
FOOTBALL_DATA_ORG_KEY=tu_key_aqui

# TheSportsDB (https://www.thesportsdb.com/)
THESPORTSDB_KEY=tu_key_aqui
```

## 📋 Scripts disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Iniciar servidor de desarrollo |
| `npm run build` | Compilar para producción |
| `npm run start` | Iniciar servidor de producción |
| `npm run lint` | Ejecutar linter |
| `npm test` | Ejecutar tests |
| `npm run test:watch` | Ejecutar tests en modo watch |
| `npm run test:coverage` | Ejecutar tests con cobertura |

## 🏗️ Arquitectura

```
futbol-data-live/
├── src/
│   ├── app/              # Rutas y páginas (Next.js App Router)
│   ├── components/       # Componentes React reutilizables
│   └── lib/              # Utilidades y configuración
├── lib/
│   └── supabase.ts       # Cliente Supabase
├── .github/              # Configuración GitHub
└── docs/                 # Documentación adicional
```

## 🧪 Tests

```bash
npm test
```

## 📊 Tecnologías

- **Framework**: Next.js 15 (App Router)
- **UI**: React 19 + Tailwind CSS 3.3 + Lucide Icons
- **Lenguaje**: TypeScript 5.3
- **Database**: Supabase (PostgreSQL)
- **Data Fetching**: SWR 2.2
- **Charts**: Recharts 2.10
- **HTTP**: Axios 1.6
- **Dates**: date-fns 3.0

## 🤝 Contribuir

1. Fork el repositorio
2. Crear rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commits convencionales (`feat:`, `fix:`, `docs:`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abrir Pull Request

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

## 📄 Licencia

MIT License - ver [LICENSE](LICENSE) para más información.

## 🙏 Agradecimientos

- [API-Football](https://www.api-football.com/) por los datos de fútbol
- [Supabase](https://supabase.com/) por el backend serverless
- [Next.js](https://nextjs.org/) por el framework

---

<p align="center">⚽ Desarrollado con pasión por el fútbol</p>
