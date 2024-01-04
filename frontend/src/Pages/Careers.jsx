import React, { useEffect, useState } from 'react'

export default function Careers() {
  document.querySelector("title").innerHTML = "Careers - AR Media House";
  const [blog,setBlog]=useState({});
  useEffect(()=>{
    // backend API to fetch blogs
  },[]);
  
  return (
    <div>
      <section className='Hero-section'>
{/* Add background image and content */}
      </section>
      <section className=''>
        <h1>CAREERS AT</h1>
        <p>AR MEDIA HOUSE</p>
        <div>
          
        </div>
      </section>
      
    </div>
  )
}
