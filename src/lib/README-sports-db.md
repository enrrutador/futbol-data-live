# TheSportsDB API Integration

Integración de la API de TheSportsDB para obtener datos de fútbol y otros deportes sin necesidad de API key.

## 📋 Documentación de Endpoints

| Función | Endpoint | Descripción |
|---------|----------|-------------|
| `getMatches(date)` | `GET /api/v1/json/3/eventsday.php?d=YYYY-MM-DD` | Partidos por fecha |
| `getStandings(league, season?)` | `GET /api/v1/json/3/lookuptable.php?l={leagueId}&s={season}` | Tabla de clasificación |
| `getTeams(league)` | `GET /api/v1/json/3/lookup_all_teams.php?id={leagueId}` | Equipos de una liga |
| `getEventDetails(eventId)` | `GET /api/v1/json/3/lookupevent.php?id={eventId}` | Detalles de un partido |
| `getPastEvents(league)` | `GET /api/v1/json/3/eventspastleague.php?id={leagueId}` | Últimos 15 partidos |
| `getNextEvents(league)` | `GET /api/v1/json/3/eventsnextleague.php?id={leagueId}` | Próximos 15 partidos |

## 🚀 Uso Rápido

```typescript
import { getMatches, getStandings, getTeams } from './sports-db';

// Obtener partidos de hoy
const today = new Date();
const matches = await getMatches(today);

// Obtener tabla de Premier League
const standings = await getStandings('premier-league');

// Obtener equipos de La Liga
const teams = await getTeams('la-liga');
```

## ⚠️ Manejo de Errores

Todas las funciones usan **try-catch** y retornan un objeto estandarizado:

```typescript
interface APIResponse<T> {
  data: T | null;      // Datos reales o mock
  error: string | null; // Mensaje de error (si aplica)
  fromCache: boolean;   // true = usando datos mock
}
```

### Ejemplo:

```typescript
const result = await getMatches(new Date());

if (result.data) {
  // Mostrar datos
  result.data.forEach(match => console.log(match.strEvent));
}

if (result.error) {
  console.warn('API no disponible:', result.error);
  // Los datos en result.data son mock
}

if (result.fromCache) {
  console.log('Mostrando datos de respaldo');
}
```

## 🏆 IDs de Ligas Disponibles

```typescript
import { LEAGUE_IDS } from './sports-db';

// IDs por nombre
LEAGUE_IDS['premier-league']  // '4328'
LEAGUE_IDS['la-liga']         // '4335'
LEAGUE_IDS['serie-a']         // '4332'
LEAGUE_IDS['bundesliga']      // '4331'
LEAGUE_IDS['ligue-1']         // '4334'
LEAGUE_IDS['champions-league'] // '4480'
LEAGUE_IDS['liga-profesional'] // '4444' (Argentina)
LEAGUE_IDS['brasileirao']     // '4440'
LEAGUE_IDS['mls']             // '4346'
```

También puedes usar el ID numérico directamente: `getStandings('4328')`.

## 🔄 Flujo con Fallback (Mock Data)

```
1. Llamada a API
    ↓
2. ¿Éxito? → Retorna datos reales
    ↓ No
3. Captura error con try-catch
    ↓
4. Retorna datos MOCK con flag fromCache: true
```

Los datos mock permiten que la aplicación funcione aunque la API esté caída.

## 📝 Tipos de Datos

### Match (Partido)

```typescript
interface Match {
  idEvent: string;           // ID único
  strEvent: string;            // Nombre del evento
  strHomeTeam: string;         // Equipo local
  strAwayTeam: string;         // Equipo visitante
  dateEvent: string;           // Fecha (YYYY-MM-DD)
  strTime: string;             // Hora
  strVenue: string | null;     // Estadio
  strLeague: string;           // Liga
  strSeason: string;           // Temporada
  strStatus: string | null;    // Estado
  intHomeScore: string | null; // Goles local
  intAwayScore: string | null; // Goles visitante
  strThumb: string | null;     // Imagen
}
```

### Standing (Posición en tabla)

```typescript
interface Standing {
  idStanding: string;
  intRank: string;        // Posición
  strTeam: string;        // Nombre equipo
  strTeamBadge: string;   // Escudo
  intPlayed: string;      // Jugados
  intWin: string;         // Ganados
  intDraw: string;        // Empatados
  intLoss: string;        // Perdidos
  intGoalsFor: string;    // Goles a favor
  intGoalsAgainst: string;// Goles en contra
  intGoalDifference: string; // Diferencia
  intPoints: string;      // Puntos
}
```

### Team (Equipo)

```typescript
interface Team {
  idTeam: string;
  strTeam: string;        // Nombre
  strTeamShort: string;   // Abreviatura
  strTeamBadge: string;   // Escudo
  strStadium: string;     // Estadio
  strLocation: string;    // Ciudad
  strCountry: string;     // País
  strDescriptionEN: string; // Descripción
  strWebsite: string;     // Web
  strFacebook: string;    // Facebook
  strTwitter: string;     // Twitter
  strInstagram: string;   // Instagram
}
```

## 🛠️ Implementación con async/await

Todas las funciones son **asíncronas** y usan async/await:

```typescript
// ✅ Correcto
async function loadData() {
  try {
    const matches = await getMatches(new Date());
    return matches;
  } catch (error) {
    // Error manejado internamente, no debería llegar aquí
  }
}

// En componentes (ej: React)
useEffect(() => {
  async function fetchMatches() {
    const result = await getMatches(new Date());
    setMatches(result.data);
  }
  fetchMatches();
}, []);
```

## ⚡ Límites de Rate

TheSportsDB (plan gratuito):
- **100 requests / 10 minutos**
- Si se excede: HTTP 429 Too Many Requests

## 🌐 Enlaces

- [Documentación API](https://www.thesportsdb.com/api.php)
- [TheSportsDB](https://www.thesportsdb.com/)
