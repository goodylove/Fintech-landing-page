import React from "react";
import Button from "../button";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between mb-10 top-0 bg-white text-blue-600  fixed  w-full p-5  shadow-md text-3xl">
      <div className="log">
        <h5 className="text-lg font-bold">Fintekk</h5>
      </div>

      <div className="menulist w-[45%]">
        <ul className="md:flex justify-evenly  items-center text-sm text-gray-500 hidden font-bold">
          <li>Home</li>
          <li>About us</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="w-[40%] flex justify-around">
        <button className="hidden md:flex bg-white  text-center justify-center text-sm text-blue-500 w-[80px] border-2  border-solid rounded-lg p-2 font-bold">
          Login
        </button>
        <Button className="bg-blue-700 justify-center text-white w-[160px] p-1 rounded-lg text-[15px] font-bold hidden md:flex">
          Sign up for free
        </Button>
      </div>

      <div className="md:hidden">
        <AiOutlineMenu className="text-3xl" />
      </div>
    </div>
  );
};

export default NavBar;
