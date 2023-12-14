import React from 'react'
import { HiMiniUsers } from "react-icons/hi2";
import { MdMeetingRoom } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { GrConfigure } from "react-icons/gr";
import Guasts from './Guasts';
const CustomTabs = () => {
  return (
    <div className='w-full h-full'>
      <header>
        <ul className=' flex gap-1 text-sm'>
          <li className=' flex-1  bg-yellow-50 cursor-pointer border-b-2 border-dark  p-1 gap-1 flex items-center'>
            <span><HiMiniUsers/></span>
            <span className=' text-xs'> Guasts</span>
          </li>
          <li className=' flex-1 bg-yellow-50 cursor-pointer p-1 gap-1 flex items-center'>
            <span><MdMeetingRoom/></span>
            <span className=' text-xs'> Rooms</span>
          </li>
          <li className=' flex-1 bg-yellow-50 cursor-pointer p-1 gap-1 flex items-center'>
            <span><IoRestaurant/></span>
            <span className=' text-xs'> Foods</span>
          </li>
          <li className=' flex-1 bg-yellow-50 cursor-pointer p-1 gap-1 flex items-center'>
            <span><GrConfigure/></span>
            <span className=' text-xs'> Config</span>
          </li>
        </ul>
      </header>
      <Guasts/>
    </div>
  )
}

export default CustomTabs