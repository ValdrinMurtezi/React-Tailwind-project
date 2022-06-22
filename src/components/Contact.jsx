import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";

function Contact() {
  return (
    <div className="w-full py-4 flex flex-col justify-center items-center">
      {/* <div className="w-full min-h-[50vh] flex justify-center items-center py-5"> */}
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
        {/* </div> */}
      </div>
      <div className="w-[90%] sm:w-[84%] flex flex-col lg:flex-row space-y-4 lg:space-y-0 justify-between py-8">
        <div className="w-full md:w-[60vh] flex flex-col space-y-6 ">
          <div className="flex items-center space-x-2">
            <GoLocation className="text-[3rem] p-3 bg-[#f8a917e3] rounded-lg" />
            <div>
              <h1 className="text-[1.7rem] font-semibold">Location:</h1>
              <p className="text-md text-gray-700">Gjilan KS, 0280 Street 96</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <AiOutlineMail className="text-[3rem] p-3 bg-[#f8a917e3] rounded-lg" />
            <div>
              <h1 className="text-[1.7rem] font-semibold">E-Mail:</h1>
              <p className="text-md text-gray-700">info@example.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <BsPhone className="text-[3rem] p-3 bg-[#f8a917e3] rounded-lg" />
            <div>
              <h1 className="text-[1.7rem] font-semibold">Phone:</h1>
              <p className="text-md text-gray-700">+383 45 000 000</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[60%] py-4 ">
          <form className="w-full">
            <div className="flex flex-col sm:flex-row justify-between">
              <input
                className="w-full sm:w-[48%] py-2 pl-2 border-[1px] border-[#7c7b7ba9]  rounded-md "
                type="text"
                placeholder="Your Name"
              />
              <input
                className="w-full sm:w-[48%] py-2 pl-2 border-[1px] border-[#7c7b7ba9] rounded-md mt-6 sm:mt-0"
                type="email"
                placeholder="Your E-Mail"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full py-2 pl-2 border-[1px] border-[#7c7b7ba9]  rounded-md mt-6"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Message Us"
              className="w-full min-h-[25vh] py-2 pl-2 border-[1px] border-[#7c7b7ba9]  rounded-md mt-6"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
