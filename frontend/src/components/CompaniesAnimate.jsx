import classNames from "classnames";

export default function CompaniesAnimate({
  children,
  className,
  widthComapreToScreen = 1,
  ...other
}) {
  if (widthComapreToScreen < 1) widthComapreToScreen = 1;

  const classes = classNames("absolute left-0 relative overflow-hidden group", {
    [className]: className,
  });

  return (
    <div
      className={classes}
      style={{ width: 100 * widthComapreToScreen + "vw" }}
      {...other}
    >
      <ul className="absolute w-full flex justify-between items-center gap-8 animate-scroll-auto group-hover:pause-animation">
        <div className="h-full" />
        {children}
      </ul>

      <ul className="absolute w-full flex justify-between items-center gap-8 animate-scroll-auto-delayed group-hover:pause-animation">
        <div className="h-full" />
        {children}
      </ul>
    </div>
  );
}
