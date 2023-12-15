import React, { useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import {Dropdown,DropdownTrigger,DropdownMenu,DropdownItem} from '@nextui-org/dropdown'
import SwitchStatus from './SwitchStatus';
import ListNotification from '../../../constants/notification';
interface props{
    count:number
}
const Notifications:React.FC<props> = ({count}) => {
    const [type,setType]=useState<string>('WARNING')
    let d:any=[]
    const handleClick=(type:string) =>{
        console.log(type)
        setType(type)
    }
  return (
    <Dropdown>
        <DropdownTrigger>
            <div className=" relative  w-10 h-10 bg-light dark:bg-gray-700 
            dark:text-white  items-center justify-center rounded-full cursor-pointer hidden md:flex">
                <span
                    className="
                    absolute right-2 z-20  top-1 w-3 h-3 bg-danger rounded-full  text-xs
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
            className='  overflow-hidden'
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
                        {
                            ListNotification?.map((notif)=>{
                                console.log(notif)
                                d=notif.child
                                console.log('from Notifications',d)
                                return (
                                    <li
                                        onClick={()=>handleClick(notif.name)}
                                        className={`
                                        flex-1   cursor-pointer p-1 gap-1 flex items-center
                                        transition  duration-200 origin-top-right opacity-75 ${notif.color} p-2
                                        ${type === notif.name &&  `border-b-2 ${notif.bg}  border-${notif.border} 
                                        opacity-100 ${notif.colorFocus}  `}
                                        `}>
                                        <span className=' '>
                                            <notif.icon onClick={()=>handleClick(notif.name)}/>
                                        </span>
                                        <span className=' text-xs '> {notif.name}</span>
                                    </li>
                                    )
                            })
                        }
                    </ul>
                </header>
                <SwitchStatus type={type}/>
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