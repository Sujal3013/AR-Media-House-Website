import React from 'react'
import { CaseStudyCarousel } from '../components/CaseStudyCarousel';


export default function CaseStudies() {
  document.querySelector("title").innerHTML = "Case Studies - AR Media House";
  
    
  return (
    <>
    <div className='px-screen-padding py-20 bg-[url("/assets/wave1.svg")] bg-no-repeat bg-contain bg-bottom'>
      <div className=''>
            <p className='uppercase text-[64px] block text-center font-jost text-primary-500 font-bold leading-8'>Explore Our</p>
            <p className='text-secondary-500 text-center font-semibold text-[48px] font-playfair-display'>groundbreaking case studies</p>
      </div>
    </div>
    <div className='bg-additional-200 px-screen-padding py-10'>
      <CaseStudyCarousel/>
    </div>
    
    
    </>
  )
}




