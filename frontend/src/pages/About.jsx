import React from "react";
import { Button } from "../components";
export default function About() {
  document.querySelector("title").innerHTML = "About - AR Media House";
  return (
    <div>
      <div className=" h-[95vh] flex items-center justify-center text-white">
        {/* Replace 'your-image-url' with the actual URL of your hero image */}
        <div className="text-center items-center">
          <h1 className="text-7xl font-jost font-extrabold mb-4 text-primary-500 leading-3">
            GET TO
          </h1>
          <p className="text-[54px] font-bold font-playfair-display text-secondary-500">
            know us better
          </p>
          <Button arrow className="bg-primary-500 text-secondary-500 mx-auto mt-4">
            Read our Story
          </Button>
          
          <img className=" relative bottom-[-4rem] mt-4" src="/assets/About_banner.svg" alt="Img" />
          
        </div>
      </div>
    </div>
  );
}
