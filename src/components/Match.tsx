// @ts-nocheck
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
    if (teamNumber === 1) {
      if (e.target.value !== "") {
        setTeam1Goals(parseInt(e.target.value));
      } else {
        setTeam1Goals(undefined);
      }
    }
    if (teamNumber === 2) {
      if (e.target.value !== "") {
        setTeam2Goals(parseInt(e.target.value));
      } else {
        setTeam2Goals(undefined);
      }
    }
  };

  const handleTeamSoresUpdate = async (): Promise<void> => {
    const team1Scores = scoresTableData.filter((data) => data.teamName === team1.nombre)[0];
    const team2Scores = scoresTableData.filter((data) => data.teamName === team2.nombre)[0];

    let matchResultForTeam1 = updateTeamPoints(team1Scores.points, 1);
    let matchResultForTeam2 = updateTeamPoints(team2Scores.points, 2);

    dispatch({
      type: "teamUpdate",
      payload: {
        teamScore: {
          ...team1Scores,
          goalsMade: team1Scores.goalsMade + team1Goals,
          goalsRecieved: team1Scores.goalsRecieved + team2Goals,
          goalDifference: team1Scores.goalsMade + team1Goals - (team1Scores.goalsRecieved + team2Goals),
          points: matchResultForTeam1[0],
          wins: matchResultForTeam1[1] === "win" ? team1Scores.wins + 1 : team1Scores.wins,
          ties: matchResultForTeam1[1] === "tie" ? team1Scores.ties + 1 : team1Scores.ties,
          lost: matchResultForTeam1[1] === "lost" ? team1Scores.lost + 1 : team1Scores.lost,
          matchesPlayed: [
            ...team1Scores.matchesPlayed,
            {
              teams: [team1.nombre, team2.nombre],
              winner: team1Goals > team2Goals ? team1.nombre : "",
            },
          ],
        },
      },
    });

    dispatch({
      type: "teamUpdate",
      payload: {
        teamScore: {
          ...team2Scores,
          goalsMade: team2Scores.goalsMade + team2Goals,
          goalsRecieved: team2Scores.goalsRecieved + team1Goals,
          goalDifference: team2Scores.goalsMade + team2Goals - (team2Scores.goalsRecieved + team1Goals),
          points: matchResultForTeam2[0],
          wins: matchResultForTeam2[1] === "win" ? team2Scores.wins + 1 : team2Scores.wins,
          ties: matchResultForTeam2[1] === "tie" ? team2Scores.ties + 1 : team2Scores.ties,
          lost: matchResultForTeam2[1] === "lost" ? team2Scores.lost + 1 : team2Scores.lost,
          matchesPlayed: [
            ...team2Scores.matchesPlayed,
            {
              teams: [team1.nombre, team2.nombre],
              winner: team2Goals > team1Goals ? team2.nombre : "",
            },
          ],
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
    <div className="w-full h-full flex md:flex-col gap-4 bg-main rounded-md p-2">
      <div className="w-full flex justify-between items-center md:items-end  py-1 md:py-3 md:border-b border-white">
        <p className="flex suecanabold text-white text-sm md:text-lg">{team1?.nombre.toUpperCase()}</p>
        <input
          type="number"
          name="goalsMade"
          className="bg-red-600 w-[30%] md:w-[20%] text-white rounded-md p-1 pr-2 text-right suecaslabbold text-lg focus:outline-none"
          onChange={(e) => handleGoals(e, 1)}
        />
      </div>
      <div className="w-full flex justify-between items-center md:items-end  py-1 md:py-3 md:border-b border-white">
        <p className="flex suecanabold text-white text-sm md:text-lg">{team2?.nombre.toUpperCase()}</p>
        <input
          type="number"
          name="goalsMade"
          className="bg-red-600 w-[30%] md:w-[20%] text-white rounded-md p-1 pr-2 text-right suecaslabbold text-lg focus:outline-none"
          onChange={(e) => handleGoals(e, 2)}
        />
      </div>
    </div>
  );
};

export default Match;
