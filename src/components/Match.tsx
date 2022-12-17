import React from "react";
import { Team } from "../utils/types";

type MatchProps = {
  team1: Team;
  team2: Team;
};

const Match: React.FC<MatchProps> = ({ team1, team2 }) => {
  return (
    <div className="w-full h-full flex flex-col bg-main rounded-md p-2">
      <div className="w-full flex justify-between items-end py-3 border-b border-white">
        <p className="flex suecanabold text-white text-lg">
          {team1?.nombre.toUpperCase()}
        </p>
        <input
          type="number"
          className="bg-red-600 w-[20%] text-white rounded-md p-1 pr-2 text-right suecaslabbold text-lg focus:outline-none"
        />
      </div>
      <div className="w-full flex justify-between items-end py-3 border-b border-white">
        <p className="flex suecanabold text-white text-lg">
          {team2?.nombre.toUpperCase()}
        </p>
        <input
          type="number"
          className="bg-red-600 w-[20%] text-white rounded-md p-1 pr-2 text-right suecaslabbold text-lg focus:outline-none"
        />
      </div>
    </div>
  );
};

export default Match;
