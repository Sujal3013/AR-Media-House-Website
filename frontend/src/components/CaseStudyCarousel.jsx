import React from 'react'
import Button from "../components/Button"
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowLeft class="arrows" style={{color:"white"}}/>
    </div>
  )
  }

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return(
    <div onClick={onClick} className={`arrow ${className}`} >
      <AiOutlineArrowRight class="arrows" style={{color:"white"}}/>
    </div>
  )
}

export const CaseStudyCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    // speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    // easing: 'ease',
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
    name:"Elevating Excellence: Idea Clan’s Networking Pursuit at PI Live Europe 2023",
    domain:"Marketing",
    image:"/assets/Case-study.svg",
    description:"The PI Live Europe conference, hosted in the illustrious city of London on October 24th and 25th, 2023, provided an esteemed platform for marketing experts to augment their performance industry…"
  },
  {
    id:2,
    name:"Elevating Excellence: Idea Clan’s Networking Pursuit at PI Live Europe 2023",
    domain:"Marketing",
    image:"/assets/Case-study.svg",
    description:"The PI Live Europe conference, hosted in the illustrious city of London on October 24th and 25th, 2023, provided an esteemed platform for marketing experts to augment their performance industry…"
  },
  { id:3,
    name:"Elevating Excellence: Idea Clan’s Networking Pursuit at PI Live Europe 2023",
    domain:"Marketing",
    image:"/assets/Case-study.svg",
    description:"The PI Live Europe conference, hosted in the illustrious city of London on October 24th and 25th, 2023, provided an esteemed platform for marketing experts to augment their performance industry…"
  },
  {
    id:4,
    name:"Elevating Excellence: Idea Clan’s Networking Pursuit at PI Live Europe 2023",
    domain:"Marketing",
    image:"/assets/Case-study.svg",
    description:"The PI Live Europe conference, hosted in the illustrious city of London on October 24th and 25th, 2023, provided an esteemed platform for marketing experts to augment their performance industry…"
  },
  {
    id:5,
    name:"Elevating Excellence: Idea Clan’s Networking Pursuit at PI Live Europe 2023",
    domain:"Marketing",
    image:"/assets/Case-study.svg",
    description:"The PI Live Europe conference, hosted in the illustrious city of London on October 24th and 25th, 2023, provided an esteemed platform for marketing experts to augment their performance industry…"
  }
]
