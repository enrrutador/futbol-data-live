/**
 * TheSportsDB API Integration
 * API Documentation: https://www.thesportsdb.com/api.php
 * 
 * Endpoints utilizados:
 * - GET /api/v1/json/3/eventsday.php?d={date} - Partidos por fecha
 * - GET /api/v1/json/3/lookuptable.php?l={leagueId}&s={season} - Tabla de clasificación
 * - GET /api/v1/json/3/lookup_all_teams.php?id={leagueId} - Equipos de una liga
 * 
 * Nota: TheSportsDB API es gratuita y no requiere API key para uso básico
 * Rate limits: 100 requests/10min para usuarios gratuitos
 */

// =============================================================================
// TIPOS DE DATOS
// =============================================================================

export interface Match {
  idEvent: string;
  strEvent: string;
  strHomeTeam: string;
  strAwayTeam: string;
  dateEvent: string;
  strTime: string;
  strVenue: string | null;
  strLeague: string;
  strSeason: string;
  strStatus: string | null;
  intHomeScore: string | null;
  intAwayScore: string | null;
  strThumb: string | null;
}

export interface Standing {
  idStanding: string;
  intRank: string;
  idTeam: string;
  strTeam: string;
  strTeamBadge: string;
  intPlayed: string;
  intWin: string;
  intDraw: string;
  intLoss: string;
  intGoalsFor: string;
  intGoalsAgainst: string;
  intGoalDifference: string;
  intPoints: string;
}

export interface Team {
  idTeam: string;
  strTeam: string;
  strTeamShort: string | null;
  strTeamBadge: string;
  strLeague: string;
  strStadium: string | null;
  strLocation: string | null;
  strCountry: string;
  intFormedYear: string | null;
  strDescriptionEN: string | null;
  strWebsite: string | null;
  strFacebook: string | null;
  strTwitter: string | null;
  strInstagram: string | null;
}

export interface APIResponse<T> {
  data: T | null;
  error: string | null;
  fromCache: boolean;
}

// =============================================================================
// CONFIGURACIÓN
// =============================================================================

const BASE_URL = 'https://www.thesportsdb.com/api/v1/json/3';

// IDs de ligas populares en TheSportsDB
export const LEAGUE_IDS: Record<string, string> = {
  'premier-league': '4328',
  'la-liga': '4335',
  'serie-a': '4332',
  'bundesliga': '4331',
  'ligue-1': '4334',
  'champions-league': '4480',
  'europa-league': '4481',
  'copa-libertadores': '4521',
  'copa-sudamericana': '4522',
  'liga-profesional': '4444', // Argentina
  'brasileirao': '4440',
  'mls': '4346',
};

// =============================================================================
// DATOS MOCK (Fallback)
// =============================================================================

const MOCK_MATCHES: Record<string, Match[]> = {
  'default': [
    {
      idEvent: 'mock-1',
      strEvent: 'Team A vs Team B',
      strHomeTeam: 'Team A',
      strAwayTeam: 'Team B',
      dateEvent: '2024-03-15',
      strTime: '20:00:00',
      strVenue: 'Estadio Principal',
      strLeague: 'Liga de Ejemplo',
      strSeason: '2023-2024',
      strStatus: 'Scheduled',
      intHomeScore: null,
      intAwayScore: null,
      strThumb: null,
    },
    {
      idEvent: 'mock-2',
      strEvent: 'Team C vs Team D',
      strHomeTeam: 'Team C',
      strAwayTeam: 'Team D',
      dateEvent: '2024-03-15',
      strTime: '22:00:00',
      strVenue: 'Estadio Secundario',
      strLeague: 'Liga de Ejemplo',
      strSeason: '2023-2024',
      strStatus: 'Scheduled',
      intHomeScore: null,
      intAwayScore: null,
      strThumb: null,
    },
  ],
};

const MOCK_STANDINGS: Record<string, Standing[]> = {
  'default': [
    {
      idStanding: 'mock-1',
      intRank: '1',
      idTeam: 'team-1',
      strTeam: 'Líder FC',
      strTeamBadge: 'https://via.placeholder.com/30',
      intPlayed: '10',
      intWin: '8',
      intDraw: '1',
      intLoss: '1',
      intGoalsFor: '25',
      intGoalsAgainst: '8',
      intGoalDifference: '17',
      intPoints: '25',
    },
  ],
};

const MOCK_TEAMS: Record<string, Team[]> = {
  'default': [
    {
      idTeam: 'team-1',
      strTeam: 'Líder FC',
      strTeamShort: 'LFC',
      strTeamBadge: 'https://via.placeholder.com/100',
      strLeague: 'Liga Profesional',
      strStadium: 'Estadio Líder',
      strLocation: 'Ciudad Capital',
      strCountry: 'Argentina',
      intFormedYear: '1900',
      strDescriptionEN: 'Uno de los equipos más populares.',
      strWebsite: null,
      strFacebook: null,
      strTwitter: null,
      strInstagram: null,
    },
  ],
};

// =============================================================================
// FUNCIONES AUXILIARES
// =============================================================================

function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function resolveLeagueId(league: string): string {
  return LEAGUE_IDS[league] || league;
}

function getCurrentSeason(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const startYear = month < 6 ? year - 1 : year;
  return `${startYear}-${startYear + 1}`;
}

// =============================================================================
// FUNCIONES PRINCIPALES
// =============================================================================

/**
 * Obtiene los partidos programados para una fecha específica
 * Endpoint: GET https://www.thesportsdb.com/api/v1/json/3/eventsday.php?d=YYYY-MM-DD
 * 
 * @param date - Fecha en formato Date o string (YYYY-MM-DD)
 * @returns Promise<APIResponse<Match[]>> - Lista de partidos o error con mock data
 */
export async function getMatches(date: Date | string): Promise<APIResponse<Match[]>> {
  try {
    const formattedDate = formatDate(date);
    const url = `${BASE_URL}/eventsday.php?d=${formattedDate}`;
    
    console.log(`[TheSportsDB] Fetching matches for date: ${formattedDate}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.events) {
      // No hay eventos para esa fecha
      return {
        data: [],
        error: null,
        fromCache: false,
      };
    }
    
    console.log(`[TheSportsDB] Retrieved ${data.events.length} matches`);
    
    return {
      data: data.events as Match[],
      error: null,
      fromCache: false,
    };
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[TheSportsDB] Error fetching matches: ${errorMessage}`);
    
    // Retornar datos mock como fallback
    return {
      data: MOCK_MATCHES['default'],
      error: `API Error: ${errorMessage} (showing mock data)`,
      fromCache: true,
    };
  }
}

/**
 * Obtiene la tabla de clasificación de una liga
 * Endpoint: GET https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l={leagueId}&s={season}
 * 
 * @param league - ID de liga (nombre o ID numérico)
 * @param season - Temporada opcional (formato: "2023-2024"). Si no se especifica, usa la actual
 * @returns Promise<APIResponse<Standing[]>> - Tabla de posiciones o error con mock data
 */
export async function getStandings(
  league: string,
  season?: string
): Promise<APIResponse<Standing[]>> {
  try {
    const leagueId = resolveLeagueId(league);
    const targetSeason = season || getCurrentSeason();
    const url = `${BASE_URL}/lookuptable.php?l=${leagueId}&s=${targetSeason}`;
    
    console.log(`[TheSportsDB] Fetching standings for league: ${leagueId}, season: ${targetSeason}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.table) {
      return {
        data: [],
        error: null,
        fromCache: false,
      };
    }
    
    console.log(`[TheSportsDB] Retrieved ${data.table.length} standings`);
    
    return {
      data: data.table as Standing[],
      error: null,
      fromCache: false,
    };
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[TheSportsDB] Error fetching standings: ${errorMessage}`);
    
    return {
      data: MOCK_STANDINGS['default'],
      error: `API Error: ${errorMessage} (showing mock data)`,
      fromCache: true,
    };
  }
}

/**
 * Obtiene todos los equipos de una liga
 * Endpoint: GET https://www.thesportsdb.com/api/v1/json/3/lookup_all_teams.php?id={leagueId}
 * 
 * @param league - ID de liga (nombre o ID numérico)
 * @returns Promise<APIResponse<Team[]>> - Lista de equipos o error con mock data
 */
export async function getTeams(league: string): Promise<APIResponse<Team[]>> {
  try {
    const leagueId = resolveLeagueId(league);
    const url = `${BASE_URL}/lookup_all_teams.php?id=${leagueId}`;
    
    console.log(`[TheSportsDB] Fetching teams for league: ${leagueId}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.teams) {
      return {
        data: [],
        error: null,
        fromCache: false,
      };
    }
    
    console.log(`[TheSportsDB] Retrieved ${data.teams.length} teams`);
    
    return {
      data: data.teams as Team[],
      error: null,
      fromCache: false,
    };
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[TheSportsDB] Error fetching teams: ${errorMessage}`);
    
    return {
      data: MOCK_TEAMS['default'],
      error: `API Error: ${errorMessage} (showing mock data)`,
      fromCache: true,
    };
  }
}

// =============================================================================
// FUNCIONES UTILITARIAS ADICIONALES
// =============================================================================

/**
 * Obtiene detalles de un evento/partido específico
 * Endpoint: GET https://www.thesportsdb.com/api/v1/json/3/lookupevent.php?id={eventId}
 * 
 * @param eventId - ID del evento
 * @returns Promise<APIResponse<Match>> - Detalles del partido
 */
export async function getEventDetails(eventId: string): Promise<APIResponse<Match>> {
  try {
    const url = `${BASE_URL}/lookupevent.php?id=${eventId}`;
    
    console.log(`[TheSportsDB] Fetching event details: ${eventId}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    if (!data.events || data.events.length === 0) {
      return {
        data: null,
        error: 'Event not found',
        fromCache: false,
      };
    }
    
    return {
      data: data.events[0] as Match,
      error: null,
      fromCache: false,
    };
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[TheSportsDB] Error fetching event details: ${errorMessage}`);
    
    return {
      data: null,
      error: errorMessage,
      fromCache: false,
    };
  }
}

/**
 * Obtiene los últimos 15 eventos de una liga
 * Endpoint: GET https://www.thesportsdb.com/api/v1/json/3/eventspastleague.php?id={leagueId}
 * 
 * @param league - ID de liga
 * @returns Promise<APIResponse<Match[]>> - Lista de partidos pasados
 */
export async function getPastEvents(league: string): Promise<APIResponse<Match[]>> {
  try {
    const leagueId = resolveLeagueId(league);
    const url = `${BASE_URL}/eventspastleague.php?id=${leagueId}`;
    
    console.log(`[TheSportsDB] Fetching past events for league: ${leagueId}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    return {
      data: data.events as Match[] || [],
      error: null,
      fromCache: false,
    };
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[TheSportsDB] Error fetching past events: ${errorMessage}`);
    
    return {
      data: [],
      error: errorMessage,
      fromCache: false,
    };
  }
}

/**
 * Obtiene los próximos 15 eventos de una liga
 * Endpoint: GET https://www.thesportsdb.com/api/v1/json/3/eventsnextleague.php?id={leagueId}
 * 
 * @param league - ID de liga
 * @returns Promise<APIResponse<Match[]>> - Lista de próximos partidos
 */
export async function getNextEvents(league: string): Promise<APIResponse<Match[]>> {
  try {
    const leagueId = resolveLeagueId(league);
    const url = `${BASE_URL}/eventsnextleague.php?id=${leagueId}`;
    
    console.log(`[TheSportsDB] Fetching next events for league: ${leagueId}`);
    
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    
    return {
      data: data.events as Match[] || [],
      error: null,
      fromCache: false,
    };
    
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[TheSportsDB] Error fetching next events: ${errorMessage}`);
    
    return {
      data: [],
      error: errorMessage,
      fromCache: false,
    };
  }
}

// Exportar todo como módulo
export default {
  getMatches,
  getStandings,
  getTeams,
  getEventDetails,
  getPastEvents,
  getNextEvents,
  LEAGUE_IDS,
};