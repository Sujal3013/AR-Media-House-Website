import { motion } from "framer-motion";
import classNames from "classnames";

export default function Circle({className, primary, secondary}) {
  const classes = classNames("w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full absolute blur hover:cursor-grab active:cursor-grabbing", {
    [className]: className,
  })

  return (
    <motion.div
      className={classes}
      initial={{rotate: 0}}
      animate={{
        rotate: 360,
        transition: {
            duration: 10,
            repeat: Infinity,
        }
      }}
      drag
      dragConstraints={{
        top:0,
        left:0,
        right: 0,
        bottom: 0,
      }}
      dragElastic={0.9}
      style={secondary ? 
        {
          "backgroundImage": "linear-gradient(rgb(244,244,244, 0.3), rgb(244,244,244, 0.05))"
        }
        :
        {
          "backgroundImage": "linear-gradient(rgb(255,147,86, 0.8), rgb(255,147,86, 0.3))"
        }
      }
    >
    </motion.div>
  )
}
