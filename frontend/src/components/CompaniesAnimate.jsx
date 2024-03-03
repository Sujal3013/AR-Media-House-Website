import { motion } from "framer-motion";
import classNames from "classnames";
import { useWinSizeContext } from "../context/winSizeContext";
import { useEffect, useState } from "react";

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
    BR_3, 
    BR_4, 
  } = useWinSizeContext()
  
  // const [state, setState] = useState({gap:"", start:"", middle:0, end:""});
  // useEffect(()=>{
  //   const gap = winSize <= BR_1 ? "4rem" : (winSize <= BR3 ? "7rem" : "8rem");
  //   setState({
  //     gap,
  //     start: `calc(0px - 100% - ${gap})`,
  //     middle: 0,
  //     end: `calc(100% - 0px + ${gap})`,
  //   })
  // }, [winSize]);
  const gap = winSize <= BR_1 ? "4rem" : (winSize <= BR_3 ? "7rem" : (winSize <= 1440 ? "8.5rem" : "9.9rem"));
  console.log(gap);
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