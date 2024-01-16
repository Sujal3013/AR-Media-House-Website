// import { 
//   useState, 
//   // useEffect, 
//   // useCallback, 
// } from "react";

import classNames from 'classnames'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"
export default function FadeInUp({children, className, downLength, animate=true}) {
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

  const [ref, inView] = useInView({triggerOnce: true});

  const classes = classNames("", {
    [className]: className,
  })

  const animationVariants = {
    animate: { opacity: 1, y: 0, transition: {duration: 0.6}},
    // visible: {opacity: 1, y: 0, transition: {duration: 0.0001,}},
    hidden: { opacity: 0, y: downLength || 100, },
  };

  return (
    <motion.div 
      className={classes} 
      ref={ref}
      variants={animationVariants}
      initial="hidden"
      animate={inView && animate ? "animate" : "hidden"}
    >
        {children}
    </motion.div>
  )
}
