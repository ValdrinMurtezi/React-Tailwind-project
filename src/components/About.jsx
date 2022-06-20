import React from "react";
import { BsCheck2All } from "react-icons/bs";
import { BiHappyBeaming } from "react-icons/bi";
import { MdOutlineFlightTakeoff } from "react-icons/md";
import { FaMapMarkedAlt, FaAward } from "react-icons/fa";

function About() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center justify-center">
      <div className="w-[90%] sm:w-[84%]  py-20 flex flex-col lg:flex-row justify-between space-x-0 lg:space-x-4">
        <div className="w-full lg:w-[45%] space-y-4 ">
          <h1 className="text-3xl font-semibold text-gray-800 ">
            Voluptatem dignissimos provident quasi corporis voluptates sit
            assumenda.
          </h1>
          <p className="italic text-lg text-gray-800 font-[500] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="text-lg flex items-center text-gray-800">
            <BsCheck2All size={25} className="mr-2 text-red-700" />
            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="text-lg  flex items-center text-gray-800">
            <BsCheck2All size={25} className="mr-2 text-red-700" />
            Duis aute irure dolor in reprehenderit in voluptate velit.
          </p>
          <p className="text-lg flex items-center text-gray-800">
            <BsCheck2All size={30} className="mr-2 text-red-700" />
            Aperiam illum aliquid dicta est veritatis recusandae eum natus
            consectetur. Aut.
          </p>
          <p className="text-lg text-gray-800">
            {" "}
            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate trideta storacalaperda
            mastiro dolore eu fugiat nulla pariatur.
          </p>
        </div>
        <div className="w-full lg:w-[85vh] h-[27rem] mt-10 lg:mt-0 bg-slate-500">
          <img src={"/img/about.jpg"} alt="" className="h-full" />
        </div>
      </div>
      <div className="w-[90%] md:w-[84%] py-0 sm:py-5 flex flex-col flex-wrap md:flex-row justify-center  ">
        <div className="w-[full] md:w-[19rem] lg:w-[15rem] text-center flex flex-col items-center space-y-3 shadow-shadow my-5  mx-5 p-3">
          <BiHappyBeaming size={45} className="text-[orange] " />
          <h1 className="text-4xl font-bold">21.435</h1>
          <p className="text-lg text-gray-900 font-semibold">Happy Clients</p>
        </div>
        <div className="w-[full] md:w-[19rem] lg:w-[15rem] text-center flex flex-col items-center space-y-3 shadow-shadow my-5 mx-5 p-3">
          <MdOutlineFlightTakeoff size={45} className="text-[orange] " />
          <h1 className="text-4xl font-bold">1.435</h1>
          <p className="text-lg text-gray-900 font-semibold">Flights</p>
        </div>
        <div className="w-[full] md:w-[19rem] lg:w-[15rem] text-center flex flex-col items-center space-y-3 shadow-shadow my-5 mx-5 p-3">
          <FaMapMarkedAlt size={45} className="text-[orange] " />
          <h1 className="text-4xl font-bold">435</h1>
          <p className="text-lg text-gray-900 font-semibold">Places visited</p>
        </div>
        <div className="w-[full] md:w-[19rem] lg:w-[15rem] text-center flex flex-col items-center space-y-3 shadow-shadow my-5 mx-5 p-3">
          <FaAward size={45} className="text-[orange] " />
          <h1 className="text-4xl font-bold">22</h1>
          <p className="text-lg text-gray-900 font-semibold">Awards</p>
        </div>
      </div>
    </div>
  );
}

export default About;
