import React from "react";
import Button from "../button";
const FinTech = () => {
  return (
    <div>
      <div>
        <div>
          <p>Pay,Invest,Save,your Cash with a Single bank</p>
        </div>
      </div>
      <p>
        finteckk is the bank that does it all.manager everything directly and
        its easy with fiteckk
      </p>
      <Button className="bg-blue-700 justify-center text-white w-[160px] p-1 rounded-lg text-[15px] font-bold hidden md:flex">
        Sign up for free
      </Button>
      <div>
        <Button className="text-gray-500 p-1 rounded-lg border-2 border-solid">
          Get on Android
        </Button>
        <Button className="text-gray-500 p-1 rounded-lg border-2 border-solid">
          Get on Iphone
        </Button>
      </div>
      <div></div>
    </div>
  );
};

export default FinTech;
