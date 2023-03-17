import React from "react";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { BsArrowDownShort } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

const Testimonials = () => {
  return (
    <div className="flex  mt-10 bg-gray-100 w-full p-10">
      <div className="flex justify-between w-[90%] items-center  flex-col">
        <div className="md:text-start md:w-[40%] text-center w-[86%]">
          <h2 className="">TESTIMONIALS</h2>
          <p className="text-3xl text-blue-800">
            What Our Customers Says About Us
          </p>
        </div>
        {/* testimonials */}
        <div className="md:w-[40%]  w-[90%]text-start bg-white  rounded p-2 m-5">
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
        <div className="flex md:flex-col text-blue-800  items-center md:w-[20%] flex-row w-[40%] m-5 justify-between  ">
          <AiOutlineArrowUp className="mb-1" />
          <div className="bg-blue-500 h-5 w-5 rounded-full text-[13px] text-white">
            1
          </div>
          <div>2</div>
          <div>3</div>
          <BsArrowDownShort className="mt-1" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
