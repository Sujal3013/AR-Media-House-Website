import {useState} from 'react'
import { Link } from 'react-router-dom'
import { motion , AnimatePresence } from "framer-motion"

export default function Hamburger({siteMapList}){
    const [isOpen, setIsOpen] = useState(false)

    const togleIsOpen = ()=>setIsOpen(prev=>!prev)
    
    return (
    <div 
        className="lg:hidden z-1"
    >
        <button
            className="text-white p-2 focus:outline-none"
            onClick={togleIsOpen}
        >
            <div className="block relative cursor-pointer w-[45px] h-[30px]">
                <input className="appearance-none hidden" type="checkbox" />

                <span className={"absolute w-[36px] h-[5px] bg-tertiary-500 rounded-2xl inline-block duration-300 ease-in  left-0 top-0" + (isOpen?" w-[48px] left-[5px] rotate-45 origin-top-left":"")} />
                <span className={"absolute w-[36px] h-[5px] bg-tertiary-500 rounded-2xl inline-block duration-300 ease-in  left-0 top-[12px]" + (isOpen?" opacity-0 translate-x-[-20px]":"")} />
                <span className={"absolute w-[36px] h-[5px] bg-tertiary-500 rounded-2xl inline-block duration-300 ease-in  left-0 bottom-0" + (isOpen?" w-[48px] bottom-[-1px] -rotate-45 origin-top-left":"")} />
            </div>
        </button>
        {
        isOpen && 
        <AnimatePresence>
        <motion.div 
            className="absolute top-[58px] right-0 bg-tertiary-500"
            initial={{y: -200, opacity: .50}}
            animate={{y: 0, opacity: 1, transition:{duration: 0.4}}}
            exit={{y: -200, opacity: .50, transition: {duration: 3}}}
        >
            <div className="w-screen h-screen z-0 bg-secondary-500 text-tertiary-500">
                {siteMapList.map((item,index)=>
                <Link
                    onClick={togleIsOpen}
                    className="!block w-full py-4 px-screen-padding text-xl sm:text-2xl hover:text-primary-500"
                    to={item.to}
                    key={index}
                >
                    <img className="max-w-8 text-xs inline ml-2 mr-4" src={item.imgSrc} alt={item.title} />
                    {item.title}
                </Link>
                ).concat(
                [<Link
                    onClick={togleIsOpen}
                    className="mt-4 !block border-tertiary-500 border-t-2 w-screen py-4 px-[7vw] text-xl sm:text-2xl hover:text-primary-500"
                    to="/contact"
                    key={-1}
                >
                    Lets Connect
                    <img className="inline mx-4" src="/assets/RightButtonArrowWhite.svg" alt="arrow"></img>
                </Link>,
                <Link
                    onClick={togleIsOpen}
                className="!block border-tertiary-500 border-t-2 border-b-2 w-screen py-4 px-[7vw] text-xl sm:text-2xl hover:text-primary-500"
                to="/contact"
                key={-2}
                >
                    Contact
                    <img className="inline mx-4" src="/assets/RightButtonArrowWhite.svg" alt="arrow"></img>
                </Link>
            ])}
            </div>
        </motion.div>
        </AnimatePresence>}
    </div>
    )
}