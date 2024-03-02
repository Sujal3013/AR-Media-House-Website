import classNames from "classnames"

export default function ClientCards({heading, subHeading, icon, text, className, index, ...other}) {
  const classes = classNames("px-3 py-6 w-[80vw] sm:w-64 md:w-[24vw] bg-white rounded flex flex-col gap-3 justify-between items-center text-secondary-500x" ,{
    [className] : className,
  })

  // return (
  //   <li className={classes}>
  //     <div className="flex w-full justify-center gap-4">
  //       {icon}
  //       <div className="flex flex-col justify-center">
  //         <h1 className="text-base sm:text-lg">{heading}</h1>
  //         <h1 className="text-xs sm:text-sm">{subHeading}</h1>
  //       </div>
  //     </div>
  //     <p className="text-center text-sm leading-[1.13rem]">
  //       {text}
  //     </p>
  //   </li>
  // )
  return (
    <li 
      className="rounded-xl text-white w-[90%] sm:w-[80%] basis-auto md:basis-[28%] relative min-h-[400px] sm:min-h-[450px] myCard"
    >
      <div className="innerCard">

        <div 
          className="frontSide bg-cover bg-center relative"
          style={{backgroundImage: `url('${icon}')`}}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute bottom-4 right-4 text-end">
            <h1 className="text-3xl md:text-5xl">{heading}</h1>
            <h3 className="text-md md:text-xl">{subHeading}</h3>
          </div>
        </div>

        <div className="backSide p-2 md:p-4 text-center flex flex-col items-start justify-center bg-tertiary-500 !text-secondary-500 !font-normal">
          <img src="/assets/inverted-commas.png" alt="comma" className="w-16 h-16 top-8 left-8 z-[-1]" />
          <p>{text}</p>
        </div>
      </div>
    </li>
  )
}
