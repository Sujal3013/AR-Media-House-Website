import classNames from "classnames";
import React from "react";
import { Button, Heading } from "../components";

const StoryComponent = ({
  aboutPath, 
  heading,
  headingClassName,
  Year,
  YearClassName,
  text,
  textClassName,
  className,
  backgroundClassName,
  Image,
  children,
  direction,
}) => {
  const bgClasses = classNames(
    "px-screen-padding py-16 gap-6 relative",
    "flex flex-col-reverse justify-center md:justify-between items-center",
    {
      [backgroundClassName]: backgroundClassName,
      "md:flex-row-reverse": direction && direction < 0,
      "md:flex-row": direction && direction > 0,
    }
  );
  const headingClasses = classNames("font-playfair-display text-3xl sm:text-4xl md:text-5xl leading-1.2 font-bold text-primary-500", {
    [headingClassName]: headingClassName,
  });

  const yearClasses=classNames("absolute lg:static mx-6 text-base sm:text-xl lg:text-base text-center px-3 sm:px-6 py-1 sm:py-3 bg-primary-500 text-white rounded-3xl z-10",{
    [YearClassName]:YearClassName,
    "top-5 right-5 md:right-auto md:left-5 ":direction*1 < 0,
    "top-5 right-5 ":direction*1 > 0,
  })
  const textClasses = classNames("basis-1/2", {
    [textClassName]: textClassName,
    "text-secondary-500": !textClassName,
  });
  const divClasses = classNames("flex flex-col justify-center basis-1/2 gap-10 ", {});

  return (
    <>
    {children}
    <section className={bgClasses}>
        
     {Image && Image}
      <div className={yearClasses}><p>{Year}</p></div>
      <div className={divClasses}>
        <h1 className={headingClasses}>{heading}</h1>
        <p className={textClasses}>
          {text}
        </p>
      </div>

      {/* {
        aboutPath && aboutPath
      } */}
    </section>
    </>
  );
};

export default StoryComponent;
