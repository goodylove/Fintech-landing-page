import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="flex justify-center mt-10 bg-gray-100 w-full p-10">
      <div className="flex justify-between w-[90%] items-center">
        <div className="text-start w-[40%]">
          <h2 className="">TESTIMONIALS</h2>
          <p className="text-3xl text-blue-800">
            What Our Customers Says About Us
          </p>
        </div>
        {/* testimonials */}
        <div className="w-[40%] text-start bg-white  rounded p-2">
          <p className="text-[13px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat
            qui voluptatum voluptatibus a error facere quia, minus laborum
            libero eveniet id nulla?
          </p>
          <h3 className="text-blue-900 mt-2 mb-2">Glory nwaimoh</h3>
          <AiFillStar className="icon-start" />
          <AiFillStar className="icon-start" />
          <AiFillStar className="icon-start" />
          <AiFillStar className="icon-start" />
          <AiOutlineStar className="ico-start" />
        </div>
        <div className="flex flex-col text-blue-800  items-center w-[20%]">
          <AiOutlineArrowUp className="mb-1" />
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <BsArrowDownShort className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
