import classNames from "classnames"

export default function ClientCards({heading, subHeading, icon, text, className, ...other}) {
  const classes = classNames("px-3 py-6 w-[24vw] bg-white rounded flex flex-col gap-3 justify-between items-center text-secondary-500x" ,{
    [className] : className,
  })

  return (
    <li className={classes}>
      <div className="flex w-full justify-center gap-4">
        {icon}
        <div className="flex flex-col justify-center">
          <h1 className="font-semibold">{heading}</h1>
          <h1 className="text-sm">{subHeading}</h1>
        </div>
      </div>
      <p className="text-center text-sm leading-[1.13rem]">
        {text}
      </p>
    </li>
  )
}
