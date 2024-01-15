import React from 'react'
import { ExploreBlog, Heading, Wonder } from '../components';


export default function CaseStudies() {
  document.querySelector("title").innerHTML = "Case Studies - AR Media House";
  
  return (
    <>
      <div 
        className='h-[80vh] bg-[url("/assets/Case-Study-HeroSection-Banner.jpg")] bg-no-repeat bg-cover relative mb-100' 
      >
        {/* <div 
          className='w-full h-full absolute'
        ></div> */}
        <Heading 
          heading="Explore Our"
          headingClassName="text-center text-primary-500"
          subHeading="groundbraking case studies"
          subHeadingClassName="text-tertiary-500 text-center"
          className="w-full h-[90%] justify-center items-center"
        />
      </div>
      
      <ExploreBlog className="!py-32" heading={false}/>

      <Wonder />
    </>
  )
}




