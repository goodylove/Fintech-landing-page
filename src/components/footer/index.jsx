import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[94%]">
        <div className="pl-[1.2rem] text-start">
          <h2 className="text-[#172E80]">Fintekk</h2>
          <p className="text-[10px]">
            Fintekk is the bank that does it all. Manage everything directly and
            easy with fintekk.
          </p>
        </div>
        <div className="text-[#172E80] flex flex-wrap justify-between  p-5   footer">
          <div className=" text-[16px] m-1">
            <h5 className="text-[#172E80]  font-semibold">Company</h5>
            <p>Carrer</p>
            <p>About us</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
          <div className=" text-[16px] m-1">
            <h5 className="text-[#172E80] font-semibold">Services</h5>
            <p>Payment</p>
            <p>Investment</p>
            <p>Savings plans</p>
          </div>
          <div className="text-[16px] m-1">
            <h5 className="text-[#172E80] font-semibold">Resource</h5>
            <p>Media</p>
            <p> FAQs</p>
            <p>Help Center</p>
            <p>Security</p>
          </div>
          <div className="text-[16px] m-1">
            <h5 className="text-[#172E80] font-semibold">Contact Us</h5>
            <p>www.fintekk.com</p>
          </div>
        </div>
        <p className="text-[#172E80] text-[10px] font-semibold">
          Copyright 2022 fintekk. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
