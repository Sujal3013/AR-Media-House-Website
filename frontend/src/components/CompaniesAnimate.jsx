import classNames from "classnames";
import { useWinSizeContext } from "../context/winSizeContext";
import { useMemo } from "react";

export default function CompaniesAnimate({
  children,
  className,
  widthComapreToScreen = 1,
  ...other
}) {
  const { BR_1, BR_2, BR_3, winSize } = useWinSizeContext();
  const factor = useMemo(() => {
    if (winSize <= BR_1) return 2;
    if (winSize <= BR_2) return 1.8;
    if (winSize <= BR_3) return 1.5;
    return 1;
  });

  const classes = classNames("absolute left-0 relative overflow-hidden group", {
    [className]: className,
  });

  return (
    <div
      className={classes}
      style={{
        width: 100 * widthComapreToScreen * factor + "vw",
      }}
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
