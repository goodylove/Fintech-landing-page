import React, { useState } from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import Illustrator from "../../.././public/illustration.png";
const Faq = () => {
  const [show, setShow] = useState(false);
  const [icon, setIcon] = useState(false);

  const handleClick = (id) => {
    setIcon((prev) => {
      return !prev;
    });
  };

  return (
    <div className="w-full flex justify-center mt-[54%] md:mt-10">
      <div className="flex w-[100%] justify-center h-[400px] flex-col-reverse  md:flex-row ">
        <div className=" bg-blue-700 flex justify-center md:w-[50%]">
          <div className="flex flex-col w-[100%]   justify-center">
            <div className="flex p-10 justify-center flex-col md:pl-[70px] ">
              <h1 className="text-5xl text-start mb-5 text-white">FAQs</h1>
              <ul className="flex justify-center w-full flex-col">
                <li className="text-start relative md:w-[70%]" id="">
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
                  {/* <div
                    className={`rounded absolute top-[42px] z-10 bg-white text-sm p-6 translate-y-3 transition 
                     
                     `}
                  >
                    Lorem ipsum dolor sit amet,, consequatur, ad sed
                    necessitatibus corporis earum vero quo aliquam eveniet!
                    Deserunt!
                  </div> */}
                </li>
                <li className="text-start relative md:w-[70%]">
                  <div className="border-[1px] rounded text-white text-sm  flex justify-between  items-center  border-solid border-y-cyan-50  m-2 p-[18px]">
                    <span>is fintekk security gurnateed</span>
                    <div>
                      {icon ? (
                        <AiOutlineDown onClick={handleClick} />
                      ) : (
                        <AiOutlineUp onClick={handleClick} />
                      )}
                    </div>
                  </div>
                  {/* <div
                    className={`rounded absolute top-[42px] z-10 bg-white text-sm p-6 translate-y-3 transition 
                     
                     `}
                  >
                    Lorem ipsum dolor sit amet,, consequatur, ad sed
                    necessitatibus corporis earum vero quo aliquam eveniet!
                    Deserunt!
                  </div> */}
                </li>
                <li className="text-start md:w-[70%]">
                  <div className="border-[1px] rounded text-white text-sm  flex items-center justify-between  border-solid border-y-cyan-50  m-2 p-[18px]">
                    <span> is fintekk security gurnateed</span>
                    <div>
                      {icon ? (
                        <AiOutlineDown onClick={handleClick} />
                      ) : (
                        <AiOutlineUp onClick={handleClick} />
                      )}
                    </div>
                  </div>
                  {/* <div
                    className={`rounded absolute top-[42px] z-10 bg-white text-sm p-6 translate-y-3 transition 
                     
                     `}
                  >
                    Lorem ipsum dolor sit amet,, consequatur, ad sed
                    necessitatibus corporis earum vero quo aliquam eveniet!
                    Deserunt!
                  </div> */}
                </li>
              </ul>
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
