import React from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs'
interface props{
  onClick:()=>void
  dark:any
}
const Theme:React.FC<props> = ({dark,onClick}) => {
  return (
    <span className={
      `
      w-8 h-8 flex items-center p-2 justify-center rounded-full 
      md:flex cursor-pointer bg-light dark:bg-gray-700
      `
    } 
    onClick={onClick}>
        {
            dark === 'dark' 
            ? <BsMoonStars className="  w-5 h-5 text-dark mt-1" />
            : <BsSun className="  w-6 h-6 text-light" />
        }
    </span>
  )
}

export default Theme