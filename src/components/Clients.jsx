import React, { useState } from "react";
import "../index.css";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import People from "./Data";

function Clients() {
  const [person, setPerson] = useState(0);
  const { name, quote, image } = People[person];

  const checkPerson = (number) => {
    if (number > People.length - 1) {
      return 0;
    }
    if (number < 0) {
      return People.length - 1;
    }
    return number;
  };

  const nextClient = () => {
    setPerson((person) => {
      let newPerson = person + 1;
      return checkPerson(newPerson);
    });
  };

  const prevClient = () => {
    setPerson((person) => {
      let newPerson = person - 1;
      return checkPerson(newPerson);
    });
  };

  return (
    <>
      <div className="clients-cover w-full flex flex-col items-center justify-center py-[50px]">
        <div className=" w-[90%] text-white text-center sm:w-[84%] space-y-5 flex flex-col items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center mb-3">
            <div className="w-[11rem] h-[10rem] -mb-[1rem]">
              <img
                src={image}
                className="w-full  border-[6px] border-gray-500 rounded-full"
                alt="client"
              />
            </div>
            <h1 className="text-4xl font-font1 font-bold ">{name}</h1>
          </div>

          <p className="text-xl h-[10rem] md:h-[5rem]">
            <q>{quote}</q>
          </p>
          <div className="w-full space-x-10">
            <button
              onClick={prevClient}
              className="text-3xl font-bold border-[2px] p-1 rounded-full hover:bg-[orange] ease-in-out duration-200 hover:text-[black] hover:border-[orange]"
            >
              <AiOutlineLeft />
            </button>
            <button
              onClick={nextClient}
              className="text-3xl font-bold border-[2px] p-1 rounded-full hover:bg-[orange] ease-in-out duration-200 hover:text-[black] hover:border-[orange]"
            >
              <AiOutlineRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
