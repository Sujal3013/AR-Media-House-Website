import { useState, useEffect } from "react";
import { 
    AnimateTextBackground,
    FadeIn, 
    Circle, 
    Heading, 
} from "./";
import classNames from "classnames";

export default function AnimateIllustrationSection({
    heading, 
    subHeading, 
    headingClassName,
    subHeadingClassName, 
    allHeadingClassName,
    text, 
    list, 
}) {

  const [currImage, setCurrImage] = useState(0);

  useEffect(()=>{
    const id = setTimeout(()=>{
      setCurrImage((currImage + 1) % list.length)
    }, 5000)
  
    return ()=>{
      clearTimeout(id)
    }
  }, [currImage]);

  return (
    <>
      {/* ROCKET SECTION */}
      <section className="flex py-10 px-screen-padding relative">
        <div className="flex flex-col basis-[120%] gap-4">
          <Heading
            heading={heading}
            headingClassName={headingClassName}
            subHeading={subHeading}
            subHeadingClassName={subHeadingClassName}
            className={allHeadingClassName}
          />
          <p className="text-sm sm:text-base">{text}</p>
          <div className="flex flex-col">
            {
              list.map((item, index)=>{
                return (
                  <AnimateTextBackground
                    className="!w-[80%]"
                    heading={item.heading}
                    text={item.text}
                    key={index}
                    focus={index===currImage}
                  />
                )
              })
            }
          </div>
        </div>
        <div className="hidden md:block w-full relative">
            {
              list.map((item, index)=> 
                <FadeIn key={index} duration={1.5} when={index===currImage} className="absolute bottom-[-5%] right-0"> {item.illustration} </FadeIn>
              )
            }
        </div>
        {/* Shapes */}
        <Circle className="top-[15%] right-[28%] md:top-[-15%] md:right-[30%]" />
      </section>
    </>
  )
}
