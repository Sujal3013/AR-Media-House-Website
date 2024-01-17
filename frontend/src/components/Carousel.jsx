import { useState, useRef } from "react";
import classNames from "classnames";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Heading } from "./"
export default function Carousel({
  className, 
  sliderClassName, 
  noOfSlides = 1, 
  itemsList, 
  itemClassName, 
  extraElement,
}){
  const classes = classNames("w-fit flex items-center justify-between", {
      [className]: className,
    }
  );
  const sliderClasses = classNames("w-[30vw] h-full", {
    [sliderClassName]: sliderClassName,
  })

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: noOfSlides,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: "0px",
    beforeChange: (current, next) => setCurrentSlide(next),
    arrows: false,
  };

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

  return (
    <div className={classes}>
      <img className="w-4 h-8 sm:w-6 sm:h-12 hover:cursor-pointer" src="./assets/LeftButtonHalfArrowWhite.svg" alt="arrow" onClick={prevSlide}/>
      <Slider {...settings} className={sliderClasses} ref={sliderRef}>
        {
          itemsList.map((item, index) => item)
        }
      </Slider>
      {extraElement && extraElement}
      <img className="w-4 h-8 sm:w-6 sm:h-12 hover:cursor-pointer" src="./assets/RightButtonHalfArrowWhite.svg" alt="arrow" onClick={nextSlide}/>
    </div>
  )
}
