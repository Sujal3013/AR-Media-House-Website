import { useState } from 'react'
import { Button } from "./";
import { motion } from "framer-motion";
import classNames from 'classnames';

export default function ExploreBlogList({blog, focus, className}) {
  const [hover, setHover] = useState(false);
  const variant = {
    "normal": {y:0},
    "focus": {y:-40},
  }
  const hoverVariant = {
    "initial": {y: "20%", width: "25%", height: 0,},
    "animate": {x: "40%", y: "40%", width: "300%", height: "300%", transition:{duration:1}},
  };
  const classes = classNames("w-[24vw] h-[64vh] pb-4 text-secondary-500 bg-transparent border border-secondary-500 rounded flex flex-col items-start justify-between relative overflow-hidden gap-2 hover:text-tertiary-500 hover:cursor-pointer", {
    [className]: className,
  })
  return (
    <motion.li 
      variants={variant}
      initial="normal"
      animate={focus ? "focus" : "normal"}
      className={classes}
      onMouseEnter={()=>{setHover(true)}}
      onMouseLeave={()=>{setHover(false)}}
    >
      <div className="bg-white h-40 w-[97.5%] border-2 rounded mx-1 mt-1"></div>
      <h1 className="font-semibold mx-4">{blog.heading}</h1>
      <p className="text-xs mx-4">{blog.text}</p>
      <Button className="mx-4 justify-self-end hover:text-tertiary-500 !pl-0 hover:scale-x-150" arrow arrowWhite={hover ? true : false}>learn more</Button>
      <motion.div variants={hoverVariant} className="bg-secondary-500 absolute bottom-0 right-0 z-[-1] rounded-full rotate-12" initial="initial" animate={hover ? "animate" : "initial"}></motion.div>
      <div className='absolute top-0 left-0 w-full h-full bg-white z-[-2]'></div>
    </motion.li>
  )
}
