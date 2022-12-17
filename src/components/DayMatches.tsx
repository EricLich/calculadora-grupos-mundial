import React, { useContext, useMemo } from "react";
import { GroupContext } from "../contexts/GroupContext";
import { Team } from "../utils/types";
import Match from "./Match";

type DayMatchesProps = {
  date: string;
};

const DIAS: string[] = [
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
  "Domingo",
];

const MESES: string[] = [
  "ENERO",
  "FEBRERO",
  "MARZO",
  "ABRIL",
  "MAYO",
  "JUNIO",
  "JULIO",
  "AGOSTO",
  "SEPTIEMBRE",
  "OCTUBRE",
  "NOVIEMBRE",
  "DICIEMBRE",
];

const DayMatches: React.FC<DayMatchesProps> = ({ date }) => {
  const formattedDate = new Date(date);
  const { selectedGroup, filteredGroupPhaseMatches, filteredGroupTeams } =
    useContext(GroupContext);

  const filteredDayMatches = useMemo(
    () => filteredGroupPhaseMatches.filter((match) => match.fecha === date),
    [selectedGroup]
  );

  return (
    <div className="w-[32%] h-full flex flex-col">
      <div className=" border-b border-gray-300 pr-2 py-[14px] ">
        <h3 className="text-start suecaslabmedium text-sm text-gray-500">
          {DIAS[formattedDate.getDay()].toUpperCase()} {date.split("-")[2]} DE{" "}
          {MESES[formattedDate.getMonth()]}
        </h3>
      </div>
      <div className="px-2 pt-4 flex flex-col items-center justify-center gap-2 h-full">
        {filteredDayMatches.map((specificMatch) => {
          let team1 = filteredGroupTeams.filter(
            (team) => team.grupo === specificMatch.equipoA
          )[0];
          let team2 = filteredGroupTeams.filter(
            (team) => team.grupo === specificMatch.equipoB
          )[0];

          return (
            <Match key={specificMatch.idpartido} team1={team1} team2={team2} />
          );
        })}
      </div>
    </div>
  );
};

export default DayMatches;
