import React, { useEffect, useState } from "react";
import Testimonial from "./testimonal";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

import { BsArrowDownShort } from "react-icons/bs";
import { AiOutlineArrowUp } from "react-icons/ai";

const testimonial = [
  {
    text: "Lorem ipsum dolor sit amet . Repellat qui voluptatum voluptatibus a error facere quia, minus laborum libero eveniet id nulla?",
    name: "goodness",
    id: 1,
  },
  {
    text: "ipsum dolor sit amet consectetur,ui voluptatum voluptatibus a error facere quia, minus laborum libero eveniet id nulla?",
    name: "esther",
    id: 2,
  },
  {
    text: "orem ipsum dolor sit amet consectetur, adipisicing elit.oluptatum voluptatibus a error facere quia, minus laborum libero eveniet id nulla?",
    name: "joy",
    id: 3,
  },
];

const Testimonials = () => {
  const [currentTestimonal, setCurrentTestimonal] = useState(0);
  const [translation, setTransaction] = useState(false);
  let testimonalLength = testimonial.length;

  const upArrow = () => {
    setCurrentTestimonal(
      currentTestimonal === testimonalLength - 1 ? 0 : currentTestimonal + 1
    );
    setTransaction(true);
    console.log(testimonalLength, currentTestimonal);
  };
  const downArrow = () => {
    setCurrentTestimonal(
      currentTestimonal === 0 ? testimonalLength - 1 : currentTestimonal - 1
    );
  };
  useEffect(() => {
    setCurrentTestimonal(0);
  }, []);

  return (
    <div className="flex  mt-10 bg-gray-100 w-full p-10">
      <div className="flex justify-between w-[90%] items-center  flex-col md:flex-row">
        <div className="md:text-start md:w-[40%] text-center w-[86%]">
          <h2 className="">TESTIMONIALS</h2>
          <p className="text-3xl text-blue-800">
            What Our Customers Says About Us
          </p>
        </div>
        {testimonial.map(
          (testimonal, index) =>
            index === currentTestimonal && (
              <Testimonial
                testimonal={testimonal}
                key={index}
                translation={translation}
              />
            )
        )}

        <div className="flex md:flex-col text-blue-800  items-center md:w-[20%] flex-row w-[40%] m-5 justify-between  ">
          <AiOutlineArrowUp className="mb-1" onClick={upArrow} />
          <div
            className={
              currentTestimonal === 0
                ? "bg-blue-500 h-5 w-5 rounded-full text-[13px] text-white"
                : ""
            }
          >
            1
          </div>
          <div
            className={
              currentTestimonal === 1
                ? "bg-blue-500 h-5 w-5 rounded-full text-[13px] text-white"
                : ""
            }
          >
            2
          </div>
          <div
            className={
              currentTestimonal === 2
                ? "bg-blue-500 h-5 w-5 rounded-full text-[13px] text-white"
                : ""
            }
          >
            3
          </div>

          <BsArrowDownShort className="mt-1" onClick={downArrow} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
