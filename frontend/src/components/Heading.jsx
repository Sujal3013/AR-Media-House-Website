import classNames from "classnames"

export default function Heading({heading, subHeading, center, headingColor, subHeadingColor}) {

  headingColor = "text-" + headingColor;
  subHeadingColor = "text-" + subHeadingColor;

  const p = "text-primary-500";
  const classes = classNames("", {
    "flex flex-col justify-center items-center": center
  })
  const headingClasses = classNames("font-bold text-5xl uppercase mt-4", {
      [p]: !headingColor,
      [headingColor]: headingColor,
  })
  const subHeadingClasses = classNames("font-bold text-4xl", {
      "text-secondary-500": !subHeadingColor,
      [subHeadingColor]: subHeadingColor,
  })
  return (
    <div className={classes}>
      <h1 className={headingClasses}>
        {heading}
      </h1>
      <h2 className={subHeadingClasses}>
        {subHeading}
      </h2>
    </div>
  )
}
