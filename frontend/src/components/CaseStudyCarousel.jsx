import React from 'react'
import Button from "../components/Button"
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CustomArrows from './CustomArrows';



export const CaseStudyCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomArrows direction="prev" />,
    nextArrow: <CustomArrows direction="next" />,
    easing: 'ease',
}
  return (
    <div className='pt-10 p-4 gap-2'>
      <Slider {...settings}>
        {blogs.map((blog)=>(
          <div className='bg-white shadow-sm cursor-pointer h-auto w-auto text-black rounded-sm px-2 py-1 pb-4 mx-auto overflow-hidden hover:scale-[1.02] transition-transform duration-300'>
            <div className='flex  rounded-md pt-2'>
              <img src={blog.image} alt="Blog-image" className='rounded-md w-full' />
            </div>
            <div className=' flex flex-col justify-center items-center gap-4 p-4'>
              <h1 className='underline break-words'>{blog.name}</h1>
              <p>{blog.description}</p>
            </div>
            <Button to={`/case-studies/${blog.name}`}  className="bg-primary-500 mx-auto px-4 py-3 rounded-sm">Read more</Button>
          </div>
        ))}
        </Slider>
      </div>
  )
}

const blogs=[
  { 
    id:1,
    name:"AR Trader Revolutionizes Lead Generation and Brand Awareness with AR Media House",
    domain:"Marketing",
    image:"/assets/Case-study.jpg",
    description:"Once upon a time, in the dynamic realm of financial education, AR Research House of Finance and Consultancy Services, affectionately known as AR Trader, embarked on a transformative journey…"
  },
  {
    id:2,
    name:"Real Estate Elevates Lead Generation with AR Media",
    domain:"Marketing",
    image:"/assets/Case-study.jpg",
    description:"Embark on the journey of a Real Estate company seeking to revolutionise its lead generation strategy with the expertise of AR Media. Discover how strategic planning…"
  },
  { id:3,
    name:" Insta Transfer's Digital Leap with AR Media House",
    domain:"Marketing",
    image:"/assets/Case-study.jpg",
    description:"In the bustling landscape of B2B services, Insta Transfer, a multifaceted company offering courier services, banking logistics, payments, and a revolutionary franchise model…"
  }
]
