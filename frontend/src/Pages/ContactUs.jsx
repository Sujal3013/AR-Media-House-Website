import React, { useState } from "react";
import Form from "../components/Form";
import Button from "../components/Button";
import Wonder from "../components/Wonder";

const ContactUs = () => {
  document.querySelector("title").innerHTML = "Contact - AR Media House";

  return (
    <>
      <img className="absolute top-[30px] -z-10 right-10" src="/assets/Sphere-orange.svg" alt="" />
      <img className="absolute top-[10rem] rotate-12 left-[50rem]" src="/assets/Triangle-Orange.svg" alt="" />
      <div className="px-screen-padding py-10 relative">
        <div className="flex-col">
          <div>
            {/* heading */}
            <h1 className="font-jost text-[64px]  text-[#FF9356] break-words leading-[64px] font-extrabold">
              LET'S CREATE
            </h1>
            <p className="font-playfair-display text-5xl font-extrabold  text-secondary-500 break-words">
              Progress Together
            </p>
          </div>

          <div className="my-4 flex gap-10 justify-between">
            {/* Form */}
            <span className="basis-[40rem]">
              <Form />
            </span>

            <div className="mx-5 my-auto">
              <img src="/assets/ContactUs.svg" alt="" />
            </div>
          </div>
        </div>
        <img className="absolute bottom-[-5rem] -z-10 rotate-45 left-[40rem]" src="/assets/Triangle-Orange.svg" alt="" />
      </div>
      <div className="bg-secondary-500 h-[55vh] rounded-bl-[100px]">
        <span className="px-screen-padding flex justify-around items-center">
          <span className="basis-[20rem] flex-col items-center text-center">
            <h1 className="text-white block font-jost font-extrabold text-[64px] tracking-wide leading-8">
              CONTACT
            </h1>
            <p className="text-[#FF9356]  font-playfair-display font-bold text-[48px] px-2">
              Information
            </p>
          </span>
          <span className="flex px-5 mt-4 gap-10">
            <div className="bg-white py-5 px-20 relative top-14 shadow-md rounded-md">
              <span className="">
                <span className="flex-col text-center">
                  <img
                    src="/assets/location-logo.svg"
                    className="relative top-[-48px] mx-auto"
                    alt=""
                  />
                  <h1 className="font-bold py-2">UNITED STATES</h1>
                  <p className="py-4">
                    2035 Sunset Lake RD,STE B2, <br /> Newark – 19702 <br />
                    Delaware, United States
                  </p>
                  <a className="mx-auto block text-[#FF9356]" href="mailto:">
                    armediahouse@gmail.com
                  </a>
                </span>
                <Button
                  to=""
                  className="bg-primary-500 relative top-12 mx-auto px-6 py-4 shadow-md rounded-[5px]"
                >
                  Get Directions
                </Button>
              </span>
            </div>
            <div className="bg-white py-5 px-20 relative top-14 shadow-md rounded-md z-10">
              <span className="">
                <span className="flex-col text-center">
                  <img
                    src="/assets/location-logo.svg"
                    className="relative top-[-48px] mx-auto"
                    alt=""
                  />
                  <h1 className="font-bold py-2">UNITED STATES</h1>
                  <p className="py-4">
                    2035 Sunset Lake RD,STE B2, <br /> Newark – 19702 <br />
                    Delaware, United States
                  </p>
                  <a className="mx-auto block text-secondary-500" href="mailto:">
                    armediahouse@gmail.com
                  </a>
                </span>
                <Button
                  to=""
                  className="bg-primary-500 relative top-12 mx-auto px-6 py-4 shadow-md rounded-[5px]"
                >
                  Get Directions
                </Button>
              </span>
            </div>
          </span>
        </span>
      </div>
      <div className="h-[30vh] bg-slate-50">
      <img className="relative top-[1rem] left-[80rem]" src="/assets/Sphere-orange.svg" alt="" />
      <img className="relative top-[-2rem] left-[5rem] z-10" src="/assets/Sphere-orange.svg" alt="" />
      </div>
      <Wonder />
    </>
  );
};

export default ContactUs;
