import React from "react";
import { images } from "../resources/IndexImg";
import Line from "../resources/Line"

const Section4 = () => {
  return (
    <section className="relative">
      <div className="container pt-28 pb-28">
        <div className=" flex flex-col lg:flex-row justify-center gap-28 lg:gap-20 lg:w-[90%] lg:ml-20 items-center ">
          
          <div className="text-white items-center justify-center text-center leading-loose lg:leading-none lg:text-start p-10 lg:w-[50%] lg:mt-6 ">

            <div className="font-bold text-[26px] lg:text-[32px] font-roboto ">
              <h2 className="flex items-center text-center justify-center gap-20 w-full ml-10 lg:ml-0 lg:text-start lg:justify-start ">
                Frequently Ask
                <span className="stars w-[15px] lg:w-[36px] pt-10"></span>
              </h2>
              <p className="text-color_primary_variant whitespace-nowrap">
                Question
              </p>
            </div>

            <div className="bg-blend-darken text-start justify-start lg:font-medium ">

              <ul className=" section__ul items-center justify-start">
                <li className="section4__list">
                  <p>Can I work on a project I started before the hackathon?</p>
                  <img
                    src={images.plus}
                    alt="plus icon"
                    className="section4__img"
                  />
                </li>
                <div className=" section__line h-[1px] border-[1px] border-color_primary_variant  lg:w-[550px] rounded-md"></div>

                <li className="section4__list">
                  <p>What happens if I need help during the hackathon?</p>
                  <img
                    src={images.plus}
                    alt="plus icon"
                    className="section4__img"
                  />
                </li>
                <div className="h-[1px] border-[1px] border-color_primary_variant lg:w-[550px] rounded-md"></div>

                <li className="section4__list">
                  <p>What happens if I don't have an idea for a project?</p>
                  <img
                    src={images.plus}
                    alt="plus icon"
                    className="section4__img"
                  />
                </li>
                <div className=" h-[1px] border-[1px] border-color_primary_variant lg:w-[550px] rounded-md"></div>

                <li className="section4__list">
                  <p>Can I join a team or do I have to come with one?</p>
                  <img
                    src={images.plus}
                    alt="plus icon"
                    className="section4__img"
                  />
                </li>
                <div className="h-[1px] border-[1px] border-color_primary_variant lg:w-[550px] rounded-md"></div>

                <li className="section4__list">
                  <p>What happens after the hackathon ends?</p>
                  <img
                    src={images.plus}
                    alt="plus icon"
                    className="section4__img"
                  />
                </li>
                <div className=" h-[1px] border-[1px] border-color_primary_variant lg:w-[550px]rounded-md"></div>

                <li className="section4__list">
                  <p>Can I work on a project I started before the hackathon?</p>
                  <img
                    src={images.plus}
                    alt="plus icon"
                    className="section4__img"
                  />
                </li>

                <div className=" h-[1px] border-[1px] border-color_primary_variant lg:w-[550px] rounded-md"></div>
              </ul>
              <button className="mt-10 ">Contact Us</button>
            </div>

          </div>

          <div className="lg:ml-5  ml-16 relative w-[50%] items-center justify-center -pt-96 ">
            <div className="flex gap-10 items-center justify-center">
              <img src={images.question2} alt="question mark" className="headerr" />
              <img src={images.question} alt="question mark" className="headerr" />

              <img src={images.star1} alt="star" className="stars" />

              <img src={images.question2} alt="question mark" className="headerr" />
            </div>

            <img src={images.star1} alt="star" className="stars" />

            <img src={images.sec4main} alt="section3 main" />
          </div>
        </div>
      </div>
      <Line />
    </section>
  );
};

export default Section4;
