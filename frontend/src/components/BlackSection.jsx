import classNames from "classnames"

export default function BlackSection({children, className}) {
  const classes = classNames("bg-secondary-500 py-6 pt-0 px-screen-padding relative", {
    [className]: className,
  })

  return (
    <>
      <img
        src="./assets/triple-wave-dark-up.svg"
        alt="wave"
        className="bg-secondary-500 w-full"
      />

      <section className={classes}>
        {children}
      </section>

      <img className="w-full" src="./assets/triple-wave-dark-2.svg" alt="wave" />

    </>
  )
}
