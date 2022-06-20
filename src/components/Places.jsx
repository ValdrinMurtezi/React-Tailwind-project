import React from "react";

export default function Places() {
  return (
    <div className="w-full min-h-[100vh] bg-[#d4d4d44d] flex justify-center items-center py-[3rem]">
      <div className="w-[90%] sm:w-[84%] flex items-center flex-col justify-center">
        <div className="w-full py-10 relative">
          <p className="text-xl font-semibold text-gray-500">PLACES</p>
          <div className="w-[7rem] h-[2px] bg-[orange] absolute left-[6rem] top-[3.3rem]"></div>
          <h1 className="text-4xl font-bold">SOME OF OUR PLACES</h1>
        </div>
        <div
          className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 items-center self-center content-center
         justify-center"
        >
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place1.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place2.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place3.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place4.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place5.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place6.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place7.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place8.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place9.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place10.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place11.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
          <div className="w-full h-[15rem]">
            <img
              src={"/img/places/place12.jpg"}
              className="w-full h-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
