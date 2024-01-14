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
    "flex justify-between px-screen-padding py-16 items-center gap-6 relative",
    {
      [backgroundClassName]: backgroundClassName,
      "flex-row-reverse": direction && direction < 0,
    }
  );
  const headingClasses = classNames("font-playfair-display text-[48px] font-bold text-primary-500", {
    [headingClassName]: headingClassName,
  });

  const yearClasses=classNames("mx-6 text-center px-6 py-3 bg-primary-500 text-white rounded-3xl z-10",{
    [YearClassName]:YearClassName
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
