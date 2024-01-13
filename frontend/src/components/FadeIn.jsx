import classNames from 'classnames'
import { motion } from "framer-motion";

export default function FadeIn({children, when, className, duration, ...other}) {
  if(when === undefined) when = true;
  if(!duration) duration = 2;
  
  const classes = classNames("", {
    [className]: className
  })
  return (
    <motion.div
      className={classes}
      initial={{opacity: 0}}
      animate={when ? {opacity: 1, transition:{duration, ease:"easeOut"}} : {opacity: 0, transition:{duration:0.8}}}
      {...other}
    >
        {children}
    </motion.div>
  )
}
