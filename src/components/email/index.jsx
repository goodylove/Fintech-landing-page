import React from "react";

const Email = () => {
  return (
    <div className="w-full flex justify-center items-center p-10">
      <div className="bg-[#2E5CFF] md:w-[50%]  p-[1.4rem]  rounded-lg  md:p-10 flex justify-center items-center flex-col  text-start">
        <h2 className="text-white text-[20px] pr-[36px]">Start growing</h2>
        <h3 className="text-white text-[20px]">your wealth today</h3>
        <div className="form-control  m-3 flex justify-between rounded-3xl flex-col w-full md:flex-row md:justify-center">
          <input
            type="text"
            placeholder="Enter your email address"
            className=" rounded-lg bg-transparent text-[10px] border w-[100%] p-2 mb-2  outline-none text-white md:w-[70%]"
          />
          <button className="bg-white p-1 rounded-lg md:w-[7%]   w-[55%] md:absolute md:right-[35%] md:rounded-full ">
            {" "}
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Email;
