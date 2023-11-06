import React from "react";
import { images } from "../resources/IndexImg";
import Line from "../resources/Line";

const Section7 = () => {
  return (
    <section>

      <div className="relative pb-28">
        
        <div className="flex flex-row  lg:gap-[30rem] absolute  ">
          <div className="-mt-20 bg-blend-hard-light  ">
            <img src={images.sec3left} alt="sec3 bg" className="headerr w-[286px] lg:w-full " />
          </div>
          <div className="mt-96 bg-blend-hard-light md:-mr-20">
            <img src={images.sec3right} alt="sec3 bg" className="headerr  w-[286px] lg:w-full md:w-full " />
          </div>
        </div>

        <img
          src={images.star2}
          alt=""
          className=" stars lg:h-8 h-5 mt-6  ml-2 lg:ml-6"
        />

        <div className="text-center items-center justify-center text-white font-roboto ">
          <h2 className="lg:text-[50px] text-[20px] font-bold">Partners and Sponsors</h2>
          <p className="pt-4 flex items-center m-4 lg:m-0 justify-center gap-4 text-[12px] lg:text-[20px] lg:gap-6">
            Getlinked Hackathon 1.0 is honored to have the following major<br />
            companies as its partners and sponsors
            <img
              src={images.star2}
              alt=""
              className=" stars lg:h-8 h-5 mt-6  ml-2 lg:ml-6"
            />
          </p>
        </div>

        <div className="  flex flex-col lg:flex-row justify-center w-[90%] lg:ml-20 md:ml-10 ml-5 items-center pt-20 lg:mt-28 z-[999] ">
          <div className="border-[1px] border-colorbg2 lg:px-48 lg;py-20 p-10 rounded-md items-center justify-center">
            <img src={images.partners} alt="partners and sponsors" />
            <img
              src={images.star1}
              alt=""
              className=" stars lg:h-8 h-5   ml-2 lg:ml-6"
            />
          </div>
        </div>
      </div>
      <Line />
    </section>
  );
};

export default Section7;
