import {  useState } from "react";
import classNames from "classnames";

export default function DropDown({title, titleClass, children, className}){
    const [isOpen, setIsOpen] = useState(false)
    const componentClass = classNames(className,
        "w-full border-t-2 border-solid border-tertiary-500 border-b-2")

    return <div className={componentClass}>
        <div className={"flex justify-between "+titleClass}
        onClick={()=>setIsOpen(prev=>!prev)}>
            <h1 >{title}</h1>
            <div>^</div>
        </div>
        {isOpen && children}
    </div>
}