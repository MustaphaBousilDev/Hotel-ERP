import React from 'react'
import { BsMoonStars, BsSun } from 'react-icons/bs'
interface props{
  onClick:()=>void
  dark:boolean
}
const Theme:React.FC<props> = ({dark,onClick}) => {
  return (
    <span className="w-8 h-8 hidden md:flex cursor-pointer" onClick={onClick}>
        {
            dark 
            ? <BsMoonStars className="  w-5 h-5 text-greyNormal mt-1" />
            : <BsSun className="  w-6 h-6 text-greyNormal" />
        }
    </span>
  )
}

export default Theme