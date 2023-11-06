import React from "react";
import { images } from "../resources/IndexImg";

const Section6 = () => {
  return (
    <section className="relative">
      <div className="">
        <img src={images.star2} alt="" className="stars ml-48 pt-10 " />
        <div className="   flex flex-col lg:flex-row gap-[30rem] absolute">
          <div className=" items-center justify-center  pt-[10rem] lg:-mt-48">
            <img src={images.secbg1} alt="section2 image" className="headerr bg-blend-color-burn" />
          </div>

          <div className=" items-center justify-center ml-[20rem] -mt-[30rem] lg:ml-0 lg:mt-0 lg:pt-[10rem] ">
            <img
              src={images.secbg2}
              alt=" section2 bg image"
              className="header md:w-full bg-blend-color-burn"
            />
          </div>
        </div>

        <div className=" flex flex-col lg:flex-row justify-center gap-20 lg:w-[90%] lg:ml-20 items-center ">
          <img src={images.star1} alt="" className="stars" />

          <div className="lg:ml-5  ml-40 relative w-[80%] lg:w-[50%] items-center justify-center -pt-96">
            <img
              src={images.sec6main}
              alt="section6 main"
              className="z-[999] absolute top-0 transform translate-x-[-50px] -translate-y-72 mt-[30rem] lg:mt-0 pt-20 md:pt-0 md:ml-28 lg:pt-0"
            />
          </div>

          <img src={images.secstar1} alt="star" className="stars" />

          <div className="text-white items-center justify-center text-center w-full mt-28 lg:text-start p-10  lg:mt-6 ">
            
            <div className="font-bold text-[26px] lg:text-[32px] font-roboto -mt-[20rem] lg:mt-0">
              <h2 className="flex items-center text-center justify-center gap-20 w-full ml-10 lg:ml-0 lg:text-start lg:justify-start ">
                Prizes and
                <span className="stars w-[15px] lg:w-[36px] pt-10"></span>
              </h2>
              <p className="text-color_primary_variant whitespace-nowrap">
                Rewards
              </p>

              <div className="flex pt-4  items-center m-4 lg:m-0 justify-center gap-4 text-[15px] lg:text-[20px] lg:gap-6 font-light">
                <p className=" justify-start lg:-ml-[24rem]">
                  Highlight of the prizes or rewards for winners and <br />
                  for participants.
                </p>
                <img src={images.secstar2} alt="star" className="h-8 stars" />
              </div>
            </div>

            <img src={images.secstar2} alt="star" className="stars" />

            <div className="flex flex-row md:flex-col lg:flex-row items-center  mt-[30rem]  justify-center w-full h-full gap-4 lg:gap-10 lg:mt-20 font-roboto">
              <div className="items-center justify-center w-full  relative ">
                <img
                  src={images.silver}
                  alt="silver medal"
                  className=" absolute w-[100px] h-[100px] lg:w-[179px] lg:h-[180px] z-[999] ml-2 lg:ml-4 "
                />
                <article
                  className="items-center justify-center text-center border-2 w-full h-[200px] lg:w-[212px] lg:h-[296px] rounded-md border-color_primary_variant bg-cardbg 
                transform  mt-12   lg:mt-28 flex flex-col"
                >
                  <h3 className="font-extrabold text-[12px] lg:text-[36px]  pt-6">
                    2nd
                  </h3>
                  <p className=" text-[12px] lg:text-[24px]">Runner</p>
                  <p className=" text-[14px] lg:text-[32px] font-extrabold text-color_primary_variant pt-6">
                    N300,000
                  </p>
                </article>
              </div>

              <div className="items-center justify-center w-full relative ">
                <img
                  src={images.gold}
                  alt="gold medal"
                  className="absolute h-[130px] lg:w-[400px]   lg:h-[296px] z-[9999] lg:-mt-4  object-cover "
                />
                <article
                  className="items-center justify-center text-center border-2 w-full h-[200px] lg:w-[250px] lg:h-[347px] rounded-md border-colorbg2 bg-cardbg2 
                transform mt-20 lg:mt-48 flex flex-col"
                >
                  <h3 className="font-extrabold text-[12px] lg:text-[36px] pt-2">
                    1st
                  </h3>
                  <p className=" text-[12px] lg:text-[24px]">Runner</p>
                  <p className=" text-[14px] lg:text-[32px] font-extrabold text-colorbg2 pt-6">
                    N400,000
                  </p>
                </article>
              </div>

              <div className="items-center justify-center w-full relative">
                <img
                  src={images.bronze}
                  alt="bronze medal"
                  className=" absolute w-[100px] h-[100px] lg:w-[179px] lg:h-[180px] z-[999] ml-2 lg:ml-4 "
                />
                <article
                  className="items-center justify-center text-center border-2 w-full h-[200px] lg:w-[212px] lg:h-[296px] rounded-md border-color_primary_variant bg-cardbg 
                transform  mt-12   lg:mt-28 flex flex-col"
                >
                  <h3 className="font-extrabold text-[12px] lg:text-[36px] pt-6">
                    3rd
                  </h3>
                  <p className=" text-[12px] lg:text-[24px]">Runner</p>
                  <p className=" text-[14px] lg:text-[32px] font-extrabold text-color_primary_variant pt-6">
                    N150,000
                  </p>
                </article>
              </div>
            </div>
            <img src={images.star2} alt="star" className="stars" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
