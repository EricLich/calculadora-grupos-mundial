export const groupsTuple = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;
export const possibleGroupNumbers = [1, 2, 3, 4] as const;

export type LetraGrupo = typeof groupsTuple[number];
export type NumEquipoGrupo = typeof possibleGroupNumbers[number];

export type Team = {
  id: number;
  nombre: string;
  nombreCorto: string;
  remera: string;
  rankingFifa: string;
  apuestas_2_puntaje: number;
  prom_puntaje_apuestas: number;
  ranking_ln: number;
  urlTagEquipo: string;
  repechaje: boolean;
  btnAnexo: boolean;
  grupo: string;
}

export type TeamPointsTableData = {
  teamName: string;
  points: number;
  playedGames: number;
  wins: number;
  ties: number;
  lost: number;
  goalsMade: number;
  goalsRecieved: number;
  goalDifference: number;
  matchesPlayed: {
    teams: [string, string],
    winner: Team['nombre'],
  }[]
}

export type TableData = TeamPointsTableData[];

export type Match = {
  fecha: string;
  ['numero-partido']: number;
  hora: string;
  grupo: LetraGrupo;
  instancia: string;
  estadio: string;
  tv: string;
  sede: string;
  ciudad: string;
  idpartido: string;
  equipoA: string;
  equipoB: string;
}

export type MatchScore = {
  teamA: TeamScoreData;
  teamB: TeamScoreData;
}

export type TeamScoreData = {
  teamGroupId: string;
  teamName: string;
  score: number;
}

export type Fixture = Match[];

export type ApiResponseType<T> = T[];

export const tableHeadTags: Record<string, string | { abbr: string, full: string }> = {
  PTS: {
    abbr: 'PTS',
    full: 'Puntos totales',
  },
  PJ: {
    abbr: 'PJ',
    full: 'Partidos jugados',
  },
  G: {
    abbr: 'G',
    full: 'Partidos ganados',
  },
  E: {
    abbr: 'E',
    full: 'Partidos empatados',
  },
  P: {
    abbr: 'P',
    full: 'Partidos perdidos',
  },
  GF: {
    abbr: 'GF',
    full: 'Goles a favor',
  },
  GC: {
    abbr: 'GC',
    full: 'Goles en contra',
  },
  DG: {
    abbr: 'DG',
    full: 'Diferencia de gol',
  }
};