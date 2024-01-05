import classNames from "classnames"

export default function Heading({heading, subHeading, center, headingClassName, subHeadingClassName, className, ...other}) {

  const classes = classNames("", {
    "flex flex-col justify-center items-center": center,
    [className]: className,
  })
  const headingClasses = classNames("font-bold text-5xl uppercase", {
      "text-primary-500": !headingClassName,
      [headingClassName]: headingClassName,
  })
  const subHeadingClasses = classNames("font-bold text-4xl", {
      "text-secondary-500": !subHeadingClassName,
      [subHeadingClassName]: subHeadingClassName,
  })

  return (
    <div className={classes} {...other}>
      <h1 className={headingClasses}>
        {heading}
      </h1>
      <h2 className={subHeadingClasses}>
        {subHeading}
      </h2>
    </div>
  )
}
