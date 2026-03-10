/**
 * Data Layer - JSON Local Storage
 * Replaces Supabase with local JSON files
 */
import path from 'path';
import { promises as fs } from 'fs';

const DATA_DIR = path.join(process.cwd(), 'data');

// ============================================
// INTERFACES
// ============================================
export interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  homeScore?: number;
  awayScore?: number;
  date: string;
  league: string;
  status: 'scheduled' | 'live' | 'finished';
}

export interface Team {
  id: string;
  name: string;
  league: string;
  country: string;
  logo?: string;
}

export interface Standing {
  id: string;
  teamId: string;
  teamName: string;
  league: string;
  position: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface Player {
  id: string;
  name: string;
  teamId: string;
  position: string;
  number?: number;
  nationality?: string;
  age?: number;
}

// ============================================
// Helper functions
// ============================================
async function ensureDir() {
  try {
    await fs.access(DATA_DIR);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
  }
}

async function readJson<T>(filename: string): Promise<T[]> {
  await ensureDir();
  const filePath = path.join(DATA_DIR, `${filename}.json`);
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeJson<T>(filename: string, data: T[]): Promise<void> {
  await ensureDir();
  const filePath = path.join(DATA_DIR, `${filename}.json`);
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

// ============================================
// MATCH SERVICE
// ============================================
export const MatchService = {
  async create(match: Omit<Match, 'id'>): Promise<Match> {
    const matches = await readJson<Match>('matches');
    const newMatch: Match = {
      ...match,
      id: `match_${Date.now()}`,
    };
    matches.push(newMatch);
    await writeJson('matches', matches);
    return newMatch;
  },

  async getAll(): Promise<Match[]> {
    return readJson<Match>('matches');
  },

  async getById(id: string): Promise<Match | null> {
    const matches = await readJson<Match>('matches');
    return matches.find(m => m.id === id) || null;
  },

  async update(id: string, updates: Partial<Match>): Promise<Match | null> {
    const matches = await readJson<Match>('matches');
    const index = matches.findIndex(m => m.id === id);
    if (index === -1) return null;
    matches[index] = { ...matches[index], ...updates };
    await writeJson('matches', matches);
    return matches[index];
  },

  async delete(id: string): Promise<boolean> {
    const matches = await readJson<Match>('matches');
    const filtered = matches.filter(m => m.id !== id);
    if (filtered.length === matches.length) return false;
    await writeJson('matches', filtered);
    return true;
  },
};

// ============================================
// TEAM SERVICE
// ============================================
export const TeamService = {
  async create(team: Omit<Team, 'id'>): Promise<Team> {
    const teams = await readJson<Team>('teams');
    const newTeam: Team = { ...team, id: `team_${Date.now()}` };
    teams.push(newTeam);
    await writeJson('teams', teams);
    return newTeam;
  },

  async getAll(): Promise<Team[]> {
    return readJson<Team>('teams');
  },

  async getById(id: string): Promise<Team | null> {
    const teams = await readJson<Team>('teams');
    return teams.find(t => t.id === id) || null;
  },

  async update(id: string, updates: Partial<Team>): Promise<Team | null> {
    const teams = await readJson<Team>('teams');
    const index = teams.findIndex(t => t.id === id);
    if (index === -1) return null;
    teams[index] = { ...teams[index], ...updates };
    await writeJson('teams', teams);
    return teams[index];
  },

  async delete(id: string): Promise<boolean> {
    const teams = await readJson<Team>('teams');
    const filtered = teams.filter(t => t.id !== id);
    if (filtered.length === teams.length) return false;
    await writeJson('teams', filtered);
    return true;
  },
};

// ============================================
// STANDING SERVICE
// ============================================
export const StandingService = {
  async create(standing: Omit<Standing, 'id'>): Promise<Standing> {
    const standings = await readJson<Standing>('standings');
    const newStanding: Standing = { ...standing, id: `standing_${Date.now()}` };
    standings.push(newStanding);
    await writeJson('standings', standings);
    return newStanding;
  },

  async getAll(): Promise<Standing[]> {
    return readJson<Standing>('standings');
  },

  async getById(id: string): Promise<Standing | null> {
    const standings = await readJson<Standing>('standings');
    return standings.find(s => s.id === id) || null;
  },

  async update(id: string, updates: Partial<Standing>): Promise<Standing | null> {
    const standings = await readJson<Standing>('standings');
    const index = standings.findIndex(s => s.id === id);
    if (index === -1) return null;
    standings[index] = { ...standings[index], ...updates };
    await writeJson('standings', standings);
    return standings[index];
  },

  async delete(id: string): Promise<boolean> {
    const standings = await readJson<Standing>('standings');
    const filtered = standings.filter(s => s.id !== id);
    if (filtered.length === standings.length) return false;
    await writeJson('standings', filtered);
    return true;
  },
};

// ============================================
// PLAYER SERVICE
// ============================================
export const PlayerService = {
  async create(player: Omit<Player, 'id'>): Promise<Player> {
    const players = await readJson<Player>('players');
    const newPlayer: Player = { ...player, id: `player_${Date.now()}` };
    players.push(newPlayer);
    await writeJson('players', players);
    return newPlayer;
  },

  async getAll(): Promise<Player[]> {
    return readJson<Player>('players');
  },

  async getById(id: string): Promise<Player | null> {
    const players = await readJson<Player>('players');
    return players.find(p => p.id === id) || null;
  },

  async update(id: string, updates: Partial<Player>): Promise<Player | null> {
    const players = await readJson<Player>('players');
    const index = players.findIndex(p => p.id === id);
    if (index === -1) return null;
    players[index] = { ...players[index], ...updates };
    await writeJson('players', players);
    return players[index];
  },

  async delete(id: string): Promise<boolean> {
    const players = await readJson<Player>('players');
    const filtered = players.filter(p => p.id !== id);
    if (filtered.length === players.length) return false;
    await writeJson('players', filtered);
    return true;
  },
};
