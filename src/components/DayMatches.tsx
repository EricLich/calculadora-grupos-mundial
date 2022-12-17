import React from "react";

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
  const formattedDate: Date = new Date(date);

  return (
    <div className="w-[32%] border-b border-gray-300 pr-2 py-[14px] ">
      <h3 className="text-start suecaslabmedium text-sm text-gray-500">
        {DIAS[formattedDate.getDay()].toUpperCase()} {date.split("-")[2]} DE{" "}
        {MESES[formattedDate.getMonth()]}
      </h3>
    </div>
  );
};

export default DayMatches;
