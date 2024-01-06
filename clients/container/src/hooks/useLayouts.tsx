import React , {useContext, useState} from 'react'

interface LayoutContext{
    openSide:boolean,
    switchRTL:boolean,
    handleToggleOpenSide:()=>void,
    handleSwitchRTL:()=>void
}

export interface ILayoutProviderProps{
    children:React.ReactNode
}

export const LayoutContext=React.createContext<LayoutContext>({
    openSide:false,
    switchRTL:false,
    handleToggleOpenSide:()=>{},
    handleSwitchRTL:()=>{}
})


export const LayoutProvider:React.FC<ILayoutProviderProps>=({children})=>{
    const [openSide,setOpenSide]=useState(false)
    const [switchRTL,setSwitchRTL]=useState(false)
    const handleToggleOpenSide=()=>{
        setOpenSide(!openSide)
        console.log('fuck')
    }
    const handleSwitchRTL=()=>{
        setSwitchRTL(!switchRTL)
    }

    return (
        <LayoutContext.Provider value={{
          openSide,
          handleToggleOpenSide,
          switchRTL,
          handleSwitchRTL
        }}>
            {children}
        </LayoutContext.Provider>
    )
}