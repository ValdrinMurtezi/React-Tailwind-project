import React from "react";
import "../index.css";
import { GiCommercialAirplane, GiWorld, GiCruiser } from "react-icons/gi";
import { FaCcVisa, FaHotel } from "react-icons/fa";
import { AiFillSafetyCertificate } from "react-icons/ai";

function Services() {
  return (
    <div className="w-full min-h-[140vh]  flex flex-col items-center justify-center">
      <div className="services-cover w-full flex items-center justify-center py-[60px] bg-white">
        <div className="w-[90%] space-y-6 sm:w-[84%] text-center font-font2  text-white">
          <h2 className="text-3xl font-bold">Call To Travel</h2>
          <p className="text-lg font-[400]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum,
            ducimus illum deleniti sit, natus exercitationem alias vitae at sed
            consequuntur deserunt quae accusantium voluptatum minima?
          </p>
          <button className="text-[1.2rem] font-bold border-2 py-1 px-5 rounded-[5px] hover:border-[orange] hover:bg-[orange] hover:text-black duration-500">
            Call To Travel
          </button>
        </div>
      </div>
      <div className="w-[90%] sm:w-[84%] flex items-center flex-col justify-center py-10">
        <div className="w-full py-10 relative">
          <p className="text-xl font-semibold text-gray-500">SERVICES</p>
          <div className="w-[7rem] h-[2px] bg-[orange] absolute left-[6rem] top-[3.3rem]"></div>
          <h1 className="text-4xl font-bold">CHECK OUR SERVICES</h1>
        </div>
        <div className="w-full  items-center justify-center  grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="w-[100%] h-[12rem] sm:h-[15rem] bg-white border-[2px] flex flex-col items-center justify-center space-y-10 border-[#dd8f1a7e] ">
            <GiCommercialAirplane size={50} className="text-[orange]" />
            <h1 className="text-2xl font-semibold">Flight</h1>
          </div>
          <div className="w-[100%] h-[12rem] sm:h-[15rem] bg-white border-[2px] flex flex-col items-center justify-center space-y-10 border-[#dd8f1a7e] ">
            <FaCcVisa size={50} className="text-[orange]" />
            <h1 className="text-2xl font-semibold">Visa Processing</h1>
          </div>
          <div className="w-[100%] h-[12rem] sm:h-[15rem] bg-white border-[2px] flex flex-col items-center justify-center space-y-10 border-[#dd8f1a7e] ">
            <GiWorld size={50} className="text-[orange]" />{" "}
            <h1 className="text-2xl font-semibold">Excellent tour plan</h1>
          </div>
          <div className="w-[100%] h-[12rem] sm:h-[15rem] bg-white border-[2px] flex flex-col items-center justify-center space-y-10 border-[#dd8f1a7e] ">
            <GiCruiser size={60} className="text-[orange]" />
            <h1 className="text-2xl font-semibold">Cruise </h1>
          </div>
          <div className="w-[100%] h-[12rem] sm:h-[15rem] bg-white border-[2px] flex flex-col items-center justify-center space-y-10 border-[#dd8f1a7e] ">
            <FaHotel size={50} className="text-[orange]" />
            <h1 className="text-2xl font-semibold">Hotel Booking</h1>
          </div>
          <div className="w-[100%] h-[12rem] sm:h-[15rem] bg-white border-[2px] flex flex-col items-center justify-center space-y-10 border-[#dd8f1a7e] ">
            <AiFillSafetyCertificate size={50} className="text-[orange]" />
            <h1 className="text-2xl font-semibold">General Insurance</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
