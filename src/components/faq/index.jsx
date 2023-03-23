import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Illustrator from "../../.././public/illustration.png";

import Question from "./Question";

const questions = [
  {
    title: "Is fintekk’s security guaranteed?",
    content:
      "lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui et dolorum sint ipsam, quos ut, tempora eaque, cum distinctio ex delectu",
  },
  {
    title: "How to activate Fintekk account",
    content:
      "orem  dolor, sit amet consectetur adipisicing elit. Qui et dolorum sint ipsam, quos ut, tempora eaque, cum distinctio ex delectu",
  },
  {
    title: "What should i do if i forget my pin",
    content:
      " ipsum dolor, sit amet consectetur adipisicing elit. Qui et dolorum sint ipsam, quos ut, tempora eaque, cum distinctio ex delectu",
  },
];

const useAccordionList = () => {
  const [activeTitle, seActiveTitle] = useState(null);

  // const handleActive = (title) => {
  //   console.log(activeTitle);
  //   seActiveTitle((prev) => (prev === title ? null : title));
  // };
  const handleActive = (title) => {
    seActiveTitle((prev) => (prev == title ? null : title));
  };

  return {
    activeTitle,
    handleActive,
  };
};

const Faq = () => {
  const { activeTitle, handleActive } = useAccordionList();

  return (
    <div className="w-full flex  h-auto  md:mt-10">
      <div className=" w-[100%]  h-[545px] md:flex-row-reverse  flex  flex-col">
        <div className="flex justify-center md:w-[658px] h-[100%]">
          <img src={Illustrator} alt="" className="w-[100%] h-[100%]" />
        </div>
        <div className=" bg-blue-700 flex justify-center md:w-[782px] h-[100%]">
          <div className="flex flex-col w-[100%] justify-center">
            <div className="flex p-10 justify-center flex-col md:pl-[70px] ">
              <h1 className="text-5xl text-start mb-5 text-white">FAQs</h1>

              {questions.map((question) => (
                <Question
                  key={question.title}
                  activeTitle={activeTitle}
                  onToggle={handleActive}
                  {...question}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
