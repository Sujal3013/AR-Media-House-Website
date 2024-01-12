import classNames from "classnames";
import { Circle, Heading } from "./";
import { useState, useRef } from "react";
import Slider from "react-slick";
import ExploreBlogList from "./ExploreBlogList";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ExploreBlog({ list, className }) {
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
    "bg-tertiary-500 px-screen-padding pt-12 pb-32 flex flex-col items-center relative",
    {
      [className]: className,
    }
  );

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0",
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: false,
  };

  return (
    <section className={classes}>
      <Heading heading="Explore Our" subHeading="Case Studies" className="items-center" />
      <div className="w-full flex items-center ">
        <img className="w-6 h-12 hover:cursor-pointer" src="./assets/leftArrow.png" alt="arrow" onClick={prevSlide}/>
        
        <Slider {...settings} className="w-full h-full" ref={sliderRef}>
          {list.map((blog, index) => (
              <ExploreBlogList blog={blog} focus={index===currentSlide} className="mt-24" key={index} />
          ))}
        </Slider>
        
        <img className="w-6 h-12 hover:cursor-pointer -translate-x-10" src="./assets/rightArrow.png" alt="arrow" onClick={()=>nextSlide()}/>
      </div>

      {/* Shapes */}
      <Circle className="top-[-5%] left-[5%]" />
    </section>
  );
}
