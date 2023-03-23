import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
const Testimonial = () => {
  return (
    <div className="md:w-[40%]  w-[90%]text-start bg-white  rounded p-2 m-5">
      <p className="text-[13px]">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat qui
        voluptatum voluptatibus a error facere quia, minus laborum libero
        eveniet id nulla?
      </p>
      <h3 className="text-blue-900 mt-2 mb-2">Glory nwaimoh</h3>
      <AiFillStar className="icon-start" />
      <AiFillStar className="icon-start" />
      <AiFillStar className="icon-start" />
      <AiFillStar className="icon-start" />
      <AiOutlineStar className="ico-start" />
    </div>
  );
};

export default Testimonial;
