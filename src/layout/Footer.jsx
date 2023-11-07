import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import { RiTwitterXLine } from "react-icons/ri";

import { BiPhoneCall, BiCurrentLocation } from "react-icons/bi";

import { images } from "../resources/IndexImg";

const Footer = () => {
  return (
    <footer className="bg-footer w-full h-full justify-center items-center p-10">
      <img
        src={images.star2}
        alt=""
        className="stars float-right pr-10 lg:mt-10 h-8"
      />

      <div className="container grid lg:grid-cols-3 justify-center items-center lg:p-10  text-[12px] text-white  font-bold font-montserrat">
        <div className="lg:p-10 lg:-mt-20 w-full h-full items-center justify-center leading-loose">
          <h1 className=" font-bold text-[32px]">
            <img
              src={images.star2}
              alt=""
              className="stars h-8 -ml-20"
            />
            <span className="white-space: nowrap;">get</span>
            <a href="/" className="text-color_primary_variant">
              Linked
            </a>
          </h1>
          <p className="mt-5">
            Getlinked Tech Hackathon is a technology innovation program
            established by a group of organizations with the aim of showcasing
            young and talented individuals in the field of technology
          </p>
          <p className="mt-10">
            Terms of Use{" "}
            <span className="text-color_primary_variant mx-2 h-[13px]">|</span>{" "}
            Privacy Policy
          </p>
        </div>

        <div className="w-full h-full items-center justify-center   leading-loose pt-10   lg:p-10 ">
          <h3 className="text-color_primary_variant">Useful Links</h3>
          <ul className="mt-5 lg:mt-10">
            <li className="pb-2">Overview</li>
            <li className="pb-2">Timeline</li>
            <li className="pb-2">FAQS</li>
            <li className="pb-2">Register</li>
          </ul>
          <img
            src={images.star1}
            alt=""
            className="stars h-4 float-right mr-10 -mt-20  lg:float-none  lg:mr-0  lg:-mt-0"
          />

          <div className="flex gap-10  mt-10  ">
            <h5 className="text-color_primary_variant ">follow us</h5>
            <div className=" flex gap-5 ">
              <a href="#">
                <FaFacebookF className=" w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" />
              </a>
              <a href="#">
                <FaInstagram className=" w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" />
              </a>
              <a href="#">
                <RiTwitterXLine className=" w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" />
              </a>
              <a href="#">
                <FaLinkedinIn className=" w-[18px] h-[18px] lg:w-[24px] lg:h-[24px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full h-full items-center justify-center lg:pt-10 pt-20  lg:p-10 leading-loose ">
          <h3 className="text-color_primary_variant">contact us</h3>
          <img src={images.star1} alt="" className="stars h-5 float-right" />
          <div className="flex flex-col mt-10 gap-5">
            <article className="flex gap-6">
              {" "}
              <a href="#">
                <BiPhoneCall className="w-[24px] h-[24px]" />
              </a>
              <p>+234 6707653444</p>
            </article>

            <article className="flex gap-6">
              <a href="#">
                <BiCurrentLocation className="w-[24px] h-[24px]" />
              </a>
              <p>27,Alara Street Yaba 100012 Lagos State</p>
            </article>
          </div>
        </div>
        <img src={images.star1} alt="" className="stars h-4" />
      </div>
      <img src={images.star1} alt="" className="stars float-right mr-10 h-3" />
      <p className="flex justify-center text-white text-[14px] pb-10 mt-10 lg:mt-0">
        All rights reserved. © getlinked Ltd.
      </p>
    </footer>
  );
};

export default Footer;
