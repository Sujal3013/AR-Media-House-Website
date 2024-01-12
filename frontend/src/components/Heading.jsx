import classNames from "classnames"

export default function Heading({
  heading, 
  middleLine, 
  subHeading, 
  headingClassName, 
  middleLineClassName, 
  subHeadingClassName, 
  className, 
  ...other
}) {

  const classes = classNames("flex flex-col gap-[-2px]", {
    [className]: className,
  })
  const headingClasses = classNames("font-bold text-4xl sm:text-5xl lg:text-6xl uppercase", {
    "text-primary-500": !headingClassName,
    [headingClassName]: headingClassName,
  })
  const middleLineClasses = classNames("font-bold text-6xl sm:text-7xl lg:text-8xl uppercase", {
    [middleLineClassName]: middleLineClassName,
  });
  const subHeadingClasses = classNames("font-semibold text-3xl sm:text-4xl lg:text-5xl mt-[-2px]", {
    "text-secondary-500": !subHeadingClassName,
    [subHeadingClassName]: subHeadingClassName,
  })

  return (
    <div className={classes} {...other}>
      <h1 className={headingClasses}>
        {heading}
      </h1>
      {
        middleLine && 
        <h1 className={middleLineClasses}>
          {middleLine}
        </h1>
      }
      <h2 className={subHeadingClasses}>
        {subHeading}
      </h2>
    </div>
  )
}
