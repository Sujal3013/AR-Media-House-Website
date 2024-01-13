import { motion } from "framer-motion";
import classNames from "classnames";

export default function AnimateTextBackground({heading, text, className, focus}) {
  const classes = classNames("w-full p-2 my-2  flex flex-col rounded-lg border-2 broder-tertiary-500 relative overflow-hidden", {
    [className]: className,
  })
  return (
    <div className={classes}>
        <motion.div className="absolute top-0 left-0 h-full bg-tertiary-600 z-[-1]" initial={{width: 0}} animate={focus ? {width: "100%", transition: {duration:5, ease: "linear"}} : {}}></motion.div>
        {heading && <h1 className="text-xl font-semibold">{heading}</h1>}
        {text && <p className="text-sm">{text}</p>}
    </div>
  )
}
