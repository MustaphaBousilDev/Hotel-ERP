import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
interface props{
    count:number
}
const Notifications:React.FC<props> = ({count}) => {
  return (
    <div className=" relative w-9 h-9 cursor-pointer">
        <span
            className="
            absolute right-3 z-20  top-0 w-3 h-3 bg-danger rounded-full text-xs
            text-white flex justify-center items-center"
        >
            {count}
        </span>
        <span>
            <IoIosNotificationsOutline className=" w-7 h-7 text-greyNormal" />
        </span>
    </div>
  )
}

export default Notifications