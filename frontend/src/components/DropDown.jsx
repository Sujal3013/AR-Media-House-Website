import {  useState } from "react";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

export default function DropDown({title, titleClass, children, className}){
    const [isOpen, setIsOpen] = useState(false)
    const componentClass = classNames(className,
        "w-full border-t-2 border-solid border-tertiary-500 border-b-2")
    
    const arrowClasses = classNames("hover:cursor-pointer rotate-180", {
        // "rotate-0": isOpen,
    })
    return <div className={componentClass}>
        <div className={"flex justify-between "+titleClass}
        onClick={()=>setIsOpen(prev=>!prev)}>
            <h1 >{title}</h1>

            <motion.img 
                src="./assets/upArrow.svg" 
                alt="arrow" 
                className={arrowClasses}
                initial={{"rotate": 180}}
                animate={isOpen ? {"rotate":0, transition:{duration: 0.8}} : {"rotate":180, transition:{duration: 0.8}}}
            />
        </div>
        <AnimatePresence>
            {
                isOpen && (
                <motion.div
                    initial={{y: -50, opacity: 0}}
                    animate={{y: -10, opacity: 1, transition:{duration: 0.8}}}
                    exit={{ y: -50, opacity: 0, transition: { duration: 0.8 } }} // Exit animation
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    </div>
}