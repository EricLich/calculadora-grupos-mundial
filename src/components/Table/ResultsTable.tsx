import React from "react";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const ResultsTable = () => {
  return (
    <div className="w-full px-2">
      <TableHeader />
      <TableBody />
    </div>
  );
};

export default ResultsTable;
