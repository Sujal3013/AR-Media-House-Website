import { motion } from "framer-motion";
import classNames from "classnames";

export default function CompaniesAnimate({children, className, direction, length, ...other}) {
  const classes = classNames("absolute left-0", {
    [className]: className,
  });

  return (
    <>
      <motion.ul 
            className={classes}
            initial={{x: "calc(0px - 100% - 7rem)"}}
            animate={{
              x: 0,
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
            initial={{x: 0}}
            animate={{
              x: "calc(100% - 0px + 7rem)",
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
  )
}

// flex justify-start items-center gap-20