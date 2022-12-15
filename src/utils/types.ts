export const groupsTuple = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;
export const possibleGroupNumbers = [1, 2, 3, 4] as const;

export type LetraGrupo = typeof groupsTuple[number];
export type NumEquipoGrupo = typeof possibleGroupNumbers[number];

export interface Grupo {
  groupLetter: LetraGrupo,
  groupTeamNumber: NumEquipoGrupo,
}

export type Team = {
  Id: number;
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
  grupo: Grupo;
}

export type Match = {
  fecha: string;
  numero_partido: number;
  hora: string;
  grupo: LetraGrupo;
  instancia: string;
  estadio: string;
  tv: string;
  sede: string;
  ciudad: string;
  idpartido: string;
  equipoA: Grupo;
  equipoB: Grupo;
}

export type Fixture = Match[];

export type ApiResponseType<T> = T[];