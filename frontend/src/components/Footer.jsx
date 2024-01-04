import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-secondary-500 relative pt-36 pb-12 text-tertiary-500 flex items-start justify-around '>


      <div className='flex flex-col gap-6'>
        {/* AR MEDIA HOUSE's Logo and Name */}
        <div className='flex gap-2 items-center'>
          <h2 className='py-1 px-3 rounded-full bg-primary-500 inline text-secondary-500 text-5xl'>A</h2>
          <h1>AR MEDIA HOUSE</h1>
        </div>
        {/* Social Media Icons */}
        <div className='flex gap-1'>
          <img className='w-10 h-10' src='./assets/Instagram-Logo.svg' alt="instagram" />
          <img className='w-10 h-10' src='./assets/facebook.svg' alt="facebook" />
          <img className='w-10 h-10' src='./assets/linkedin.svg' alt="linkedin" />
          <img className='w-10 h-10' src="./assets/twitter.svg" alt="twitter" />
          <img className='w-10 h-10' src="./assets/mail.svg" alt="mail" />
        </div>
        {/* Addresses Line 1 */}
        <div>
          <h1>Address Line 1</h1>
          <p>--------------------------------------------</p>
          <p>------------------</p>
        </div>
        {/* Address Line 2 */}
        <div>
          <h1>Address Line 2</h1>
          <p>--------------------------------------------</p>
          <p>--------</p>
        </div>
      </div>


      <div className='flex flex-col gap-6'>
        <h1 className='text-2xl'>Services</h1>
        <ul className='flex flex-col gap-2'>
          <li>Performance Marketing</li>
          <li>E-commerce</li>
          <li>Media Buying</li>
          <li>Lead Generation</li>
          <li>Content Marketing</li>
          <li>Martech</li>
        </ul>
      </div>


      <div className='flex flex-col gap-6'>
        <h1 className='text-2xl'>Site-map</h1>
        <ul className='flex flex-col gap-2'>
          <li>Home</li>
          <li>Technology</li>
          <li>Services</li>
          <li>Career</li>
          <li>Blogs</li>
          <li>About</li>
        </ul>
      </div>


      <div className='flex flex-col gap-6'>
        <h1 className='text-2xl'>Insta-feed</h1>
        <div className='grid grid-cols-2 gap-4'>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
          <div className='w-20 h-20 rounded bg-tertiary-500'></div>
        </div>
      </div>

      <div className='absolute bottom-4 text-xs'>
        Copyrights @2023 are reserved with the ARMEDIAHOUSE. For more details contact +91 XXXXXXXXXX or armediahouse@gmail.com
      </div>
    </footer>
  )
}

export default Footer