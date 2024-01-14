import classNames from "classnames";
import { Circle, Heading } from "./";
import { useState, useRef } from "react";
import Slider from "react-slick";
import ExploreBlogList from "./ExploreBlogList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useWinSizeContext } from "../context/winSizeContext";

export default function ExploreBlog({ className , heading=true, }) {
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

  const [currentSlide, setCurrentSlide] = useState(0);
  const {winSize, BR_1, BR_2, BR_3} = useWinSizeContext();
  let noSlides = 3;
  if(winSize > BR_2)noSlides = 3
  else if(winSize > BR_1)noSlides = 2
  else noSlides = 1

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: noSlides,
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
        
        <Slider {...settings} className="w-[90%] h-full" ref={sliderRef}>
          {list.map((blog, index) => (
              <ExploreBlogList blog={blog} focus={index===currentSlide} className="slider-item" key={index} />
          ))}
        </Slider>
        
        <img className="w-6 h-12 hover:cursor-pointer" src="./assets/RightButtonHalfArrowBlack.svg" alt="arrow" onClick={()=>nextSlide()}/>
      </div>

      {/* Shapes */}
      <Circle className="top-[-5%] left-[5%]" />
    </section>
  );
}

const list = [
  {
    heading: "Some Heading",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
    src: "./assets/blog1.webp",
  },{
    heading: "Our Success Story",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
    src: "./assets/blog2.webp",
  }, {
    heading: "Say Hello to Our Team",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
    src: "./assets/blog3.webp",
  }, {
    heading: "Some Heading",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
    src: "./assets/blog1.webp",
  }, {
    heading: "AR Media House's Heading",
    text: "lorem ipsum hli eaofe oiveawr oiveawhvoie ievuawh ovwe ae veawda vdsd ea vewaad aewrew cewa onv njkvewa  cewa vinwe jknuh oinwe",
    src: "./assets/blog2.webp",
  }
]