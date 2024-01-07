import classNames from "classnames"

export default function HeroSectionWrapper({children, className, behindBackground, ...other}) {
  const gradientStyles = {
    background: "linear-gradient(to bottom right, #050D2E, rgb(5, 13, 46, 0.92))",
  };
  
  const classes = classNames("px-screen-padding rounded-br-[6rem] text-tertiary-500 relative", {
    [className]: className,
  });
  const behindBackground1 = classNames("h-20 w-20 absolute top-0 left-0 z-[-1]", {
    [behindBackground]: behindBackground,
    "bg-white": !behindBackground,
  })
  const behindBackground2 = classNames("h-20 w-20 absolute bottom-0 right-0 z-[-1]", {
    [behindBackground]: behindBackground,
    "bg-white": !behindBackground,
  })
  
  return (
    <div 
      style={gradientStyles}
      className={classes}
      {...other}
    >
        {children}
        <div className={behindBackground1}></div>
        <div className={behindBackground2}></div>
    </div>
  )
}
