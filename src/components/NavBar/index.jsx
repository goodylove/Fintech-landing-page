import React, { useState } from "react";
import Button from "../button";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const handleClick = () => {
    setShowMobileNav((prev) => !prev);
    console.log("working");
  };
  return (
    <div className="flex items-center justify-between mb-10 top-0 bg-white text-[#2E5CFF]  fixed  w-full p-5  shadow-md text-3xl">
      <div className="log">
        <h5 className="text-lg font-bold">Fintekk</h5>
      </div>

      <div className="menulist w-[45%]">
        <ul className="md:flex justify-evenly  items-center text-[13px] text-black hidden font-thin">
          <li>Home</li>
          <li>About us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div
        className={`w-[45%] absolute bg-slate-100 p-10 left-0   top-16  ${
          showMobileNav ? "mobile show" : "mobile"
        }`}
      >
        <ul className="md:flex justify-between text-start  items-center text-[13px] text-[#2E5CFF]  font-thin">
          <li className="hover:text-red-500">Home</li>
          <li>About us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="w-[40%] flex justify-around">
        <button className="hidden md:flex bg-white  items-center  text-center justify-center text-[13px] text-[#2E5CFF] w-[60px] border-[1px] border-[#2E5CFF]  border-solid rounded-lg p-1 font-semibold">
          Login
        </button>
        <Button className="bg-[#2E5CFF] justify-center text-white w-[140px] p-[3px] rounded-lg text-[13px] font-bold hidden md:flex">
          Sign up for free
        </Button>
      </div>

      <div className="md:hidden" onClick={handleClick}>
        <AiOutlineMenu className="text-3xl" />
      </div>
    </div>
  );
};

export default NavBar;
