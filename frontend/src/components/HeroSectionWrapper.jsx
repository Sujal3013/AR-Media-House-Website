import classNames from "classnames"

export default function HeroSectionWrapper({children, className, behindBackground,home, ...other}) {
  
  const classes = classNames("px-screen-padding bg-secondary-500 text-tertiary-500 relative", {
    [className]: className,
  });
    
  return (
    <>
      <div 
        className={classes}
        {...other}
      >
          {children}
      </div>
      <img className="bg-tertiary-500 w-full" src={`${!home?"./assets/wave-extra.svg":"./assets/home_banner_wave1.svg"}`} alt="wave" />
    </>
  )
}
