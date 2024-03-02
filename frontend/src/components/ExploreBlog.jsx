import classNames from "classnames";
import { Circle, Heading } from "./";
import { useState, useRef } from "react";
import Slider from "react-slick";
import ExploreBlogList from "./ExploreBlogList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWinSizeContext } from "../context/winSizeContext";

const list = [
  {
    id:1,
    heading: "AR Trader Revolutionizes Lead Generation",
    text: "Once upon a time, in the dynamic realm of financial education, AR Research House of Finance and Consultancy Services, affectionately known as AR Trader, embarked on a transformative journey...",
    src: "/assets/revolutionizes-lead-generation.gif",
  },{
    id:2,
    heading: "Real Estate Elevates Lead Generation with AR Media",
    text: "Embark on the journey of a Real Estate company seeking to revolutionise its lead generation strategy with the expertise of AR Media.Discover how strategic planning and digital prowess...",
    src: "/assets/revolutionizes-lead-generation-2.png",
  },{
    id:3,
    heading: "Insta Transfer's Digital Leap with AR Media House",
    text: "In the bustling landscape of B2B services, Insta Transfer, a multifaceted company offering courier services, banking logistics, payments, and a revolutionary franchise model...",
    src: "/assets/digital-marketing.gif",
  }
]

export default function ExploreBlog({ className , heading=true, itemsList=list, slides, sliderClassName}) {
  const sliderRef = useRef(null);

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const classes = classNames(
    "bg-tertiary-500 px-screen-padding pt-12 pb-20 sm:pb-32 flex flex-col items-center relative",
    {
      [className]: className,
    }
  );
  const sliderClasses = classNames("w-[90%] h-full", {
    [sliderClassName]: sliderClassName,
  })

  const [currentSlide, setCurrentSlide] = useState(0);
  const {winSize, BR_1, BR_2, BR_3} = useWinSizeContext();
  let noSlides = 3;
  if(winSize > BR_2) noSlides = 3
  else if(winSize > BR_1)noSlides = 2
  else noSlides = 1

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slides || noSlides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: false,
  };

  return (
    <section className={classes}>
      { heading && <Heading heading="Explore Our" subHeading="Case Studies" className="items-center mb-12" />}
      <div className="w-full flex items-center justify-between">
        <img className="w-6 h-12 hover:cursor-pointer" src="./assets/LeftButtonHalfArrowBlack.svg" alt="arrow" onClick={prevSlide}/>
        
        <Slider {...settings} className={sliderClasses} ref={sliderRef}>
          {itemsList.map((blog, index) => (
              <ExploreBlogList blog={blog} focus={index===currentSlide} className="slider-item" key={index} {...blog} />
          ))}
        </Slider>
        
        <img className="w-6 h-12 hover:cursor-pointer" src="./assets/RightButtonHalfArrowBlack.svg" alt="arrow" onClick={()=>nextSlide()}/>
      </div>

      {/* Shapes */}
      <Circle className="top-[-5%] left-[5%]" />
    </section>
  );
}
