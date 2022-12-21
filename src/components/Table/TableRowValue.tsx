import React from "react";

type TableRowValueProps = {
  displayValue: number;
};

const TableRowValue: React.FC<TableRowValueProps> = ({ displayValue }) => {
  return (
    <div className="w-full suecanabold text-[12px] md:text-sm text-main border-r border-r-main py-2 md:py-6">
      <p className="w-[100%] text-center">{displayValue}</p>
    </div>
  );
};

export default TableRowValue;
