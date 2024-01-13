import classNames from "classnames"

export default function HeroSectionWrapper({children, className, behindBackground, whiteWaveBackground, ...other}) {
  
  const classes = classNames("px-screen-padding bg-secondary-500 text-tertiary-500 relative overflow-hidden", {
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
      <img className="w-full" src={`${!whiteWaveBackground?"./assets/triple-wave-dark-1.svg":"./assets/triple-wave-dark-2.svg"}`} alt="wave" />
    </>
  )
}
