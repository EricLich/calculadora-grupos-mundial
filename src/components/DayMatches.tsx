import React, { useContext, useMemo } from "react";

import { GroupContext } from "../contexts/GroupContext";
import Match from "./Match";

type DayMatchesProps = {
  date: string;
  index: number;
};

const DIAS: string[] = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

const MESES: string[] = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];

const DayMatches: React.FC<DayMatchesProps> = ({ date, index }) => {
  const formattedDate = new Date(date);
  const { selectedGroup, filteredGroupPhaseMatches, filteredGroupTeams } = useContext(GroupContext);

  const filteredDayMatches = useMemo(() => filteredGroupPhaseMatches.filter((match) => match.fecha === date), [selectedGroup]);
  const rightLineStyle: string = `md:after:content-[''] md:after:absolute md:after:h-full md:after:w-[1px] md:after:bg-gray-200 md:after:-right-2`;
  const leftLineStyle: string = `md:before:content-[''] md:before:absolute md:before:h-full md:before:w-[1px] md:before:bg-gray-200 md:before:-left-[6px]`;

  return (
    <div className="w-full mt-3 md:mt-0 md:w-[32%] h-full flex flex-col">
      <div className="md:border-b md:border-gray-300 pr-2 py-1 md:py-[14px] ">
        <h3 className="text-start suecaslabextralight text-md md:text-sm text-gray-500">
          {DIAS[formattedDate.getDay()].toUpperCase()} {date.split("-")[2]} DE {MESES[formattedDate.getMonth()]}
        </h3>
      </div>
      <div
        className={`md:px-2 mb-2 md:mb-0 md:pt-4 flex flex-col items-center justify-center gap-[2px] md:gap-2 h-full relative ${
          index < 2 ? rightLineStyle : ""
        } ${index === 0 ? leftLineStyle : ""}`}
      >
        {filteredDayMatches.map((specificMatch) => {
          let team1 = filteredGroupTeams.filter((team) => team.grupo === specificMatch.equipoA)[0];
          let team2 = filteredGroupTeams.filter((team) => team.grupo === specificMatch.equipoB)[0];

          return <Match key={specificMatch["numero-partido"]} team1={team1} team2={team2} />;
        })}
      </div>
    </div>
  );
};

export default DayMatches;
