import { useState } from 'react'
import { Button } from "./";
import { motion } from "framer-motion";

export default function ExploreBlogList({blog}) {
  const [hover, setHover] = useState(false);
  const variant = {
    "initial": {y: "20%", width: "25%", height: 0,},
    "animate": {x: "40%", y: "40%", width: "300%", height: "300%", transition:{duration:1}},
  };

  return (
    <li 
      className="w-[24vw] h-[64vh] pb-4 text-secondary-500 bg-transparent border border-secondary-500 rounded flex flex-col items-start justify-between relative overflow-hidden gap-2 first:translate-y-12 last:translate-y-16 translate-y-0 hover:text-tertiary-500 hover:cursor-pointer"
      onMouseEnter={()=>{console.log("mouse entered"); setHover(true)}}
      onMouseLeave={()=>{console.log("mouse leaved"); setHover(false)}}
    >
      <div className="bg-white h-40 w-[97.5%] rounded mx-1 mt-1"></div>
      <h1 className="font-semibold mx-4">{blog.heading}</h1>
      <p className="text-xs mx-4">{blog.text}</p>
      <Button className="mx-4 -translate-x-2 justify-self-end hover:text-tertiary-500" arrow arrowWhite={hover ? true : false}>learn more</Button>
      <motion.div variants={variant} className="bg-secondary-500 absolute bottom-0 right-0 z-[-1] rounded-full rotate-12" initial="initial" animate={hover ? "animate" : "initial"}></motion.div>
    </li>
  )
}
