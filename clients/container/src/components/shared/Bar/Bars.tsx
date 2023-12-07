import React from 'react'
import { HiBars3BottomLeft, HiOutlineBars3 } from 'react-icons/hi2'
interface props{
    menuActive:boolean
    onClick:()=>void
}
const Bars:React.FC<props> = ({menuActive,onClick}) => {
  return (
    <div
          className="toggle"
          onClick={onClick}
          onKeyDown={onClick}
        >
          {
            menuActive 
                ? <HiBars3BottomLeft className='text-textColor text-4xl' />
                : <HiOutlineBars3 className='text-textColor text-4xl' />
          }
    </div>
  )
}

export default Bars