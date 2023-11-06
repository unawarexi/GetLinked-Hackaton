import React from "react";
import { images } from "../resources/IndexImg";
import Line from "../resources/Line";

const Section1 = () => {
  return (
    <section className=" ">
      <div className="container flex flex-col lg:flex-row  gap-4 h-full  justify-center  items-center mb-[6rem]">
        <div className="flex flex-row items-center justify-center pt-[6rem]  ">
          <img src={images.star1} alt="arrow" className = "stars"/>

          <div className="relative lg:w-[30rem] lg:h-[30rem]  ">
            <img src={images.idea} alt="the big idea" className=" idea w-[90%]" />
            <p
              className="absolute top-0 left-0 translate-x-32 translate-y-32 text-[16px] lg:text-[20px] lg:mt-8 mt-6 ml-4 font-extrabold font-verdana justify-center
             lg:translate-x-28 lg:translate-y-28 items-center text-center text-white"
            >
              The Big <br />
              Idea!{" "}
            </p>
          </div>

          <img
            src={images.arrow}
            alt="arrow"
            className="w-[19px] lg:w-[50px]"
          />
        </div>

        <div className="text-white  items-center justify-center text-center leading-loose lg:leading-none lg:text-start pt-[6rem]">
          <div className="font-bold text-[26px] lg:text-[32px] font-roboto">
            <h2 className="flex items-center text-center justify-center  ml-10  gap-20 w-full lg:text-start lg:justify-start lg:ml-0">
              Introduction to getlinked
              <span className=" w-[8px] lg:w-[36px] pt-10">
                <img src={images.star2} alt="star2" className ="stars" />
              </span>
            </h2>
            <p className="text-color_primary_variant whitespace-nowrap">
              techHackathon 1.0
            </p>
          </div>

          <p className="font-roboto leading-loose mt-6 font-medium mb-10">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </div>

      <Line />
    </section>
  );
};

export default Section1;
