import React from "react";
import Line from "../resources/Line";
import Images from "../resources/Images";

const Section2 = () => {
  return (
    <section className=" items-center justify-center relative  lg:mt-24 lg:pb-24">
      <div className="container pb-28">
      
      <div className="   flex flex-col lg:flex-row gap-[30rem] absolute">
        <div className=" items-center justify-center  pt-[10rem] lg:-mt-72">
          <img src={Images.secbg1} alt="section2 image" className="headerr" />
        </div>

        <div className=" items-center justify-center ml-[20rem] -mt-[30rem] lg:ml-0 lg:mt-0 lg:pt-[10rem] ">
          <img src={Images.secbg2} alt=" section2 bg image" className="headerr  md:w-full" />
        </div>
      </div>

      <div className="flex flex-col-reverse items-center justify-between  gap-10 lg:gap-40 lg:flex-row   ">
        <div className="text-white items-center lg:justify-center  leading-loose lg:leading-none lg:text-start p-10  ">
          <div className="font-bold text-[26px] lg:text-[32px] font-roboto ">
            <h2 className="flex items-center text-center justify-center gap-20 w-full ml-10 lg:ml-0 lg:text-start lg:justify-start ">
              Rules and
              <span className="stars w-[15px] lg:w-[36px] pt-10">
                <img src={Images.secstar1} alt="star2" className=""/>
              </span>
            </h2>
            <p className="text-color_primary_variant whitespace-nowrap text-center lg:text-start">
              Guidelines
            </p>
          </div>

          <p className="font-roboto leading-loose mt-6 font-medium w-full ">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>

        <div className="lg:w-full lg:h-full  ">
          <img src={Images.mainimg} alt="the big idea" className=" section2 " />
        </div>
      </div>

      </div>

      <Line />
    </section>
  );
};

export default Section2;
