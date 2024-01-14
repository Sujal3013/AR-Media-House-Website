import { useContext, useState,createContext, useEffect } from "react";

const WinSizeContext = createContext()

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
        winSize
    }
    return (
    <WinSizeContext.Provider 
        value={val}>
            {children}
    </WinSizeContext.Provider>)
}

export const useWinSizeContext = ()=>useContext(WinSizeContext);