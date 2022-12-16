import React from "react";
import { tableHeadTags } from "../../utils/types";

const TableHeader = () => {
  return (
    <div className="flex w-full justify-between border-b border-b-main">
      <div className="w-[30%]">
        <p className="suecanabold text-sm text-main border-r border-r-main  text-left">
          POSICIONES
        </p>
      </div>
      <div className="flex w-[70%] items-cennter justify-between">
        {Object.values(tableHeadTags).map((tag) => (
          <div
            key={Object.values(tag)[1]}
            title={Object.values(tag)[1]}
            className={`w-[${
              70 / Object.values(tableHeadTags).length - 1
            }%] suecanabold text-sm text-main  inline-block border-r border-r-main`}
          >
            <p className="w-[100%] mx-auto">{Object.values(tag)[0]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableHeader;
