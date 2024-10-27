import classNames from "classnames";

export default function HeroSectionWrapper({
  children,
  className,
  behindBackground,
  whiteWaveBackground,
  waveClassName,
  ...other
}) {
  const classes = classNames(
    "px-screen-padding bg-secondary-500 text-tertiary-500 relative",
    {
      [className]: className,
    }
  );
  const waveClasses = classNames("wave-image", {
    [waveClassName]: waveClassName,
  });
  return (
    <>
      <section className={classes} {...other}>
        {children}
      </section>
      <img
        className={waveClasses}
        src={`${
          !whiteWaveBackground
            ? "./assets/triple-wave-dark-1.svg"
            : "./assets/triple-wave-dark-2.svg"
        }`}
        alt="wave"
      />
    </>
  );
}
