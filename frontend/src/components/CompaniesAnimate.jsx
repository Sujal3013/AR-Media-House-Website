import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function CompaniesAnimate({children, index, className, totalLength, direction, ...other}) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  
  const handleResize = () => {
    setScreenWidth(window.innerWidth);
  };
  
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [screenWidth]);
  const classes = classNames("max-w-32 max-h-28 flex justify-center items-center absolute", {
    "left-[-400px]": !direction || direction >=0,
    "right-[-400px]": direction && direction <0,
    [className]: className,
  })

  const finalX = (!direction || direction>=0)? screenWidth + 400 : -screenWidth-400;
  console.log(totalLength)
  return (
    <motion.div
      animate={{
        x: finalX,
        transition: {
            duration: 15,
            delay: index*2,
            ease: "linear",
            repeat: Infinity,
            repeatDelay: totalLength*2 - 15,
        }
    }}
      className={classes}
      {...other}
    >
        {children}
    </motion.div>
  )
}
