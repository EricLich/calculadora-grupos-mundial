import React, { useContext, useMemo } from "react";

import { GroupContext } from "../../contexts/GroupContext";
import { TeamPointsTableData } from "../../utils/types";
import TableRow from "./TableRow";

const TableBody = () => {
  const { scoresTableData } = useContext(GroupContext);

  const orderedGroupTeams = useMemo(() => {
    let orderedScores = scoresTableData.sort((a, b) => b.points - a.points); // ordered by points
    let possibleEqualReOrder; // array for possible equal values

    if (orderedScores[0]?.points === orderedScores[1]?.points) {
      possibleEqualReOrder = orderedScores!.map((score) => {
        if (score === orderedScores[0]) {
          return score;
        } else {
          if (score?.points === orderedScores[0]?.points) {
            return score;
          }
        }
      });
    }

    if (possibleEqualReOrder && possibleEqualReOrder?.length > 0) {
      possibleEqualReOrder = possibleEqualReOrder!.sort((a: TeamPointsTableData, b: TeamPointsTableData) => b!.goalDifference - a!.goalDifference);
      orderedScores = [...new Set([...possibleEqualReOrder, ...orderedScores])].filter((score) => score);

      if (orderedScores[0]?.goalDifference === orderedScores[1]?.goalDifference) {
        possibleEqualReOrder = orderedScores!.map((score) => {
          if (score === orderedScores[0]) {
            return score;
          } else {
            if (score?.goalDifference === orderedScores[0]?.goalDifference) {
              return score;
            }
          }
        });
      }

      if (possibleEqualReOrder && possibleEqualReOrder?.length > 0) {
        possibleEqualReOrder = possibleEqualReOrder!.sort((a: TeamPointsTableData, b: TeamPointsTableData) => b!.goalsMade - a!.goalsMade);
        orderedScores = [...new Set([...possibleEqualReOrder, ...orderedScores])].filter((score) => score);
      }
    }

    return orderedScores;
  }, [scoresTableData]);

  return (
    <div>
      {orderedGroupTeams.map((team) => (
        <TableRow key={team.teamName} teamScore={team} />
      ))}
    </div>
  );
};

export default TableBody;
