import React from "react";

import TableBody from "./TableBody";
import TableHead from "./TableHead";

const ResultsTable = () => {
  return (
    <div className="w-full md:px-2">
      <TableHead />
      <TableBody />
    </div>
  );
};

export default ResultsTable;
