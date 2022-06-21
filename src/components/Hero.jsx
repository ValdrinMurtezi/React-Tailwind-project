import React, { useState } from "react";
import "../index.css";
import {
  AiOutlineSafety,
  AiOutlineFieldTime,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { SiYourtraveldottv } from "react-icons/si";
import { MdWifiTethering } from "react-icons/md";

function Hero() {
  const [nav, setNav] = useState(false);

  const mobileNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div
        className="header z-[1] flex-col relative	bg-fixed bg-pack-train bg-no-repeat bg-cover
       w-full min-h-[100vh] flex items-center justify-center"
      >
        {" "}
        <div className="flex items-center justify-between h-[4rem] w-[90%] sm:w-[84%] mt-[1rem]">
          <h1 className="text-4xl font-font1 font-semibold text-white">
            Traveler<span className="text-[orange] ">.</span>
          </h1>
          <ul
            className={
              !nav
                ? "hidden relative md:flex space-x-5 text-white text-lg font-semibold ease-in-out duration-500"
                : "md:hidden fixed text-white text-2xl uppercase space-y-6 w-[60%] top-0 left-0  h-full px-[3rem] bg-[#080808] pt-[5rem]"
            }
          >
            <AiOutlineClose
              onClick={mobileNav}
              size={23}
              className="absolute right-5 top-10 md:hidden"
            />
            <li className="text-[orange] ">Home</li>
            <li className="md:border-0 border-b-[1px] pb-2  cursor-pointer hover:text-[orange] ease-in-out duration-200	border-[#837f7f] ">
              Services
            </li>
            <li className="md:border-0 border-b-[1px] pb-2 cursor-pointer hover:text-[orange] ease-in-out duration-200	border-[#837f7f] ">
              About
            </li>
            <li className="md:border-0 border-b-[1px] pb-2 cursor-pointer hover:text-[orange] ease-in-out duration-200	border-[#837f7f] ">
              Team
            </li>
            <li className="md:border-0 border-b-[1px] pb-2 cursor-pointer hover:text-[orange] ease-in-out duration-200	border-[#837f7f] ">
              Contact
            </li>
          </ul>
          <div className="flex items-center">
            <div className="text-lg hover:bg-[orange] hover:text-black duration-500  text-white border-solid border-2 border-[orange] px-3 py-1 rounded-[5px]">
              Get Started
            </div>
            <div
              onClick={mobileNav}
              className="block md:hidden ml-4 text-white"
            >
              <AiOutlineMenu size={23} />
            </div>
          </div>
        </div>
        <div className="flex items-center pt-20 flex-col w-[90%] sm:w-[84%] ">
          <div className="mx-auto w-[90%] sm:w-[28rem] md:w-[34rem] my-[50px] ">
            <p className="text-4xl md:text-5xl lg:text-[3.2rem] font-font1 font-[600] text-white z-[2] text-center">
              Travel is the only thing you buy that makes you richer{" "}
              <span className="text-[orange] -ml-3">.</span>
            </p>
          </div>
          <div className="flex flex-row items-center flex-wrap justify-center py-5 max-w-[900px]">
            <div className="w-full md:w-[17rem] flex flex-col justify-center items-center lg:w-[14rem] my-3 border-solid border-[1px] mx-3 ease-in-out duration-300 3 hover:border-[orange]  border-[#837f7f] h-[8rem]">
              {" "}
              <AiOutlineSafety size={50} className="text-[orange] " />
              <h2 className="text-white text-2xl font-semibold cursor-pointer hover:text-[orange] ">
                Safe traveling
              </h2>
            </div>
            <div className="w-full md:w-[17rem] lg:w-[14rem]  flex flex-col justify-center items-center my-3 border-solid border-[1px] mx-3 ease-in-out duration-300   hover:border-[orange] border-[#837f7f]  h-[8rem]">
              <AiOutlineFieldTime size={50} className="text-[orange] " />
              <h2 className="text-white text-2xl font-semibold cursor-pointer hover:text-[orange]">
                Right in time
              </h2>
            </div>
            <div className="w-full md:w-[17rem] lg:w-[14rem] flex flex-col justify-center items-center my-3 border-solid border-[1px] mx-3 ease-in-out duration-300  hover:border-[orange]  border-[#837f7f]  h-[8rem]">
              <SiYourtraveldottv size={50} className="text-[orange] " />
              <h2 className="text-white text-2xl font-semibold cursor-pointer hover:text-[orange]">
                Worldwide
              </h2>
            </div>
            <div className="w-full md:w-[17rem] lg:w-[14rem] flex flex-col justify-center items-center my-3 border-solid border-[1px] mx-3 ease-in-out duration-300  hover:border-[orange]  border-[#837f7f]  h-[8rem]">
              <MdWifiTethering size={50} className="text-[orange] " />
              <h2 className="text-white text-center text-2xl font-semibold cursor-pointer hover:text-[orange]">
                Connection everywhere
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
