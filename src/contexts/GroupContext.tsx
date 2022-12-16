import React, { createContext, ReactNode, useMemo, useState } from "react";

import { LetraGrupo, Match, Team } from "../utils/types";
import { useFetch } from "../hooks/useFetch";

export type GroupsProviderProps = {
  children: ReactNode;
};

export type GroupContextData = {
  filteredGroupTeams: Team[];
  filteredGroupPhaseMatches: Match[];
  selectedGroup: LetraGrupo;
  setSelectedGroup: React.Dispatch<React.SetStateAction<LetraGrupo>>;
};

export const GroupContext = createContext<GroupContextData>({
  filteredGroupPhaseMatches: [],
  filteredGroupTeams: [],
  selectedGroup: "C",
  setSelectedGroup: (initial) => {},
});

const GroupsProvider: React.FC<GroupsProviderProps> = ({ children }) => {
  const {
    data: fixture,
    loading: loadingFixture,
    error: errorFixture,
  } = useFetch<Match>(
    "https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/fechas.json"
  );
  const {
    data: teams,
    loading: loadingTeams,
    error: errorTeams,
  } = useFetch<Team>(
    "https://especialess3.lanacion.com.ar/22/03/mundial2022-fixture/data/diccEquipos.json"
  );

  const [selectedGroup, setSelectedGroup] = useState<LetraGrupo>("C");

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

  return (
    <GroupContext.Provider
      value={{
        filteredGroupTeams,
        filteredGroupPhaseMatches,
        selectedGroup,
        setSelectedGroup,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export default GroupsProvider;
