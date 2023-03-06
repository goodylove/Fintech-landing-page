import React from "react";
import Button from "../button";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-white text-blue-600   w-full p-5  shadow-md text-3xl">
      <div className="log">
        <h5 className="text-lg font-bold">Fintekk</h5>
      </div>

      <div className="menulist w-[50%]">
        <ul className="md:flex justify-around items-center text-sm text-gray-500 hidden font-bold">
          <li>Home</li>
          <li>About us</li>
          <li>FQAS</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="w-[40%] flex justify-around">
        <button className="hidden md:flex bg-white  text-center justify-center text-sm text-blue-500 w-[80px] border-2  border-solid rounded-lg p-2 font-bold">
          Login
        </button>
        <Button />
      </div>

      <div className="md:hidden">
        <AiOutlineMenu className="text-3xl" />
      </div>
    </div>
  );
};

export default NavBar;
