
import { useState, useEffect, useCallback, } from "react";
import classNames from 'classnames'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion";

export default function FadeInUp({children, className, downLength}) {
    // const [y, setY] = useState(0);
    // const [scrollDown, setScrollDown] = useState(false);
    // const handleNavigation = useCallback(e => {
    //     const window = e.currentTarget;
    //     if (y > window.scrollY && scrollDown) {
    //         setScrollDown(false);
    //     } else if (y < window.scrollY && !scrollDown) {
    //       setScrollDown(true);
    //     }
    //     setY(window.scrollY);
    // }, [y]);
  
    // useEffect(() => {
    //     setY(window.scrollY);
    //     window.addEventListener("scroll", handleNavigation);
      
    //     return () => {
    //       window.removeEventListener("scroll", handleNavigation);
    //     };
    // }, [handleNavigation]);

  if(!downLength) downLength = 100;
  const [ref, inView] = useInView({triggerOnce: true});

  const classes = classNames("", {
    [className]: className,
  })

  const animationVariants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: downLength, },
  };

  return (
    <motion.div 
      className={classes} 
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{duration: 0.4, ease: "easeOut"}}
    >
        {children}
    </motion.div>
  )
}
