import React, { useContext } from "react";
import { GroupContext } from "./contexts/GroupContext";
import { groupsTuple, LetraGrupo } from "./utils/types";

const App = () => {
  const { filteredGroupTeams, selectedGroup, setSelectedGroup } =
    useContext(GroupContext);

  const handleGroupSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSelectedGroup((prev) => (prev = e.target.value as LetraGrupo));
  };

  return (
    <div>
      <select onChange={handleGroupSelect} value={selectedGroup}>
        {groupsTuple.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
      {filteredGroupTeams.map((team, index: number) => (
        <p className="suecanabold text-2xl" key={team.id}>
          {team.nombre}
        </p>
      ))}
    </div>
  );
};

export default App;
