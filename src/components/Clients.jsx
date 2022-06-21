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

          <p className="text-xl">
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
      <div className="w-full min-h-[50vh] flex justify-center items-center py-5">
        <div className="w-[90%] sm:w-[84%] flex items-center flex-col justify-center">
          <div className="w-full py-10 relative">
            <p className="text-xl font-semibold text-gray-500">CONTACT</p>
            <div className="w-[7rem] h-[2px] bg-[orange] absolute left-[6rem] top-[3.3rem]"></div>
            <h1 className="text-4xl font-bold">CONTACT US</h1>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2943.4244479228882!2d21.462664115001495!3d42.46126063669807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13548d28b5588f0b%3A0x42fb2aaad90dd8f8!2sMark%20Gashi%2C%20Gjilan!5e0!3m2!1sen!2s!4v1655821651820!5m2!1sen!2s"
            width="100%"
            height="320"
            title="map"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Clients;
