import React, { useContext } from "react";
import { GroupContext } from "../contexts/GroupContext";
import { groupsTuple, LetraGrupo } from "../utils/types";

const GroupLetterSelector = () => {
  const { selectedGroup, setSelectedGroup } = useContext(GroupContext);

  const handleGroupSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedGroup((prev) => (prev = e.target.value as LetraGrupo));
  };
  return (
    <select
      onChange={handleGroupSelect}
      value={selectedGroup}
      className="h-full suecaslabextralight text-xl text-gray-500"
    >
      {groupsTuple.map((group) => (
        <option key={group} value={group}>
          {group}
        </option>
      ))}
    </select>
  );
};

export default GroupLetterSelector;
