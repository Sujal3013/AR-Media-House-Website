import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { Jobopeningcard } from "../components/Jobopeningcard";

export default function Careers() {
  document.querySelector("title").innerHTML = "Careers - AR Media House";
  const [blog, setBlog] = useState({});
  useEffect(() => {
    // backend API to fetch blogs
  }, []);
  const count=0;

  return (
    <div className="mb-10">
      {/* Hero Section */}
      <div className="bg-[url('/assets/Careers-Hero.svg')] h-[95vh] bg-cover bg-center h-96 bg-no-repeat flex items-center justify-center text-white">
        {/* Replace 'your-image-url' with the actual URL of your hero image */}
        <div className="text-center items-center">
          <h1 className="text-8xl font-jost font-bold mb-4 text-primary-500">
            MORE THAN A TEAM
          </h1>
          <p className="text-6xl font-bold font-playfair-display text-secondary-500">
            We are a Family
          </p>
          <Button className="bg-primary-500 text-secondary-500 mx-auto mt-4">
            View open positions
          </Button>
        </div>
      </div>

      {/* Careers Text */}
      <div className="py-8 text-center">
        <h2 className="text-6xl font-jost font-bold uppercase text-primary-500">
          Careers At
        </h2>
        <p className="text-secondary-500 font-playfair-display text-6xl mt-2">
          AR Media House
        </p>
      </div>

      {/* Job Openings Cards */}
      <div
        className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 px-screen-padding mx-10 py-8"
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
    </div>
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
