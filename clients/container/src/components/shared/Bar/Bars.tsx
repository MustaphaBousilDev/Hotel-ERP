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
          data-tested="bars-toggle"
        >
          {
            menuActive 
                ? <HiBars3BottomLeft className='text-textColor text-4xl dark:text-gray-400' />
                : <HiOutlineBars3 className='text-textColor text-4xl dark:text-gray-400' />
          }
    </div>
  )
}

export default Bars