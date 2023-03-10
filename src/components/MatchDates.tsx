import React, { useContext } from "react";
import { GroupContext } from "../contexts/GroupContext";
import DayMatches from "./DayMatches";

const MatchDates = () => {
  const { matchDates } = useContext(GroupContext);
  return (
    <div className="w-full h-full flex flex-col md:flex-row md:justify-between items-start">
      {matchDates.map((date, index: number) => (
        <DayMatches key={date} date={date} index={index} />
      ))}
    </div>
  );
};

export default MatchDates;
