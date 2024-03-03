import { useContext, useState,createContext, useEffect } from "react";

const WinSizeContext = createContext()
const BR_1 = 480
const BR_2 = 768
const BR_3 = 1024
const BR_4 = 1280

export const WinSizeProvider = ({children})=>{
    const [winSize, setWinSize] = useState(window.innerWidth)
    useEffect(()=>{
        const handler = ()=>{
            setWinSize(window.innerWidth)
        }
        window.addEventListener('resize',handler)

        return ()=>window.removeEventListener('resize', handler)  
    },[])
    const val = {
        winSize,
        BR_1,
        BR_2,
        BR_3, 
        BR_4, 
    }
    return (
    <WinSizeContext.Provider 
        value={val}>
            {children}
    </WinSizeContext.Provider>)
}

export const useWinSizeContext = ()=>useContext(WinSizeContext);