import { useState, useEffect} from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

export default function RotatingCards({
  blobSrc,
  iconSrc,
  title,
  text,
  titleClassNames,
  textClassNames,
  index,
}) {
    if(index === undefined) return <div>Please Provide index</div>

    const [currState, setCurrState] = useState(index);
    // useEffect(()=>{
    //   const id = setTimeout(()=>{
    //     setCurrState((currState + 1) % states.length);
    //   }, 2000);
    
    //   return ()=>{
    //     clearTimeout(id);
    //   }
    // }, [currState]);  
  const wraperClass = classNames(
    "flex flex-col items-center",
    "text-center",
    "min-h-60 min-w-72",
    `bg-no-repeat bg-center bg-55% bg-top`,
    "absolute",
    {
        "top-0 left-0": currState===0,
        "top-0 right-0": currState===1,
        "bottom-0 right-0 ": currState===2,
        "bottom-0 left-0": currState===3,
    }
  );
  
  const titleClass = classNames(
    "text-2xl text-primary-500 font-black mb-3",
    titleClassNames
  );
  const textClass = classNames("max-w-96 mt-6 text-sm", textClassNames);
  
  const states = [
    {
      left: 0,
      bottom:"50%",
    }, {
      left: "50%",
      top: 0,
    }, {
      right: 0,
      bottom: "50%",
    }, {
      right: "50%",
      bottom: 0,
    }
  ];

  return (
      <motion.div 
        initial={{rotate: 0}}
        animate={{rotate: -90}}
        className={wraperClass} 
        style={{ backgroundImage: `url(${blobSrc})` }}
      >
        <img className="size-24 my-4" src={iconSrc} alt="icon" />
        <h1 className={titleClass}>{title}</h1>
        <p className={textClass}>{text}</p>
      </motion.div>
  );
}