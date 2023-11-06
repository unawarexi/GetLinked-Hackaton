import React from "react";
import { images } from "../resources/IndexImg";
import Line from "../resources/Line"


const Section3 = () => {
  return (
    <section className="relative ">
      <div className=" container pb-28">
      <div className="flex flex-col lg:flex-row gap-[30rem] absolute ">
        <div className="lg:mt-20 items-center justify-center pr-[-20rem]  pt-[10rem] ">
          <img
            src={images.sec3left}
            alt="sec3 bg"
            className="headerr"
          />
        </div>
        <div className="lg:mt-96">
          <img
            src={images.sec3right}
            alt="sec3 bg"
            className="headerr  md:w-full"
          />
        </div>
      </div>

      <div className=" flex flex-col lg:flex-row justify-center gap-48 lg:gap-20 lg:w-[90%] lg:ml-20 items-center ">
        <div className="lg:ml-5  ml-16 relative w-[50%] items-center justify-center -pt-96">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="134"
            height="134"
            viewBox="0 0 134 134"
            fill="none"
            className="glowing left-0 transform lg:translate-x-4 lg:-translate-y-52 -translate-x-16  translate-y-10"
          >
            <circle cx="67" cy="67" r="67" fill="url(#paint0_linear_70_6)" />
            <defs>
              <linearGradient
                id="paint0_linear_70_6"
                x1="134"
                y1="67"
                x2="3.69183"
                y2="67"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#8F01FE" />
                <stop offset="1" stop-color="#FF2674" />
              </linearGradient>
            </defs>
          </svg>

           <img src={images.sec3main} alt="section3 main" className="z-999999 absolute top-0 transform translate-x-[-50px] -translate-y-48 mt-72 lg:mt-0"  />

        
        </div>
         

        <div className="text-white items-center justify-center text-center leading-loose lg:leading-none lg:text-start p-10 lg:w-[50%] lg:mt-6 ">
          <div className="font-bold text-[26px] lg:text-[32px] font-roboto ">
            <h2 className="flex items-center text-center justify-center gap-20 w-full ml-10 lg:ml-0 lg:text-start lg:justify-start ">
              Judging Criteria
              <span className="stars w-[15px] lg:w-[36px] pt-10"></span>
            </h2>
            <p className="text-color_primary_variant whitespace-nowrap">
              Key attributes
            </p>
          </div>

          <div className="mr-10 w-full bg-blend-darken text-start justify-start lg:font-medium ">
            <article>
              <p className="font-roboto leading-loose mt-6 ">
                <span className="sub__heading ">Innovation and Creativity:</span>{" "}
                Evaluate the uniqueness and creativity of the solution. Consider
                whether it addresses a real-world problem in a novel way or
                introduces innovative features.
              </p>
            </article>
            <article>
              <p className="font-roboto leading-loose mt-6 font-medium">
                <span className="sub__heading">Functionality:</span> Assess how
                well the solution works. Does it perform its intended functions
                effectively and without major issues? Judges would consider the
                completeness and robustness of the solution.
              </p>
            </article>
            <article>
              <p className="font-roboto leading-loose mt-6 font-medium">
                <span className="sub__heading">Impact and Relevance:</span>{" "}
                Determine the potential impact of the solution in the real
                world. Does it address a significant problem, and is it relevant
                to the target audience? Judges would assess the potential
                social, economic, or environmental benefits.
              </p>
            </article>
            <article>
              <p className="font-roboto leading-loose mt-6 font-medium">
                <span className="sub__heading"> Technical Complexity:</span>{" "}
                Evaluate the technical sophistication of the solution. Judges
                would consider the complexity of the code, the use of advanced
                technologies or algorithms, and the scalability of the solution.
              </p>
            </article>
            <article>
              <p className="font-roboto leading-loose mt-6 font-medium">
                <span className="sub__heading">
                  {" "}
                  Adherence to Hackathon Rules:
                </span>{" "}
                Judges will Ensure that the team adhered to the rules and
                guidelines of the hackathon, including deadlines, use of
                specific technologies or APIs, and any other
                competition-specific requirements.
              </p>
            </article>
            <button className="mt-10 ">Read More</button>
          </div>
        </div>
      </div>
      </div>
      <Line />
    </section>
  );
};

export default Section3;
