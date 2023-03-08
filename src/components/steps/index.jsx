import React from "react";
import PhoneImg from "../../.././public/Fintekk app- phone.png";
import Button from "../button";
const Steps = () => {
  return (
    <div className="w-[100%] flex justify-center items-center ">
      <div className="md:flex-row flex flex-col justify-around  md:w-[80%] w-full ">
        <div className="flex justify-center">
          <img src={PhoneImg} alt="phone" height="100px" width="260px" />
        </div>
        <div className=" md:w-[35%] ml-5">
          <h2 className=" text-blue-800 font-medium  mb-5 mt-5 text-3xl leading-[3.5rem] md:text-2xl text-start md:leading-[3.4rem] md:tracking-wide">
            Start your journey to reach your financial goals today
          </h2>
          <div className="flex">
            <div className="  pr-[26px] flex flex-col md:pr-[60px]  items-center">
              <span className="text-blue-600 mb-4">01</span>
              <div className="w-[1px] h-[100px] bg-blue-700 text-blue-600"></div>
            </div>
            <div className="flex flex-col ">
              <span className="text-[#172E80] font-bold text-start mb-4">
                Download the mobile app
              </span>
              <div className="text-start text-sm">
                sign up for account with your email phone number
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="  pr-[26px] flex flex-col md:pr-[60px]  items-center">
              <span className="text-blue-600 mb-4">02</span>
              <div className="w-[1px] h-[100px] bg-blue-700 text-blue-600"></div>
            </div>
            <div className="flex flex-col ">
              <span className="text-[#172E80] font-bold text-start mb-4">
                Create a free account
              </span>
              <div className="text-start text-sm">
                sign up for account with your email phone number
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="  pr-[26px] flex flex-col md:pr-[60px]  items-center">
              <span className="text-blue-600 mb-4">03</span>
              {/* <div className="w-[1px] h-[100px] bg-blue-700 text-blue-600"></div> */}
            </div>
            <div className="flex flex-col ">
              <span className="text-[#172E80] font-bold text-start mb-4 ">
                Add a Payment Method
              </span>
              <div className="text-start text-sm">
                Using your debit card, bank account QR,Code perform your your
                first transaction.
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-4">
            <Button className="bg-blue-700 justify-center text-white w-[150px] p-2 rounded-lg text-[14px] font-bold md:flex  mt-3 mb-5">
              Download Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
