import React, { useContext, useMemo } from "react";

import { GroupContext } from "../../contexts/GroupContext";
import TableRow from "./TableRow";

const TableBody = () => {
  const { filteredGroupTeams } = useContext(GroupContext);

  const orderedGroupTeams = useMemo(() => {}, []);

  return (
    <div>
      {filteredGroupTeams.map((team) => (
        <TableRow key={team.nombre} name={team.nombre} />
      ))}
    </div>
  );
};

export default TableBody;
