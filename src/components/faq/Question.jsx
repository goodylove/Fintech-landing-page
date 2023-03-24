import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Question = ({ content, title, activeTitle, onToggle }) => {
  const isActive = activeTitle === title;
  // console.log(isActive);

  return (
    <div>
      <div className="flex justify-center w-full flex-col">
        <div className="text-start relative md:w-[70%]">
          <div
            className="border-[1px] rounded text-white text-sm flex   md:p-[18px]  justify-between items-center border-solid border-y-cyan-50 m-2 p-[10px]"
            onClick={() => onToggle(title)}
          >
            <span className={isActive ? "title active" : "title"}>{title}</span>
          </div>

          <div
            className={`rounded bg-white text-sm p-3 ${
              isActive ? "visible" : "hidden"
            }`}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Question;
