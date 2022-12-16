import { useContext } from "react";
import { GroupContext } from "../contexts/GroupContext";

const GroupLetter = () => {
  const { selectedGroup } = useContext(GroupContext);

  return <h1 className="suecaslabbold text-8xl text-main ">{selectedGroup}</h1>;
};

export default GroupLetter;
