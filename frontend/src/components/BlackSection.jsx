import classNames from "classnames"

export default function BlackSection({
  children, 
  className, 
  topWave = true, 
  topWaveClassName,
  bottomWave = true,
  bottomWaveClassName,
}) {
  const classes = classNames("bg-secondary-500 py-6 pt-0 px-screen-padding relative", {
    [className]: className,
  })
  const topWaveClasses = classNames("w-full bg-secondary-500", {
    [topWaveClassName]: topWaveClassName,
  })
  const bottomWaveClasses = classNames("w-full", {
    [bottomWaveClassName]: bottomWaveClassName,
  })

  return (
    <>
      {
        topWave && 
        <img
          src="./assets/triple-wave-dark-up.svg"
          alt="wave"
          className={topWaveClasses}
        />
      }

      <section className={classes}>
        {children}
      </section>

      {
        bottomWave && 
        <img className={bottomWaveClasses} src="./assets/triple-wave-dark-2.svg" alt="wave" />
      }

    </>
  )
}
