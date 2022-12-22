import React from "react";
import { TeamPointsTableData } from "../../utils/types";
import TableRowValue from "./TableRowValue";

type TableRowProps = {
  teamScore: TeamPointsTableData;
};

const TableRow: React.FC<TableRowProps> = ({ teamScore }) => {
  return (
    <div className="flex w-full justify-between border-b border-b-main ">
      <div className="w-[30%] border-r border-r-main">
        <h3 className="suecanabold text-sm text-main text-left py-2 md:py-6">{teamScore.teamName}</h3>
      </div>
      <div className="flex w-[70%] items-cennter justify-between">
        <TableRowValue displayValue={teamScore.points} />
        <TableRowValue displayValue={teamScore.matchesPlayed.length} />
        <TableRowValue displayValue={teamScore.wins} />
        <TableRowValue displayValue={teamScore.ties} />
        <TableRowValue displayValue={teamScore.lost} />
        <TableRowValue displayValue={teamScore.goalsMade} />
        <TableRowValue displayValue={teamScore.goalsRecieved} />
        <TableRowValue displayValue={teamScore.goalDifference} />
      </div>
    </div>
  );
};

export default TableRow;
