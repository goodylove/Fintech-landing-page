import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Illustrator from "../../.././public/illustration.png";

import Question from "./Questions";
const Faq = () => {
  return (
    <div className="w-full flex justify-center mt-[54%] md:mt-10">
      <div className="flex w-[100%] justify-center h-[400px] flex-col-reverse  md:flex-row ">
        <div className=" bg-blue-700 flex justify-center md:w-[50%]">
          <div className="flex flex-col w-[100%]   justify-center">
            <div className="flex p-10 justify-center flex-col md:pl-[70px] ">
              <h1 className="text-5xl text-start mb-5 text-white">FAQs</h1>
              <Question />
              <Question />
              <Question />
            </div>
          </div>
        </div>
        <div className="flex justify-center md:w-[50%]">
          <img src={Illustrator} alt="" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
