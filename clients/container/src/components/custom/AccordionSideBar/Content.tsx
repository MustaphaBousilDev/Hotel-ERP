import React from 'react'
import { FaSun } from "react-icons/fa"
import { AccorProps } from './interface'
const Content:React.FC<AccorProps>=({activeMenu,dataLink})=>{
    return (
        <div className={` ml-1 md:ml-1 flex items-center   gap-2
         hover:text-white dark:text-white hover:bg-textColor dark:bg-gray-600  transition-all rounded-md  py-1
        ${activeMenu ? 'px-3' : 'px-3'}
        `}>
            <dataLink.icon   className={`   ${activeMenu ? ' w-[20px] h-[20px]' : 'w-[20px] h-[20px]'}`}/>
            <span className={`${activeMenu ? 'hidden' : ''}`}>
                {dataLink.name}
            </span>
        </div>
    )
}

export default Content