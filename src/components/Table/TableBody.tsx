import React, { useContext, useMemo } from "react";

import { GroupContext } from "../../contexts/GroupContext";
import TableRow from "./TableRow";

const TableBody = () => {
  const { scoresTableData, filteredGroupTeams } = useContext(GroupContext);

  const orderedGroupTeams = useMemo(() => {
    return scoresTableData.sort((a, b) => b.points - a.points);
  }, [scoresTableData]);

  console.log(orderedGroupTeams);

  return (
    <div>
      {orderedGroupTeams.map((team) => (
        <TableRow key={team.teamName} team={team} />
      ))}
    </div>
  );
};

export default TableBody;
