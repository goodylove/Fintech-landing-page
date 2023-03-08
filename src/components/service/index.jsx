import React from "react";
import PaymentImg from "../../.././public/bro.png";
import PayImg from "../../.././public/Frame 721.png";
import Img from "../../.././public/Frame 720.png";

const Service = () => {
  return (
    <div className="md:w-full justify-center flex items-center p-5">
      <div>
        <div className="md:w-full flex  justify-center items-center">
          <div className="md:w-[60%]">
            <h1 className="">OUR SERVICES</h1>
            <h2 className="text-[#172E80] text-[30px]">What we offer</h2>
            <p className="">
              We help individuals become more flexible and responsible with
              their finances and handle payments smooth and easy.
            </p>
          </div>
        </div>
        <div className="w-[100%] flex justify-center">
          <div className="flex-col md:flex  md:flex-row justify-around w-[80%] items-center m-5">
            <div className="flex flex-col md:w-[20%] bg-sky-50 rounded m-5">
              <div className="text-start pl-3">
                <h3>Easy Payment</h3>
                <p className="text-[10px]">
                  stress free payment for all the transaction you do at any time
                </p>
                <p className="text-[13px] text-[#172E80]">Read more</p>
              </div>
              <div className="flex justify-center">
                <img src={PaymentImg} alt="PaymentImg" width="100px" />
              </div>
            </div>
            <div className="flex flex-col md:w-[20%] bg-orange-50 rounded m-5">
              <div className="text-start pl-3">
                <h3>Investment</h3>
                <p className="text-[10px]">
                  stress free payment for all the transaction you do at any time
                </p>
                <p className="text-[13px] text-[#172E80]">Read more</p>
              </div>
              <div className="flex justify-center">
                <img src={PayImg} alt="img" width="150px" />
              </div>
            </div>
            <div className="flex flex-col md:w-[20%] bg-sky-50 rounded m-5 ">
              <div className="text-start pl-3">
                <h3>Fixed Saving</h3>
                <p className="text-[10px]">
                  stress free payment for all the transaction you do at any time
                </p>
                <p className="text-[13px] text-[#172E80]">Read more</p>
              </div>
              <div className="flex justify-center">
                <img src={Img} alt="payImg" width="150px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
