import React, { useContext, useMemo } from "react";

import { GroupContext } from "../../contexts/GroupContext";
import { TableData, TeamPointsTableData } from "../../utils/types";
import TableRow from "./TableRow";

const TableBody = () => {
  const { scoresTableData } = useContext(GroupContext);

  /* const orderByWins = (scores: TableData): TableData => {
    for (let i: number = 0; i < scores.length; i++) {
      let tempScore = scores[i];
      if (scores[i]?.teamName?.includes(scores[i + 1]?.teamName)) {
        //check who's the winner and then shift places in array
        const otherTeamWinner = scores[i]?.matchesPlayed?.find((match) => match?.teams?.includes(scores[i + 1]?.teamName));
        if (otherTeamWinner?.winner === scores[i + 1]?.teamName) {
          scores[i] = scores[i + 1];
          scores[i + 1] = tempScore;
        }
      }
    }
    return scores;
  }; */

  const orderedGroupTeams = useMemo(() => {
    let orderedScores = scoresTableData.sort((a, b) => b.points - a.points); // ordered by points
    let possibleEqualReOrder; // array for possible equal values

    if (orderedScores[0]?.points === orderedScores[1]?.points) {
      possibleEqualReOrder = orderedScores.map((score) => {
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

        /* if (orderedScores[0].goalsMade === orderedScores[1].goalsMade) {
          orderedScores = orderByWins(orderedScores);
        } */
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
