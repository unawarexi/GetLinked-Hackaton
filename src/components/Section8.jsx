import React from "react";
import { images } from "../resources/IndexImg";
import Line from "../resources/Line";

const Section8 = () => {
  return (
    <section>
      <div className="pb-40">

        <div className="flex flex-row  lg:gap-[30rem] absolute  ">
          <div className=" mt-96  bg-blend-hard-light  ">
            <img
              src={images.sec3left}
              alt="sec3 bg"
              className="headerr w-[286px] lg:w-full "
            />
          </div>

          <div className="mt-96 bg-blend-hard-light md:-mr-20">
            <img
              src={images.sec3right}
              alt="sec3 bg"
              className="headerr  w-[286px] lg:w-full md:w-full "
            />
          </div>
        </div>
        <img src={images.secstar1} alt="star" className="stars" />

        {/**================================ this the content of section 8 ==================================================== */}

        <div className=" flex flex-col lg:flex-row justify-center  lg:w-[90%] lg:ml-20 items-center lg:p-20">
          <img src={images.star1} alt="" className="stars" />

          <div className="text-white items-center justify-center text-center w-full lg:text-start  p-10 lg:p-20 ">

            <div className=" font-montserrat font-bold   lg:mt-0 ">
              <h2 className="font-bold flex items-center text-[32px] text-center justify-center gap-20 w-full  lg:ml-0 lg:text-start lg:justify-start ">
                Privacy Policy and
              </h2>

              <p className="font-bold text-color_primary_variant whitespace-nowrap  text-[32px]">
                Terms
              </p>

              <p className=" font-montserrat font-normal text-[14px] leading-7 mt-4 text-fade">
                Last updated on September 12, 2023
              </p>

              <div className="  ">
                <p className=" font-montserrat font-medium mt-4 text-[12px] lg:text-[14px]">
                  Highlight of the prizes or rewards for winners and <br />
                  for participants.
                </p>
                {/* <img src={images.secstar2} alt="star" className="h-8 stars" /> */}
              </div>

              <div className="border-[1px] border-color_primary_variant bg-cardbg3 h-full w-full rounded-md font-medium mt-16  leading-loose text-[12px] lg:text-[14px]">
                <article className=" m-10 lg:m-20 ">
                  At getlinked tech Hackathon 1.0, we value your privacy and are
                  committed to protecting your personal information. This
                  Privacy Policy outlines how we collect, use, disclose, and
                  safeguard your data when you participate in our tech hackathon
                  event. By participating in our event, you consent to the
                  practices described in this policy.
                </article>

                <div className=" text-start ml-10 lg:ml-20 lg:-mt-10 font-bold">
                  <h2 className=" text-color_primary_variant whitespace-nowrap text-[13px]  lg:text-[16px] font-montserrat">
                    Licensing Policy
                  </h2>
                  <h4>Here are terms of our Standard License:</h4>
                </div>

                {/**=========================== SVG FOR GREEN CHECK ICONS ================================ */}
                <div className=" m-10 lg:mx-20 lg:my-10 ">
                  <div className="flex  text-start gap-4 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      className="h-[10%] w-[10%] "
                    >
                      <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                      <path
                        d="M5 8L7 10.5L13.5 6"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>
                    <p className=" text-[12px] lg:text-[14px] leading-6">
                      The Standard License grants you a non-exclusive right to
                      navigate and register for our event
                    </p>
                  </div>

                  <div className="flex  text-start gap-4 mt-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      className="h-[10%] w-[10%]"
                    >
                      <circle cx="8.5" cy="8.5" r="8.5" fill="#2DE100" />
                      <path
                        d="M5 8L7 10.5L13.5 6"
                        stroke="white"
                        stroke-width="2"
                      />
                    </svg>

                    <p className="text-[12px] lg:text-[14px] leading-6">
                      You are licensed to use the item available at any free
                      source sites, for your project developement
                    </p>
                  </div>
                  <button className=" my-auto mx-auto flex items-center text-center justify-center mt-10 lg:mt-20 ">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>

         <img
          src={images.star2}
          alt=""
          className=" stars lg:h-8 h-5 mt-6  ml-2 lg:ml-6"
        />

          {/**============================ beginning of the secong half section ================================== */}

          <div className=" mt-[2rem] relative lg:w-full lg:h-full my-auto mx-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="530"
              height="648"
              viewBox="0 0 530 648"
              fill="none"
              className=" items-center justify-center w-full   h-[400px]  lg:h-full "
            >
              <path
                d="M530 294.545C530 458.018 416.933 610.887 265 648C113.067 610.887 0 458.018 0 294.545V117.818L265 0L530 117.818V294.545ZM265 589.091C375.417 559.636 471.111 428.269 471.111 301.025V156.109L265 64.2109L58.8889 156.109V301.025C58.8889 428.269 154.583 559.636 265 589.091ZM347.444 294.545V250.364C347.444 209.127 306.222 176.727 265 176.727C223.778 176.727 182.556 209.127 182.556 250.364V294.545C164.889 294.545 147.222 312.218 147.222 329.891V432.982C147.222 453.6 164.889 471.273 182.556 471.273H344.5C365.111 471.273 382.778 453.6 382.778 435.927V332.836C382.778 312.218 365.111 294.545 347.444 294.545ZM309.167 294.545H220.833V250.364C220.833 226.8 241.444 212.073 265 212.073C288.556 212.073 309.167 226.8 309.167 250.364V294.545Z"
                fill="url(#paint0_linear_110_134)"
                fill-opacity="0.14"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_110_134"
                  x1="265"
                  y1="0"
                  x2="265"
                  y2="648"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#903AFF" />
                  <stop offset="1" stop-color="#FF26B9" />
                </linearGradient>
              </defs>
            </svg>

            <img src={images.secstar1} alt="star" className="stars" />

            <div className=" w-full h-full items-center justify-center  absolute">
              <img
                src={images.sec8main}
                alt="section6 main"
                className="absolute  transform  translate-x-[-140px]  translate-y-[-300px] lg:translate-x-[-80px]  lg:translate-y-[-480px] ml-28"
              />
            </div>
          </div>

          <img src={images.secstar1} alt="star" className="stars" />
        </div>
      </div>
      <Line />
    </section>
  );
};

export default Section8;
