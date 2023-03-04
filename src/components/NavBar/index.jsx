import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-white text-blue-600   w-full p-5  shadow-inner text-3xl">
      <div className="log">
        <h4>Fintekk</h4>
      </div>
      <div className="menu">
        <AiOutlineMenu className="text-3xl" />
      </div>
    </div>
  );
};

export default NavBar;
