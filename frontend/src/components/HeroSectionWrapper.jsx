import classNames from "classnames"

export default function HeroSectionWrapper({children, className, behindBackground, ...other}) {
  
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
      <img className="bg-tertiary-500" src="./assets/dark-wave-2.svg" alt="wave" />
    </>
  )
}
