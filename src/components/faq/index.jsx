import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Illustrator from "../../.././public/illustration.png";

import Question from "./Questions";

const Faq = () => {
  return (
    <div className="w-full flex  h-auto  md:mt-10">
      <div className=" w-[100%] md:flex-row-reverse  flex  flex-col">
        <div className="flex justify-center md:w-[50%]">
          <img src={Illustrator} alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className=" bg-blue-700 flex justify-center md:w-[50%]">
          <div className="flex flex-col w-[100%]   justify-center">
            <div className="flex p-10 justify-center flex-col md:pl-[70px] ">
              <h1 className="text-5xl text-start mb-5 text-white">FAQs</h1>
              <Question
                text="Lorem ipsum dolor sit amet,, consequatur, ad sed necessitatibus
              corporis earum vero quo aliquam eveniet! Deserunt!"
              />
              <Question
                text="  ipsum dolor sit amet,, consequatur, ad sed necessitatibus
              corporis earum vero quo aliquam eveniet! Deserunt!"
              />
              <Question
                text=" Lorem ipsum dolor sit amet,, consequatur, ad sed necessitatibus
              corporis earum vero quo aliquam eveniet! Deserunt!"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
