import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between bg-white text-blue-600   w-full p-5  shadow-md text-3xl">
      <div className="log">
        <h4>Fintekk</h4>
      </div>

      <div className="menulist">
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>FQAS</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div>
        <button className=" bg-white text-xl text-blue-500 w-30 border-2  border-solid">
          Login
        </button>
      </div>
      <div className="login-btn">
        <button>Sign In</button>
      </div>
      <div className="md:hidden">
        <AiOutlineMenu className="text-3xl" />
      </div>
    </div>
  );
};

export default NavBar;
