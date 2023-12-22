import React, { useState } from 'react'
import { HiMiniUsers } from "react-icons/hi2";
import { MdMeetingRoom } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { GrConfigure } from "react-icons/gr";
import Guasts from './Guasts';
import SwitchNot from './SwitchNot';
interface props{
  child?:any
}
const CustomTabs:React.FC<props> = ({child}) => {
  const [type,setType]=useState<string>('GUAST')
  const handleClick=(type:string) =>{
    setType(type)
  }
  return (
    <div className='w-full h-full'>
      <header>
        <ul className=' flex gap-1 text-sm  relative z-50 '>
          {
            child?.map((c:any)=>(
              <li
                onClick={()=>handleClick(c.id)}
                className={`
                flex-1   cursor-pointer p-1 gap-1 flex items-center
                transition  duration-700 origin-top-right opacity-75 text-gray-600
                 justify-center
                ${type === c.id && `border-b-2 border-dark opacity-100 ${c.colorFocus}`}
                `}>
                <span><c.icon onClick={()=>handleClick(c.id)}/></span>
                <span className=' text-xs'> {c.name}</span>
              </li>
            ))
          }
        </ul>
      </header>
      <SwitchNot type={type} />
    </div>
  )
}

export default CustomTabs