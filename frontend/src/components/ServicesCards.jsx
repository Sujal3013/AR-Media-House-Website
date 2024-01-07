import classNames from "classnames"
import FadeInUp from './FadeInUp';

export default function ServicesCards({heading, icon, text, className}) {
  const classes = classNames("w-[18vw] p-4 h-[50vh] gap-2 flex flex-col items-center justify-between bg-white rounded", { 
    // [className]: className,
  });
  const fadeClasses = classNames("w-fit h-fit", {
    [className]: className,
  })

  return (
    <FadeInUp className={fadeClasses}>
    <li className={classes}>
          <h1 className="font-bold text-xl text-secondary-500 text-center leading-5">{heading}</h1>
          {icon && icon}
          <p className="text-secondary-500 text-center text-sm">{text}</p>
    </li>
    </FadeInUp>
  )
}
