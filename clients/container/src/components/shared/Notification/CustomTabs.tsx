import React, { useState } from 'react'
import { HiMiniUsers } from "react-icons/hi2";
import { MdMeetingRoom } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { GrConfigure } from "react-icons/gr";
import Guasts from './Guasts';
import SwitchNot from './SwitchNot';
const CustomTabs = () => {
  const [type,setType]=useState<string>('GUAST')
  const handleClick=(type:string) =>{
    console.log(type)
    setType(type)
  }
  return (
    <div className='w-full h-full'>
      <header>
        <ul className=' flex gap-1 text-sm relative z-50'>
          <li
            onClick={()=>handleClick('GUAST')}
            className={`
            flex-1   cursor-pointer p-1 gap-1 flex items-center
            transition  duration-700 origin-top-right opacity-75 text-gray-600
            ${type === 'GUAST' && 'border-b-2 border-dark opacity-100 text-dark'}
            `}>
            <span><HiMiniUsers onClick={()=>handleClick('GUAST')}/></span>
            <span className=' text-xs'> Guasts</span>
          </li>
          <li
            onClick={()=>handleClick('ROOMS')}
            className={`
            flex-1   cursor-pointer   p-1 gap-1 flex items-center
            transition  duration-700 origin-top-right opacity-75 text-gray-600
            ${type === 'ROOMS' && 'border-b-2 border-dark opacity-100 text-dark'}
            `}>
            <span><MdMeetingRoom onClick={()=>handleClick('ROOMS')}/></span>
            <span className=' text-xs'> Rooms</span>
          </li>
          <li
            onClick={()=>handleClick('FOOD')}
            className={`
            flex-1   cursor-pointer   p-1 gap-1 flex items-center
            transition  duration-700 origin-top-right opacity-75 text-gray-600
            ${type === 'FOOD' && 'border-b-2 border-dark opacity-100 text-dark'}
            `}>
            <span><IoRestaurant onClick={()=>handleClick('FOOD')}/></span>
            <span className=' text-xs'> Foods</span>
          </li>
          <li
            onClick={()=>handleClick('CONFIG')}
            className={`
            flex-1   cursor-pointer   p-1 gap-1 flex items-center
            transition  duration-700 origin-top-right opacity-75 text-gray-600
            ${type === 'CONFIG' && 'border-b-2 border-dark opacity-100 text-dark'}
            `}>
            <span><GrConfigure  onClick={()=>handleClick('CONFIG')}/></span>
            <span className=' text-xs'> Config</span>
          </li>
        </ul>
      </header>
      <SwitchNot type={type} />
    </div>
  )
}

export default CustomTabs