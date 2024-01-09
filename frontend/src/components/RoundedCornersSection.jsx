import classNames from "classnames"

export default function RoundedCornersSection({children, className, behindBackground, bothRounded}) {
  const classes = classNames("bg-secondary-500 rounded-br-[6rem]", {
    "rounded-tl-[6rem]": bothRounded,
    [className]: className,
  })
  const behindBbClasses1 = classNames("h-32 w-32 absolute z-[-1] bottom-0 right-0", {
    [behindBackground]: behindBackground,
    "bg-secondary-500": !behindBackground,
  })
  const behindBbClasses2 = classNames("h-32 w-32 absolute z-[-1] top-0 left-0", {
    [behindBackground]: behindBackground,
    "bg-secondary-500": !behindBackground,
  })

  return (
    <section className={classes}>
        {children}
        <div className={behindBbClasses1}></div>
        {bothRounded && <div className={behindBbClasses2}></div>}
    </section>
  )
}
