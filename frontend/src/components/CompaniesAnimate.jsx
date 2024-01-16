import { motion } from "framer-motion";
import classNames from "classnames";
import { useWinSizeContext } from "../context/winSizeContext";
import { useEffect } from "react";

export default function CompaniesAnimate({children, className, direction=1, length, ...other}) {
  const classes = classNames("absolute left-0", {
    [className]: className,
  });
  const classes2 = classNames("absolute left-0 bottom-0", {
    [className]: className,
  });

  const {
    winSize,
    BR_1,
  } = useWinSizeContext()

  const gap = winSize <= BR_1 ? "4rem" : "7rem";
  const start = `calc(0px - 100% - ${gap})`;
  const middle = 0;
  const end = `calc(100% - 0px + ${gap})`;

  return (
    <>
      <motion.ul 
            className={classes}
            initial={{x: direction > 0 ? start : end}}
            animate={{
              x: middle,
              transition: {
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }
            }}
      >
        {children}
      </motion.ul>
      <motion.ul 
            className={classes}
            initial={{x : middle}}
            animate={{
              x: direction > 0 ? end : start,
              transition: {
                duration: 30,
                ease: "linear",
                repeat: Infinity, 
              }
            }}
      >   
        {children}
      </motion.ul>
      {/* {
        winSize <= BR_1 && 
        <>
        <motion.ul 
            className={classes2}
            initial={{x: direction < 0 ? start : end}}
            animate={{
              x: middle,
              transition: {
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }
            }}
      >
        {children}
      </motion.ul>
      <motion.ul 
            className={classes2}
            initial={{x : middle}}
            animate={{
              x: direction < 0 ? end : start,
              transition: {
                duration: 30,
                ease: "linear",
                repeat: Infinity, 
              }
            }}
      >   
        {children}
      </motion.ul>
      </>
      } */}
    </>   
  )
}

// flex justify-start items-center gap-20