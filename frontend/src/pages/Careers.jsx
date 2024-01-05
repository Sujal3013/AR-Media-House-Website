import React, { useEffect, useState } from 'react'
import Button from "../components/Button"
export default function Careers() {
  document.querySelector("title").innerHTML = "Careers - AR Media House";
  const [blog,setBlog]=useState({});
  useEffect(()=>{
    // backend API to fetch blogs
  },[]);
  
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-cover bg-center h-64 flex items-center justify-center text-white">
        {/* Replace 'your-image-url' with the actual URL of your hero image */}
        <div className="text-center">
          <h1 className="text-4xl font-jost font-bold mb-4 text-primary-500">MORE THAN A TEAM</h1>
          <p className="text-lg font-playfair-display text-secondary-500">We are a Family</p>
          
        </div>
      </div>

      {/* Careers Text */}
      <div className="py-8 text-center">
        <h2 className="text-3xl font-jost font-bold uppercase text-primary-500">Careers At</h2>
        <p className="text-secondary-500 font-playfair-display text-3xl mt-2">AR Media House</p>
      </div>

      {/* Job Openings Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 p-8">
        {/* Example Card 1 */}
        <div className="bg-white flex rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
          <p className="text-gray-700 mb-4">We are looking for a skilled software engineer to join our dynamic team.</p>
          <Button>Apply Now</Button>
        </div>

        {/* Example Card 2 */}
        <div className="bg-white  flex rounded-lg shadow-md p-6">
          <div>
          <h3 className="text-xl font-bold mb-2">UX/UI Designer</h3>
          <p className="text-gray-700 mb-4">Shape the user experience and create beautiful designs with us.</p>
          </div>
          ~
          <Button>Apply Now</Button>
        </div>

        {/* Example Card 3 */}
        <div className="bg-white flex rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Marketing Specialist</h3>
          <p className="text-gray-700 mb-4">Join our marketing team and drive our brand to new heights.</p>
          <Button>Apply Now</Button>
        </div>
      </div>
    </div>
  )
}
