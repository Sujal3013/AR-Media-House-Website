import React from 'react'
import { ExploreBlog, Heading, Wonder } from '../components';


export default function CaseStudies() {
  document.querySelector("title").innerHTML = "Case Studies - AR Media House";
  
  return (
    <>
      <div 
        className='h-[80vh] bg-[url("/assets/Case-Study-HeroSection-Banner.jpg")] bg-no-repeat bg-cover relative mb-100' 
        style={{
          "clip-path" : "path('M 0 0 L 0 600 C 620 700 1240 600  L 1240 0 Z')", 
        }}
      >
        {/* <div 
          className='w-full h-full absolute'
        ></div> */}
        <Heading 
          heading="Explore Our"
          subHeading="groundbraking case studies"
          subHeadingClassName="text-tertiary-500"
          className="w-full h-[90%] justify-center items-center"
        />
      </div>
      
      <ExploreBlog className="!py-32" heading={false}/>

      <Wonder />
    </>
  )
}




