import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const Question = () => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(false);

  const handleClick = () => {
    setIcon((prev) => {
      return !prev;
    });
    setShow((prev) => {
      return !prev;
    });
  };
  return (
    <div>
      <ul className="flex justify-center w-full flex-col">
        <li className="text-start relative md:w-[70%]">
          <div className="border-[1px] rounded text-white text-sm flex justify-between  items-center  border-solid border-y-cyan-50  m-2 p-[18px]">
            <span> is fintekk security gurnateed</span>
            <div>
              {icon ? (
                <AiOutlineDown onClick={() => handleClick()} />
              ) : (
                <AiOutlineUp onClick={handleClick} />
              )}
            </div>
          </div>
          {show ? (
            <div className="rounded bg-white text-sm p-3 absolute top-10  z-0">
              Lorem ipsum dolor sit amet,, consequatur, ad sed necessitatibus
              corporis earum vero quo aliquam eveniet! Deserunt!
            </div>
          ) : (
            ""
          )}
        </li>
      </ul>
    </div>
  );
};

export default Question;
