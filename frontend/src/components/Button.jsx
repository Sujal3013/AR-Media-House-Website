import React from 'react'
import { Link , useLocation  } from 'react-router-dom'
import { motion } from 'framer-motion';
import classNames from 'classnames';

export default function ({primary, secondary, arrow, arrowWhite, to, children, className, ...other}) {
  if(!to || to==="") to = useLocation().pathname;
  
  const classes = classNames("w-fit cursor-pointer py-2 md:py-2.5 flex justify-center items-center",{
    [className]: className,
    "px-3 md:px-4": arrow,
    "px-4 md:px-5": !arrow,
  });

  return (
    <motion.button
      className={classes} 
      whileHover={{scale:1.05}}
      whileTap={{scale: 0.95}}
      transition={{ duration: 0.2, ease: 'linear' }}
      {...other}
    >
    <Link
      className='text-sm sm:text-base w-full flex justify-center items-center gap-2 text-center leading-4'
      to={to}
    >
        {children}
        {
          arrow ? 
          (!arrowWhite ? <img src="./assets/RightButtonArrowBlack.svg" className='w-3 h-3' /> : <img src="./assets/RightButtonArrowWhite.svg" className='w-3 h-3' />) 
          : ""
        }
    </Link>
    </motion.button>
  )
}
