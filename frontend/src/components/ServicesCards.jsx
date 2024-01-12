import classNames from "classnames"
import FadeInUp from './FadeInUp';

export default function ServicesCards({heading, icon, text, className}) {
  const classes = classNames("min-w-40 w-[18vw] p-2 lg:p-4 h-[50vh] gap-0.5 lg:gap-2 flex flex-col items-center justify-between bg-white rounded", { 
    // [className]: className,
  });
  const fadeClasses = classNames("w-fit h-fit", {
    [className]: className,
  })

  return (
    <FadeInUp className={fadeClasses}>
    <li className={classes}>
          <h1 className="font-bold text-base lg:text-xl text-secondary-500 text-center leading-5">{heading}</h1>
          {icon && icon}
          <p className="text-secondary-500 text-center text-xs lg:text-sm">{text}</p>
    </li>
    </FadeInUp>
  )
}
