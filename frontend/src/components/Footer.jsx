import React from 'react'
import DropDown from './DropDown'
import { Button, Circle, Triangle } from "./";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full bg-secondary-500 text-tertiary-500 pt-12 px-0 md:px-16 lg:px-24 relative'>
      <div className='flex flex-col gap-4 md:flex-row justify-between'>

      <div className='flex flex-col sm:flex-row md:flex-col justify-between md:justify-start px-4 md:px-0 gap-6'>
        <div>
          {/* AR MEDIA HOUSE's Logo and Name */}
          <div className='flex gap-2 items-center mb-4'>
            <h2 className='py-1 px-3 rounded-full bg-primary-500 inline text-secondary-500 text-3xl lg:text-5xl'>A</h2>
            <h1 className='text-sm lg:text-base'>AR MEDIA HOUSE</h1>
          </div>
          {/* Social Media Icons */}
          <div className='flex gap-2'>
            <a href="https://www.instagram.com/ar_media_house.ai/"><img className='w-7 lg:w-10' src='./assets/Instagram-Logo.svg' alt="instagram" /></a>
            <a href="https://www.facebook.com/profile.php?id=61556593812264"><img className='w-7 lg:w-10' src='./assets/facebook.svg' alt="facebook" /></a>
            <a href="https://www.linkedin.com/in/ar-media-house-4855732a5/"><img className='w-7 lg:w-10' src='./assets/linkedin.svg' alt="linkedin" /></a>
            <a href="mailto:pariharharish723@gmail.com"><img className='w-7 lg:w-10' src="./assets/mail.svg" alt="mail" /></a>
          </div>
        </div>
        <div className="flex gap-8 md:block">
          {/* Addresses Line 1 */}
          <div>
            <h1 className="text-sm lg:text-base">402,Kuber House</h1>
            <p className="text-sm lg:text-base">162,Kanchan Bagh,Indore</p>
            <p className="text-sm lg:text-base">Madhya Pradesh - 452001</p>
          </div>
        </div>
      </div>


      <div className='hidden md:block flex flex-col md:gap-6'>
        <h1 className='text-xl lg:text-2xl mb-4'>Services</h1>
        <ul className='flex flex-col gap-2'>
          {SERVICES_LIST.map((el,ind)=><Link key={ind} className="text-sm lg:text-base hover:cursor-pointer" to={el.to}>{el}</Link>)}
        </ul>
      </div>
      

      <div className='hidden md:block flex flex-col gap-6'>
        <h1 className='text-xl lg:text-2xl'>Site-map</h1>
        <ul className='flex flex-col gap-2 mt-2'>
          {SITE_MAP_LIST.map((el,ind)=><Link key={ind} className="text-sm lg:text-base hover:cursor-pointer" to={el.to}>{el.title}</Link>)}
        </ul>
      </div>


      <div className='hidden md:block flex flex-col gap-6'>
        <h1 className='text-xl lg:text-2xl'>Insta-feed</h1>
        <div className='grid grid-cols-2 gap-8'>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
        </div>
      </div>
      <div className='flex flex-col block md:hidden'>
        <DropDown 
        className="!border-b-0" 
        title="Services" 
        titleClass="text-xl lg:text-2xl py-2 px-4">
          <ul className='flex flex-col gap-2 mt-2 px-8'>
          {SERVICES_LIST.map((el,ind)=><Link key={ind} className="text-sm lg:text-base" to={el.to}>{el}</Link>)}
          </ul>
        </DropDown>
        <DropDown 
        className="!border-b-0" 
        title="Site-map" 
        titleClass="text-xl lg:text-2xl py-2 px-4">
          <ul className='flex flex-col gap-2 mt-2 px-8'>
          {SITE_MAP_LIST.map((el,ind)=>
            <Link key={ind} className="text-sm lg:text-base" to={el.to}>{el.title}</Link>
          )}
          </ul>
        </DropDown>
        <DropDown 
        className="" 
        title="Insta-feed" 
        titleClass="text-xl lg:text-2xl py-2 px-4">
          <div className='grid grid-cols-2 gap-8 px-8'>
            <div className='w-20 h-20 rounded bg-tertiary-500'></div>
            <div className='w-20 h-20 rounded bg-tertiary-500'></div>
            <div className='w-20 h-20 rounded bg-tertiary-500'></div>
            <div className='w-20 h-20 rounded bg-tertiary-500'></div>
          </div>
        </DropDown>
      </div>
      </div>

      <div className='mt-8 py-1 text-xs flex flex-wrap justify-center gap-1'>
        <p className='px-2 text-wrap sm:text-nowrap'>Copyrights @2023 are reserved with the ARMEDIAHOUSE.</p>
        
      </div>
      <div className='text-[10px] flex flex-wrap justify-center gap-1'>
      <p className='px-2 text-wrap sm:text-nowrap'>For more details contact +91 7470515476 or pariharharish723@gmail.com</p>
        
      </div>
      

      <Triangle className="top-[-30%] left-[5%]" secondary />
      <Triangle className="bottom-[8%] right-[16%]" secondary />
    </footer>
  )
}

const SERVICES_LIST = ["Performance Marketing", "E-commerce","Media Buying","Lead Generation","Content Marketing","Martech"]
const SITE_MAP_LIST = [
  { title: "Home", to: "/" },
  { title: "Technology", to: "/technologies" },
  { title: "Services", to: "/services" },
  { title: "Career", to: "/careers" },
  { title: "Case Studies", to: "/case-studies" },
  { title: "About", to: "/about" }
];

export default Footer