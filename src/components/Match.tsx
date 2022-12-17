import React, { useContext, useEffect, useState } from "react";

import { GroupContext } from "../contexts/GroupContext";
import { Team } from "../utils/types";

type MatchProps = {
  team1: Team;
  team2: Team;
};

const Match: React.FC<MatchProps> = ({ team1, team2 }) => {
  const { scoresTableData, dispatch } = useContext(GroupContext);
  const [team1Goals, setTeam1Goals] = useState<number>();
  const [team2Goals, setTeam2Goals] = useState<number>();

  const handleGoals = (e: React.ChangeEvent<HTMLInputElement>, teamNumber: number): void => {
    if (teamNumber === 1) setTeam1Goals(parseInt(e.target.value));

    if (teamNumber === 2) setTeam2Goals(parseInt(e.target.value));
  };

  const handleTeamSoresUpdate = (): void => {
    let team1Scores = scoresTableData.filter((data) => data.teamName === team1.nombre)[0];
    let team2Scores = scoresTableData.filter((data) => data.teamName === team2.nombre)[0];

    console.log(team1Scores, team1Scores);

    dispatch({
      type: "teamUpdate",
      payload: {
        teamScore: {
          ...team1Scores,
          //@ts-ignore
          goalsMade: team1Scores.goalsMade + team1Goals,
          //@ts-ignore
          goalsRecieved: team1Scores.goalsRecieved + team2Goals,
          //@ts-ignore
          goalsDifference: team1Scores.goalsMade + team1Goals - (team1Scores.goalsRecieved + team2Goals),
          points: updateTeamPoints(team1Scores.points),
        },
      },
    });

    dispatch({
      type: "teamUpdate",
      payload: {
        teamScore: {
          ...team2Scores,
          //@ts-ignore
          goalsMade: team2Scores.goalsMade + team1Goals,
          //@ts-ignore
          goalsRecieved: team2Scores.goalsRecieved + team1Goals,
          //@ts-ignore
          goalsDifference: team2Scores.goalsMade + team2Goals - (team1Scores.goalsRecieved + team1Goals),
          points: updateTeamPoints(team2Scores.points),
        },
      },
    });
  };

  const updateTeamPoints = (teamPoints: number): number => {
    if (team1Goals && team2Goals) {
      if (team1Goals > team2Goals) return teamPoints + 3;
      if (team1Goals > team2Goals) return teamPoints + 1;
      if (team1Goals < team2Goals) return teamPoints + 0;
    }
    return 0;
  };

  useEffect(() => {
    if (team1Goals && team2Goals) {
      handleTeamSoresUpdate();
    }
  }, [team1Goals, team2Goals]);

  return (
    <div className="w-full h-full flex flex-col bg-main rounded-md p-2">
      <div className="w-full flex justify-between items-end py-3 border-b border-white">
        <p className="flex suecanabold text-white text-lg">{team1?.nombre.toUpperCase()}</p>
        <input
          type="number"
          name="goalsMade"
          className="bg-red-600 w-[20%] text-white rounded-md p-1 pr-2 text-right suecaslabbold text-lg focus:outline-none"
          onChange={(e) => handleGoals(e, 1)}
        />
      </div>
      <div className="w-full flex justify-between items-end py-3 border-b border-white">
        <p className="flex suecanabold text-white text-lg">{team2?.nombre.toUpperCase()}</p>
        <input
          type="number"
          name="goalsMade"
          className="bg-red-600 w-[20%] text-white rounded-md p-1 pr-2 text-right suecaslabbold text-lg focus:outline-none"
          onChange={(e) => handleGoals(e, 2)}
        />
      </div>
    </div>
  );
};

export default Match;
