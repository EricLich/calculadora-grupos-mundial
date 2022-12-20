import React, { useContext, useEffect, useRef, useState } from "react";

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

  const handleTeamSoresUpdate = async (): Promise<void> => {
    let team1Scores = scoresTableData.filter((data) => data.teamName === team1.nombre)[0];
    let team2Scores = scoresTableData.filter((data) => data.teamName === team2.nombre)[0];

    let matchResultForTeam1 = updateTeamPoints(team1Scores.points, 1);
    let matchResultForTeam2 = updateTeamPoints(team2Scores.points, 2);

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
          goalDifference: team1Scores.goalsMade + team1Goals - (team1Scores.goalsRecieved + team2Goals),
          points: matchResultForTeam1[0],
          playedGames: team1Scores.playedGames + 1,
          wins: matchResultForTeam1[1] === "win" ? team1Scores.wins + 1 : team1Scores.wins,
          ties: matchResultForTeam1[1] === "tie" ? team1Scores.ties + 1 : team1Scores.ties,
          lost: matchResultForTeam1[1] === "lost" ? team1Scores.lost + 1 : team1Scores.lost,
        },
      },
    });

    dispatch({
      type: "teamUpdate",
      payload: {
        teamScore: {
          ...team2Scores,
          //@ts-ignore
          goalsMade: team2Scores.goalsMade + team2Goals,
          //@ts-ignore
          goalsRecieved: team2Scores.goalsRecieved + team1Goals,
          //@ts-ignore
          goalDifference: team2Scores.goalsMade + team2Goals - (team2Scores.goalsRecieved + team1Goals),
          points: matchResultForTeam2[0],
          playedGames: team2Scores.playedGames + 1,
          wins: matchResultForTeam2[1] === "win" ? team2Scores.wins + 1 : team2Scores.wins,
          ties: matchResultForTeam2[1] === "tie" ? team2Scores.ties + 1 : team2Scores.ties,
          lost: matchResultForTeam2[1] === "lost" ? team2Scores.lost + 1 : team2Scores.lost,
        },
      },
    });
  };

  const updateTeamPoints = (teamPoints: number, teamNum: 1 | 2): [number, "win" | "tie" | "lost"] => {
    if (team1Goals !== undefined && team2Goals !== undefined) {
      // have to check with undefined, else a 0 gets detected as falsie and breaks expected behavior
      if (teamNum === 1) {
        if (team1Goals > team2Goals) return [teamPoints + 3, "win"];
        if (team1Goals === team2Goals) return [teamPoints + 1, "tie"];
        if (team1Goals < team2Goals) return [teamPoints + 0, "lost"];
      } else {
        if (team2Goals > team1Goals) return [teamPoints + 3, "win"];
        if (team2Goals === team1Goals) return [teamPoints + 1, "tie"];
        if (team2Goals < team1Goals) return [teamPoints + 0, "lost"];
      }
    }
    return [3, "win"];
  };

  useEffect(() => {
    if (team1Goals !== undefined && team2Goals !== undefined) {
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
