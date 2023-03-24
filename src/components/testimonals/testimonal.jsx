import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
const Testimonial = ({ testimonal }) => {
  return (
    <div
      className={`md:w-[60%]  w-[100%] text-centert bg-white  rounded p-2 m-5 `}
    >
      <p className="text-[13px]">{testimonal.text}</p>
      <h3 className="text-blue-900 mt-2 mb-2">{testimonal.name}</h3>
      <AiFillStar className="icon-start" />
      <AiFillStar className="icon-start" />
      <AiFillStar className="icon-start" />
      <AiFillStar className="icon-start" />
      <AiOutlineStar className="ico-start" />
    </div>
  );
};

export default Testimonial;
