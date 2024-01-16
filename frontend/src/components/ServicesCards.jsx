import classNames from "classnames"
import FadeInUp from './FadeInUp';

export default function ServicesCards({heading, headingClassName, icon, iconClassName, text, textClassName, className, button}) {
  const classes = classNames("min-w-52 md:min-w-40 w-[18vw] p-2 lg:p-4 max-h-[335px] h-[350px] sm:h-[390px] gap-0.5 lg:gap-2 flex flex-col items-center justify-evenly sm:justify-between bg-white rounded", { 
    [className]: className,
  });
  const fadeClasses = classNames("w-fit h-fit", {
    [className]: className,
  })
  const headingClasses = classNames("font-bold text-base lg:text-xl text-secondary-500 text-center leading-5", {
    [headingClassName]: headingClassName
  });

  const textClasses = classNames("text-secondary-500 text-center text-xs lg:text-sm", {
    [textClassName]: textClassName,
  });


  return (
    <FadeInUp className={fadeClasses}>
      <li className={classes + " !static"}>
        <h1 className={headingClasses}>{heading}</h1>
        {icon && icon}
        <p className={textClasses}>{text}</p>
        {button && button}
      </li>
    </FadeInUp>
  )
}
