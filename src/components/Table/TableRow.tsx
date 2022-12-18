import React from "react";
import { TeamPointsTableData } from "../../utils/types";

type TableRowProps = {
  team: TeamPointsTableData;
};

const TableRow: React.FC<TableRowProps> = ({ team }) => {
  return (
    <div className="flex w-full justify-between border-b border-b-main ">
      <div className="w-[30%] border-r border-r-main">
        <h3 className="suecanabold text-sm text-main   text-left py-4">{team.teamName}</h3>
      </div>
      <div className="flex w-[70%] items-cennter justify-between">
        <div className="w-full suecanabold text-sm text-main border-r border-r-main py-5">
          <p className="w-[100%] text-center">{team.points}</p>
        </div>

        <div className="w-full suecanabold text-sm text-main border-r border-r-main py-5">
          <p className="w-[100%] text-center">{team.playedGames}</p>
        </div>

        <div className="w-full suecanabold text-sm text-main border-r border-r-main py-5">
          <p className="w-[100%] text-center">{team.wins}</p>
        </div>

        <div className="w-full suecanabold text-sm text-main border-r border-r-main py-5">
          <p className="w-[100%] text-center">{team.ties}</p>
        </div>

        <div className="w-full suecanabold text-sm text-main border-r border-r-main py-5">
          <p className="w-[100%] text-center">{team.lost}</p>
        </div>

        <div className="w-full suecanabold text-sm text-main border-r border-r-main py-5">
          <p className="w-[100%] text-center">{team.goalsMade}</p>
        </div>

        <div className="w-full suecanabold text-sm text-main border-r border-r-main py-5">
          <p className="w-[100%] text-center">{team.goalsRecieved}</p>
        </div>
        <div className="w-full suecanabold text-sm text-main border-r border-r-main py-5">
          <p className="w-[100%] text-center">{team.goalDifference}</p>
        </div>
      </div>
    </div>
  );
};

export default TableRow;
