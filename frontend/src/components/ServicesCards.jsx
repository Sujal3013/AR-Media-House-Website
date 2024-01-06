import classNames from "classnames"

export default function ServicesCards({heading, icon, text, className}) {
  const classes = classNames("w-[18vw] p-4 gap-2 flex flex-col items-center justify-between bg-tertiary-500 rounded font-bold", { 
    [className]: className,
  });

  return (
    <li className={classes}>
        <h1 className="text-xl text-secondary-500 text-center leading-5">{heading}</h1>
        {icon && icon}
        <p className="text-secondary-500 text-center text-sm">{text}</p>
    </li>
  )
}
