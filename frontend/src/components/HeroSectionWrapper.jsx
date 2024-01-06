import classNames from "classnames"

export default function HeroSectionWrapper({children, className, ...other}) {
  
  const gradientStyles = {
    background: "linear-gradient(to bottom right, #050D2E, rgb(5, 13, 46, 0.92))",
  };
  
  const classes = classNames("px-screen-padding rounded-br-[6rem] text-tertiary-500 relative", {
    [className]: className,
  });

  return (
    <div 
      style={gradientStyles}
      className={classes}
      {...other}
    >
        {children}
        <div className="z-[-1] h-[50vh] w-[50vw] bg-white absolute bottom-0 right-0"></div>
    </div>
  )
}
