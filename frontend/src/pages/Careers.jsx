

import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Jobopeningcard } from "../components/Jobopeningcard";
import { Heading, Wonder } from "../components";

export default function Careers() {
  document.querySelector("title").innerHTML = "Careers - AR Media House";
  const [blog, setBlog] = useState({});
  useEffect(() => {
    // backend API to fetch blogs
  }, []);
  const count=0;

  return (
    <>
      {/* Hero Section */}
      <div 
        className="bg-[url('/assets/Careers-Hero-with-gradient.jpg')] h-[90vh] bg-cover bg-center bg-no-repeat 
        flex flex-col items-center justify-center"
      >
        {/* Replace 'your-image-url' with the actual URL of your hero image */}
          <Heading
            heading="More than a Team"
            headingClassName="text-center text-primary-500"
            subHeading="we are a Family"
            subHeadingClassName="text-tertiary-500"
            className="w-full items-center"
          />
          <Button className="bg-primary-500 text-secondary-500 mx-auto mt-4" to="#openings">
            View open positions
          </Button>
      </div>

      {/* Careers Text */}
      <Heading
        heading="Careers"
        subHeading="@AR Media House"
        className="w-full items-center my-10 mt-16"
      />

      {/* Job Openings Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 px-screen-padding mx-10 py-8"
        id="openings"
      >
        {openings.map((opening) => (
          <Jobopeningcard
          
            title={opening.title}
            location={opening.location}
            daysAgo={opening.daysAgo}
          />
        ))}
      </div>
      
      <Wonder
          linearGradient = {{"backgroundImage": "linear-gradient(0deg, #080403 50%, white 50%)"}}
          className="!bg-tertiary-500"
      />
    </>
  );
}

const openings = [
  {
    id: 1,
    title: "Social Media Manager",
    location: "Chandigarh,India",
    daysAgo: 3,
  },
  {
    id: 1,
    title: "Software Engineering Intern",
    location: "Chandigarh,India",
    daysAgo: 5,
  },
  {
    id: 1,
    title: "Digital Marketing Strategist",
    location: "Chandigarh,India",
    daysAgo: 2,
  },
  {
    id: 1,
    title: "Human Resource Manager",
    location: "Chandigarh,India",
    daysAgo: 10,
  },
  {
    id: 1,
    title: "Social Media Manager",
    location: "Chandigarh,India",
    daysAgo: 20,
  },
];
