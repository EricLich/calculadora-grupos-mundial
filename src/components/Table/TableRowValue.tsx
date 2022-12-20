import React from "react";

type TableRowValueProps = {
  displayValue: number;
};

const TableRowValue: React.FC<TableRowValueProps> = ({ displayValue }) => {
  return (
    <div className="w-full suecanabold text-sm text-main border-r border-r-main py-5">
      <p className="w-[100%] text-center">{displayValue}</p>
    </div>
  );
};

export default TableRowValue;
