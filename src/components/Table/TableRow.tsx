import React from "react";
import { tableHeadTags } from "../../utils/types";

type TableRowProps = {
  name: string;
};

const TableRow: React.FC<TableRowProps> = ({ name }) => {
  return (
    <div className="flex w-full justify-between border-b border-b-main ">
      <div className="w-[30%] border-r border-r-main">
        <h3 className="suecanabold text-sm text-main   text-left py-4">
          {name}
        </h3>
      </div>
      <div className="flex w-[70%] items-cennter justify-between">
        {Object.values(tableHeadTags).map((tag) => (
          <div
            key={Object.values(tag)[1]}
            title={Object.values(tag)[1]}
            className="w-full suecanabold text-sm text-main border-r border-r-main py-5"
          >
            <p className="w-[100%] text-center">0</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableRow;
