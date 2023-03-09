import React, { useState } from "react";
import Illustrator from "../../.././public/illustration.png";
const Faq = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="w-full flex justify-center mt-10">
      <div className="flex w-[100%]">
        <div className="h-[288px] w-[50%] bg-blue-700 flex justify-center items-center">
          <div className="flex flex-col  md:w-[80%] items-center justify-center">
            <h1 className="text-5xl text-start">FAQ</h1>
            <ul className="">
              <li className="text-start relative">
                <div
                  onClick={() => setShow((prev) => !prev)}
                  className="border-[1px] rounded text-white text-sm  border-solid border-y-cyan-50 p-2 m-2"
                >
                  is fintekk security gurnateed
                </div>
                <div
                  className={`rounded bg-white text-sm p-6 translate-y-3 transition ${
                    show ? "open" : "close"
                  } `}
                >
                  Lorem ipsum dolor sit amet,, consequatur, ad sed
                  necessitatibus corporis earum vero quo aliquam eveniet!
                  Deserunt!
                </div>
              </li>
              {/* <li className="text-start relative">
                <span
                  onClick={() => setShow((prev) => !prev)}
                  className="border-[1px] rounded text-white text-sm  border-solid border-y-cyan-50 p-2 m-2"
                >
                  is fintekk security gurnateed
                </span>
                <span
                  className={`rounded bg-white text-sm p-6 translate-y-3 transition ${
                    show ? "visible" : "invisible"
                  } `}
                >
                  Lorem ipsum dolor sit amet,, consequatur, ad sed
                  necessitatibus corporis earum vero quo aliquam eveniet!
                  Deserunt!
                </span>
              </li>
              <li className="text-start">
                <span
                  onClick={() => setShow((prev) => !prev)}
                  className="border-[1px] rounded text-white text-sm  border-solid border-y-cyan-50 p-2 m-2"
                >
                  is fintekk security gurnateed
                </span>
                <span
                  className={`rounded bg-white text-sm p-6 translate-y-3 transition ${
                    show ? "open" : "close"
                  } `}
                >
                  Lorem ipsum dolor sit amet,, consequatur, ad sed
                  necessitatibus corporis earum vero quo aliquam eveniet!
                  Deserunt!
                </span>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="h-[500px] w-[50%] flex justify-center">
          <img src={Illustrator} alt="" className="w-[100%] h-[100%]" />
        </div>
      </div>
    </div>
  );
};

export default Faq;
