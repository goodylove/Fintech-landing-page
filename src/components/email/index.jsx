import React from "react";

const Email = () => {
  return (
    <div className="w-full flex justify-center items-center p-10">
      <div className="bg-[#2E5CFF] w-[50%]  rounded-lg  p-10 flex justify-center items-center flex-col">
        <h2 className="text-white text-[20px]">Start growing</h2>
        <h3 className="text-white text-[20px]">your wealth today</h3>
        <div className="form-control  m-3 border w-[76%] flex justify-between rounded-3xl">
          <input
            type="text"
            placeholder="Enter your email address"
            className="p-3 rounded-lg bg-transparent text-[10px] border-none  outline-none text-white"
          />
          <button className="bg-white p-2 rounded-full"> Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Email;
