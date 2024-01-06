import React, { useState } from "react";
import Form from "../components/Form";
import Button from "../components/Button";

const ContactUs = () => {
  document.querySelector("title").innerHTML = "Contact - AR Media House";

  return (
    <>
    
    <div className="px-screen-padding py-10 relative">
      <div className="flex-col">
        <div>
          {/* heading */}
          <h1 className="font-jost font-bold text-7xl  text-primary-500 break-words">
            LET'S CREATE
          </h1>
          <p className="font-playfair-display text-6xl  text-secondary-500 break-words">
            Progress Together
          </p>
        </div>

        <div className="my-4 flex">
          {/* Form */}
          <span className="basis-[40rem]">
          <Form />
          </span>
          
          <div className="mx-5 m-auto">Illustration</div>
        </div>
      </div>
    </div>
    <div className="bg-secondary-500 py-6">
      <span className="px-screen-padding flex items-center">
        <span className="basis-[40rem] flex-col py-10 gap-0">
          <span className="text-white block font-jost font-extrabold text-[60px] tracking-wide leading-8">CONTACT</span>
          <span className="text-primary-500 font-playfair-display text-[48px] px-2 text-center">Information</span>
        </span>
        <span className=" flex px-5 mt-4 gap-12">
        <div className="bg-white py-5 px-10 relative top-12 shadow-md rounded-md">
            <span className="">
              <span className="flex-col text-center">
                <img src="/assets/location-logo.svg" className="relative top-[-48px] mx-auto" alt="" />
                <h1 className="">Address Line 1 </h1>
                <a href="mailto:">armediahouse@gmail.com</a>
              </span>
              <Button to="" className="bg-primary-500 relative top-8 mx-auto p-4 shadow-md rounded-sm">
                Get Directions
              </Button>
            </span>
          </div>
          <div className="bg-white py-5 px-10 relative top-10 shadow-md rounded-md">
            <span className="mx-auto">
              <span className="flex-col text-center">
                <img src="/assets/location-logo.svg" className="relative top-[-48px] mx-auto" alt="" />
                <h1>Address Line 1</h1>
                <a href="mailto:">armediahouse@gmail.com</a>
              </span>
              <Button to="" className="bg-primary-500 relative top-8 mx-auto p-4 shadow-md rounded-sm">
                Get Directions
              </Button>
            </span>
          </div>
        </span>
      </span>
      
    </div>
    </>
  );
};

export default ContactUs;
