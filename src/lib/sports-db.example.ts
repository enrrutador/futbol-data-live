/**
 * Ejemplos de uso de la integración con TheSportsDB
 * 
 * Para ejecutar estos ejemplos:
 * 1. Copiar este archivo y renombrar a .ts
 * 2. Importar las funciones necesarias
 * 3. Ejecutar con: ts-node sports-db.example.ts
 */

import {
  getMatches,
  getStandings, 
  getTeams,
  getEventDetails,
  getPastEvents,
  getNextEvents,
  LEAGUE_IDS,
} from './sports-db';

// =============================================================================
// EJEMPLO 1: Obtener partidos de hoy
// =============================================================================
async function exampleGetMatches() {
  console.log('\n=== Ejemplo 1: Partidos de hoy ===');
  
  const today = new Date();
  const result = await getMatches(today);
  
  if (result.data) {
    console.log(`Encontrados ${result.data.length} partidos:`);
    result.data.forEach((match) => {
      console.log(`  - ${match.strHomeTeam} vs ${match.strAwayTeam} (${match.dateEvent} ${match.strTime})`);
    });
  }
  
  if (result.error) {
    console.log('Nota:', result.error);
  }
}

// =============================================================================
// EJEMPLO 2: Obtener tabla de clasificación
// =============================================================================
async function exampleGetStandings() {
  console.log('\n=== Ejemplo 2: Tabla de Premier League ===');
  
  const result = await getStandings('premier-league');
  
  if (result.data && result.data.length > 0) {
    console.log('Posiciones:');
    result.data.slice(0, 5).forEach((team) => {
      console.log(`  ${team.intRank}. ${team.strTeam} - ${team.intPoints} pts (${team.intWin}V ${team.intDraw}E ${team.intLoss}D)`);
    });
  }
  
  if (result.error) {
    console.log('Nota:', result.error);
  }
}

// =============================================================================
// EJEMPLO 3: Obtener equipos de una liga
// =============================================================================
async function exampleGetTeams() {
  console.log('\n=== Ejemplo 3: Equipos de La Liga ===');
  
  const result = await getTeams('la-liga');
  
  if (result.data) {
    console.log(`Encontrados ${result.data.length} equipos:`);
    result.data.slice(0, 10).forEach((team) => {
      console.log(`  - ${team.strTeam} (${team.strLocation}, ${team.strCountry})`);
    });
  }
  
  if (result.error) {
    console.log('Nota:', result.error);
  }
}

// =============================================================================
// EJEMPLO 4: Próximos eventos de una liga
// =============================================================================
async function exampleNextEvents() {
  console.log('\n=== Ejemplo 4: Próximos eventos de Champions League ===');
  
  const result = await getNextEvents('champions-league');
  
  if (result.data && result.data.length > 0) {
    console.log(`Próximos ${result.data.length} partidos:`);
    result.data.forEach((match) => {
      console.log(`  - ${match.strHomeTeam} vs ${match.strAwayTeam}`);
    });
  } else {
    console.log('No hay eventos próximos en este momento');
  }
}

// =============================================================================
// EJEMPLO 5: Eventos pasados
// =============================================================================
async function examplePastEvents() {
  console.log('\n=== Ejemplo 5: Últimos partidos de Brasil ===');
  
  const result = await getPastEvents('brasileirao');
  
  if (result.data && result.data.length > 0) {
    console.log(`Últimos ${result.data.length} partidos:`);
    result.data.forEach((match) => {
      const score = match.intHomeScore !== null && match.intAwayScore !== null
        ? `${match.intHomeScore}-${match.intAwayScore}`
        : 'Pendiente';
      console.log(`  - ${match.strHomeTeam} ${score} ${match.strAwayTeam}`);
    });
  }
}

// =============================================================================
// EJECUTAR EJEMPLOS
// =============================================================================

async function runExamples() {
  console.log('========================================');
  console.log('  EJEMPLOS - TheSportsDB Integration');
  console.log('========================================');
  
  // Mostrar IDs de ligas disponibles
  console.log('\nLigas disponibles:');
  Object.entries(LEAGUE_IDS).forEach(([name, id]) => {
    console.log(`  - ${name}: ${id}`);
  });
  
  // Ejecutar ejemplos
  await exampleGetMatches();
  await exampleGetStandings();
  await exampleGetTeams();
  await exampleNextEvents();
  await examplePastEvents();
  
  console.log('\n========================================');
  console.log('  Ejemplos completados');
  console.log('========================================');
}

// Ejecutar si se llama directamente
if (import.meta.main) {
  runExamples().catch(console.error);
}

export { runExamples };
