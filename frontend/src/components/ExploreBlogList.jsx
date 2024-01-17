import { useState } from 'react'
import { Button } from "./";
import { motion } from "framer-motion";
import classNames from 'classnames';

export default function ExploreBlogList({blog, focus, className, opacity, imageClassName, }) {
  const [hover, setHover] = useState(false);
  const variant = {
    "normal": {y:0},
    "focus": {y:0},
  }
  const hoverVariant = {
    "initial": {y: "20%", width: "25%", height: 0,},
    "animate": {x: "40%", y: "40%", width: "300%", height: "300%", transition:{duration:1}},
  };
  const classes = classNames("min-w-[11.5rem] max-w-72 h-[22rem] sm:max-h-[450px] sm:h-[64vh] text-secondary-500 flex flex-col items-start justify-evenly relative overflow-hidden gap-2 hover:cursor-pointer", {
    [className]: className,
  })
  const imageClasses = classNames('w-full h-[40vh]', {
    [imageClassName]: imageClassName,
  });

  return (
    <motion.li 
      variants={variant}
      initial="normal"
      animate={focus ? "focus" : "normal"}
      className={classes}
      onMouseEnter={()=>{setHover(true)}}
      onMouseLeave={()=>{setHover(false)}}
    >
      <motion.img initial={{scale: 1}} animate={hover?{scale:1.05}:{}} src={blog.src} alt="blog-image" className={imageClasses} />
      {blog.text && <h1 className="font-medium sm:font-semibold text-base sm:text-lg md:text-xl">{blog.heading}</h1>}
      {blog.text && <p className="text-xs">{blog.text}</p>}
      {
        <div className='flex flex-col h-12 overflow-hidden'>
        <motion.div initial={{y:0, opacity, }} animate={hover ? {y:"-100%", opacity,}: {}}><Button className="!pl-px" arrow >learn more</Button></motion.div>
        <motion.div initial={{y:0, opacity, }} animate={hover ? {y:"-100%", opacity,}: {}}><Button className="!pl-px" arrow >learn more</Button></motion.div>
      </div>
      }

      {/* 
      <motion.div variants={hoverVariant} className="bg-secondary-500 bg-opacity-75 absolute bottom-0 right-0 z-[-1] rounded-full rotate-12" initial="initial" animate={hover ? "animate" : "initial"}></motion.div>
      <img src={"./assets/blog1.jpg"} alt="blog-image" className='absolute z-[-2] h-full w-full object-cover object-center'/>
      {!hover && <div className='absolute top-0 left-0 w-full h-full bg-white opacity-50 z-[-1]'></div>} 
      */}
    </motion.li>
  )
}
