import React, { useEffect, useState } from 'react'

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
          <h1 className="text-4xl font-bold mb-4">Join Our Team</h1>
          <p className="text-lg">Unlock your potential and shape the future with us.</p>
          <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full">Apply Now</button>
        </div>
      </div>

      {/* Careers Text */}
      <div className="py-8 text-center">
        <h2 className="text-3xl font-bold">Explore Exciting Opportunities</h2>
        <p className="text-gray-700 mt-2">Join us on our mission to create something extraordinary.</p>
      </div>

      {/* Job Openings Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-8 p-8">
        {/* Example Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
          <p className="text-gray-700 mb-4">We are looking for a skilled software engineer to join our dynamic team.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Apply Now</button>
        </div>

        {/* Example Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">UX/UI Designer</h3>
          <p className="text-gray-700 mb-4">Shape the user experience and create beautiful designs with us.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Apply Now</button>
        </div>

        {/* Example Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold mb-2">Marketing Specialist</h3>
          <p className="text-gray-700 mb-4">Join our marketing team and drive our brand to new heights.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Apply Now</button>
        </div>
      </div>
    </div>
  )
}
