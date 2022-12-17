import React, {
  createContext,
  ReactNode,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";

import { LetraGrupo, Match, TableData, Team } from "../utils/types";
import { useFetch } from "../hooks/useFetch";
import scoresTableReducer, { actionType } from "../reducers/scoresTableReducer";

export type GroupsProviderProps = {
  children: ReactNode;
};

export type GroupContextData = {
  filteredGroupTeams: Team[];
  filteredGroupPhaseMatches: Match[];
  selectedGroup: LetraGrupo;
  setSelectedGroup: React.Dispatch<React.SetStateAction<LetraGrupo>>;
  matchDates: string[];
  scoresTableData: TableData;
};

export const GroupContext = createContext<GroupContextData>({
  filteredGroupPhaseMatches: [],
  filteredGroupTeams: [],
  selectedGroup: "C",
  setSelectedGroup: (initial) => {},
  matchDates: [],
  scoresTableData: [],
});

const GroupsProvider: React.FC<GroupsProviderProps> = ({ children }) => {
  const { data: fixture } = useFetch<Match>(
    "https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/fechas.json"
  );
  const { data: teams } = useFetch<Team>(
    "https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/diccEquipos.json"
  );

  const [selectedGroup, setSelectedGroup] = useState<LetraGrupo>("C");
  const [scoresTableData, dispatch] = useReducer(scoresTableReducer, []); // replace with reducer

  const filteredGroupPhaseMatches = useMemo(
    () =>
      fixture.filter(
        (match) =>
          match.instancia === "fase-grupos" &&
          match.equipoA.split("")[0] === selectedGroup &&
          match.equipoB.split("")[0] === selectedGroup
      ),
    [fixture, selectedGroup]
  );

  const filteredGroupTeams = useMemo(
    () => teams.filter((team) => team.grupo.split("")[0] === selectedGroup),
    [teams, selectedGroup]
  );

  const matchDates = useMemo(
    () => [...new Set(filteredGroupPhaseMatches.map((match) => match.fecha))],
    [filteredGroupPhaseMatches]
  );

  useEffect(() => {
    if (filteredGroupTeams.length > 0) {
      const scoresInitial = filteredGroupTeams.map((team) => {
        return {
          teamName: team.nombre,
          points: 0,
          playedGames: 0,
          wins: 0,
          ties: 0,
          lost: 0,
          goalsMade: 0,
          goalsRecieved: 0,
          goalDifference: 0,
        };
      });
      dispatch({ type: "initGroupTeams", payload: scoresInitial });
    }
  }, [filteredGroupTeams]);

  return (
    <GroupContext.Provider
      value={{
        filteredGroupTeams,
        filteredGroupPhaseMatches,
        selectedGroup,
        setSelectedGroup,
        matchDates,
        scoresTableData,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export default GroupsProvider;
