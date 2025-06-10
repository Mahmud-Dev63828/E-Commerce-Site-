import React from "react";

const Heading = ({ title, description = true }) => {
  return (
    <div className="flex flex-col items-start gap-y-6">
      <div className="flex items-center gap-x-4">
        <span className="w-[20px] h-[40px] rounded bg-accentRed block"></span>
        <span className="font-poppins font-semibold text-md text-accentRed capitalize ">
          {title ? title : "Today’s"}
        </span>
      </div>
      <div>
        {description && (
          <h1 className="font-inter font-semibold text-[36px] text-textPrimary capitalize">
            {description ? description : "Flash Sales"}
          </h1>
        )}
      </div>
    </div>
  );
};

export default Heading;
