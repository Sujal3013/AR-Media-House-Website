import React, { useEffect, useState } from 'react'
import Button from "../components/Button"
export default function Careers() {
  document.querySelector("title").innerHTML = "Careers - AR Media House";
  const [blog,setBlog]=useState({});
  useEffect(()=>{
    // backend API to fetch blogs
  },[]);
  
  return (
    <div className='mb-10'>
      {/* Hero Section */}
      <div className="bg-[url('/assets/Careers-Hero.svg')] bg-cover bg-center h-96 bg-no-repeat flex items-center justify-center text-white">
        {/* Replace 'your-image-url' with the actual URL of your hero image */}
        <div className="text-center items-center">
          <h1 className="text-6xl font-jost font-bold mb-4 text-primary-500">MORE THAN A TEAM</h1>
          <p className="text-4xl font-bold font-playfair-display text-secondary-500">We are a Family</p>
          <Button  className="bg-primary-500 text-secondary-500 mx-auto mt-4">View open positions</Button>
        </div>
      </div>

      {/* Careers Text */}
      <div className="py-8 text-center">
        <h2 className="text-6xl font-jost font-bold uppercase text-primary-500">Careers At</h2>
        <p className="text-secondary-500 font-playfair-display text-6xl mt-2">AR Media House</p>
      </div>

      {/* Job Openings Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 px-screen-padding mx-10 py-8" id="openings">
        {/* Example Card 1 */}
        <div className="bg-slate-100 flex rounded-lg shadow-md justify-between p-6">
          <p className="text-xl text-secondary-500 font-bold mb-2">Software Engineer <br />Chandigarh,India</p>
          <p className="text-gray-700 mb-2 pt-2">Posted <br />2 days ago </p>
          <Button className="bg-primary-500 rounded-sm px-4 text-secondary-500 text-sm h-10 my-auto">Apply Now</Button>
        </div>
        <div className="bg-slate-100 flex rounded-lg shadow-md justify-between p-6">
          <p className="text-xl text-secondary-500 font-bold mb-2">Software Engineer <br />Chandigarh,India</p>
          <p className="text-gray-700 mb-2 pt-2">Posted <br />2 days ago </p>
          <Button className="bg-primary-500 rounded-sm px-4 text-secondary-500 text-sm h-10 my-auto">Apply Now</Button>
        </div>
        <div className="bg-slate-100 flex rounded-lg shadow-md justify-between p-6">
          <p className="text-xl text-secondary-500 font-bold mb-2">Software Engineer <br />Chandigarh,India</p>
          <p className="text-gray-700 mb-2 pt-2">Posted <br />2 days ago </p>
          <Button className="bg-primary-500 rounded-sm px-4 text-secondary-500 h-10 text-sm my-auto">Apply Now</Button>
        </div>
        <div className="bg-slate-100 flex rounded-lg shadow-md justify-between p-6">
          <p className="text-xl text-secondary-500 font-bold mb-2">Software Engineer <br />Chandigarh,India</p>
          <p className="text-gray-700 mb-2 pt-2">Posted <br />2 days ago </p>
          <Button className="bg-primary-500 rounded-sm px-4 text-secondary-500 h-10 text-sm my-auto">Apply Now</Button>
        </div>

      </div>
    </div>
  )
}
