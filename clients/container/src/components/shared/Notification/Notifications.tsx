import React, { useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import {Dropdown,DropdownTrigger,DropdownMenu,DropdownItem} from '@nextui-org/dropdown'
import SwitchStatus from './SwitchStatus';
import { IoWarningOutline } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import { IoIosInformationCircleOutline } from "react-icons/io";

interface props{
    count:number
}
const Notifications:React.FC<props> = ({count}) => {
    const [type,setType]=useState<string>('WARNING')
    const handleClick=(type:string) =>{
        console.log(type)
        setType(type)
    }
  return (
    <Dropdown>
        <DropdownTrigger>
            <div className=" relative w-9 h-9 bg-light dark:bg-gray-700 
            dark:text-white  items-center justify-center rounded-full cursor-pointer hidden md:flex">
                <span
                    className="
                    absolute right-3 z-20  top-0 w-3 h-3 bg-danger rounded-full text-xs
                    text-white flex justify-center items-center"
                >
                    {count}
                </span>
                <span>
                    <IoIosNotificationsOutline className=" w-7 h-7 text-greyNormal dark:text-light" />
                </span>
            </div>
        </DropdownTrigger>
        <DropdownMenu 
            className=' w-52'
            aria-label="Dynamic Actions" 
            closeOnSelect={false}
        >
            <DropdownItem 
            style={{alignItems:''}}
            className=' flex p-0 flex-col  '>
            <div className='  w-[70%] flex flex-col  bg-white p-2 border rounded-md'>
                <div className='w-full h-full'>
                <header>
                    <ul className=' flex gap-1 text-sm relative z-50'>
                        <li
                            onClick={()=>handleClick('WARNING')}
                            className={`
                            flex-1   cursor-pointer p-1 gap-1 flex items-center
                            transition  duration-200 origin-top-right opacity-75 text-yellow-300 p-2
                             
                            

                            ${type === 'WARNING' && 'border-b-2 bg-yellow-50 border-yellow-400 opacity-100 text-yellow-400'}
                            `}>
                            <span className=' '>
                                <IoWarningOutline onClick={()=>handleClick('WARNING')}/>
                            </span>
                            <span className=' text-xs '> WARNING</span>
                        </li>
                        <li
                            onClick={()=>handleClick('INFO')}
                            className={`
                            flex-1   cursor-pointer   p-1 gap-1 flex items-center
                               flex items-center justify-center
                            transition  duration-200 origin-top-right opacity-75 text-blue-500
                            ${type === 'INFO' && 'border-b-2 border-blue-600 opacity-100 bg-blue-50 text-blue-600'}
                            `}>
                            <span>
                                <IoIosInformationCircleOutline 
                                className=' '
                                onClick={()=>handleClick('INFO')}/>
                            </span>
                            <span className=' text-xs '> INFO</span>
                        </li>
                        <li
                            onClick={()=>handleClick('DANGER')}
                            className={`
                            flex-1   cursor-pointer   p-1 gap-1 flex items-center
                            transition  duration-200 origin-top-right opacity-75  text-red-400
                            ${type === 'DANGER' && 'border-b-2 border-red-600 bg-red-100 opacity-100 text-red-600'}
                            `}>
                            <span>
                                <CgDanger  
                                className='  '
                                onClick={()=>handleClick('DANGER')}/>
                            </span>
                            <span className=' text-xs '> DANGER</span>
                        </li>
                    </ul>
                </header>
                <SwitchStatus type={type} />
                </div>
                <p className='text-blue-500 hover:underline flex items-center p-1 justify-center text-sm'>
                    see more notifications
                </p>
            </div>
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  )
}

export default Notifications