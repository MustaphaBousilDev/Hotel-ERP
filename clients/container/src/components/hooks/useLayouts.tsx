import React , {useContext, useState} from 'react'

interface LayoutContext{
    openSide:boolean,
    handleToggleOpenSide:()=>void
}

export interface ILayoutProviderProps{
    children:React.ReactNode
}

export const LayoutContext=React.createContext<LayoutContext>({
    openSide:false,
    handleToggleOpenSide:()=>{}
})


export const LayoutProvider:React.FC<ILayoutProviderProps>=({children})=>{
    const [openSide,setOpenSide]=useState(false)
    const handleToggleOpenSide=()=>{
        setOpenSide(!openSide)
    }

    return (
        <LayoutContext.Provider value={{openSide,handleToggleOpenSide}}>
            {children}
        </LayoutContext.Provider>
    )
}