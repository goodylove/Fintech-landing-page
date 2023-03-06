import React from "react";
import Button from "../button";
import Floating from "../../../public/card.png";
const FinTech = () => {
  return (
    <div className="md:w-[100%] md:flex justify-center items-center pl-10 pr-10">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="flex flex-col  text-start  items-center">
          <div className="w-[97%]">
            <p className=" md:text-5xl text-blue-900 text-2xl mb-4 ">
              Pay,Invest,Save,
              <br />
              your Cash with a<br /> Single bank
            </p>
          </div>

          <p>
            finteckk is the bank that does it all.manager everything directly
            and its easy with fiteckk
          </p>
          <div className="w-[100%] m-5 flex flex-col justify-between items-start ">
            <Button className="bg-blue-700 justify-center text-white w-[150px] p-2 rounded-lg text-[14px] font-bold md:flex  mt-3 mb-5">
              Sign up for free
            </Button>
            <div>
              <Button className="text-gray-500 p-1 rounded-lg border-2 border-solid  mr-10 mb-5">
                Get on Android
              </Button>
              <Button className="text-gray-500 p-1 rounded-lg border-2 border-solid">
                Get on Iphone
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img src={Floating} alt="payment" />
        </div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  );
};

export default FinTech;
