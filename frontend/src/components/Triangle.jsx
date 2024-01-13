import { motion } from "framer-motion";
import classNames from "classnames";

export default function Triangle({className, primary, secondary, duration}) {
  const classes = classNames("w-0 h-0 border-[40px] sm:border-[60px] border-transparent border-t-0 border-b-[65px] sm:border-b-[100px] absolute blur-[6px] z-10 hover:cursor-grab active:cursor-grabbing", {
    [className]: className,
    'border-b-primary-500 opacity-40': !secondary,
    'border-b-tertiary-500 opacity-25': secondary,
  })

  return (
    <motion.div
      className={classes}
      initial={{rotate: 0}}
      animate={{
        rotate: 360,
        transition: {
            duration: duration || 30,
            ease: "linear",
            repeat: Infinity,
        }
      }}
      drag
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      dragElastic={0.9}
    >
    </motion.div>
  )
}
