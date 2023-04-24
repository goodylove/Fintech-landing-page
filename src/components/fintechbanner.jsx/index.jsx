import React from "react";
import Button from "../button";
import Floating from "../../../public/card.png";
import Apple from "../../../public/Apple_logo_black logo.png";
import Frame from "../../../public/Frame 705.png";
import Img from "../../../public/2.png";
import Img2 from "../../../public/1.png";
import Img3 from "../../../public/3.png";
import Img4 from "../../../public/4.png";
import Img5 from "../../../public/5.png";
const FinTech = () => {
  return (
    <>
      <div className="md:w-[100%] md:flex justify-center items-center pl-10 pr-10 mt-20">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col  text-start  items-center">
            <div className="w-[97%]">
              <p className=" md:text-5xl text-blue-900 text-2xl mb-4 leading-[3.4rem] md:leading-[4rem] ">
                Pay,Invest,Save,
                <br />
                your Cash with a<br /> Single bank
              </p>
            </div>

            <p className="leading-[2.4rem]">
              finteckk is the bank that does it all.manager everything directly
              and its easy with fiteckk
            </p>
            <div className="w-[100%] m-5 flex flex-col justify-between items-start ">
              <Button className="bg-blue-700 justify-center text-white w-[150px] p-2 rounded-lg text-[14px] font-bold md:flex  mt-3 mb-5">
                Sign up for free
              </Button>
              <div>
                <Button className="text-gray-500 p-2 rounded-lg border-2 border-solid  mr-10 mb-5">
                  <span className="flex items-center  justify-around text-sm w-[130px]">
                    <img src={Frame} alt="logo" width="15px" /> Get on Android
                  </span>
                </Button>
                <Button className="text-gray-500 p-2 rounded-lg border-2 border-solid">
                  <span className="flex items-center text-sm justify-around w-[130px]">
                    <img src={Apple} alt="logo" width="15px" /> Get on Iphone
                  </span>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img src={Floating} alt="payment" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full bg-gray-200">
        <div className="flex p-1 overflow-scrollx  md:flex-row justify-between w-[97%] md:p-4">
          <img src={Img} alt="img" width="80px" />
          <img src={Img4} alt="img" width="40px" />
          <img src={Img5} alt="img" width="70px" />
          <img src={Img3} alt="img" width="70px" />
          <img src={Img2} alt="img" width="40px" height="10px" />
        </div>
      </div>
      <div className="flex justify-center items-center m-8">
        <div className="text-[#172E80] text-[20px] md:w-[30%] font-bold w-[64%]">
          More than <span className="text-[#2E5CFF]">10,000</span> active users
          trust Fintekk
        </div>
      </div>
    </>
  );
};

export default FinTech;
