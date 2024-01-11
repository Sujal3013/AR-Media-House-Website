import {useState} from 'react'

export default function Hamburger({list}){
    const [isOpen, setIsOpen] = useState(false)
    return <div className="lg:hidden z-1">
        <button
            className="text-white p-2 focus:outline-none"
            onClick={()=>setIsOpen(prev => !prev)}
        >
            <img className="w-[28px]" src="./assets/hamburger_icon.svg" alt="hamburger icon" />
        </button>
        {isOpen && <div className="absolute top-20 right-0 bg-tertiary-500">
            <div className="w-screen h-screen z-0">
                {list}
            </div>
        </div>}
    </div>
}