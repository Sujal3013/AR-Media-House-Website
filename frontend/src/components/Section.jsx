import classNames from "classnames";
import { Heading } from "./";


export default function Section({
    heading, 
    middleLine, 
    subHeading, 
    headingClassName, 
    middleLineClassName, 
    subHeadingClassName, 
    allHeadingClassName,
    text,
    textClassName,
    Button1, 
    Button2,
    direction, 
    backgroundClassName,
    illustration,
}) {

  const bgClasses = classNames("flex justify-between px-screen-padding items-center gap-4", {
    [backgroundClassName]: backgroundClassName,
    "flex-row-reverse": direction && direction<0,
  })
  const headingClasses = classNames("", {
    [headingClassName]: headingClassName,
  })
  const subHeadingClasses = classNames("", {
    [subHeadingClassName]: subHeadingClassName,
  })
  const allHeadingClasses = classNames("", { 
    [allHeadingClassName]: allHeadingClassName,
  })

  const textClasses = classNames("" , {
    [textClassName]: textClassName,
    "text-secondary-500": !textClassName,
  })
  const divClasses = classNames("flex flex-col justify-center basis-1/2", {})

  return (
    <section className={bgClasses}>
      <div className={divClasses}>
        <Heading
          heading={heading}
          middleLine={middleLine}
          subHeading={subHeading}
          headingClassName={headingClasses}
          middleLineClassName={middleLineClassName}
          subHeadingClassName={subHeadingClasses}
          className={allHeadingClasses}
        />

        {
          text && 
          <p className={textClasses}>
            {text}
          </p>
        }

        {
          Button1 && Button1
        }
        {
            Button2 && Button2
        }
      </div>
        {
          illustration && illustration
        }
    </section>
  )
}