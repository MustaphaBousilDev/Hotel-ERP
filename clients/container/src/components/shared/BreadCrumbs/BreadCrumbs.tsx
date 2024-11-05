import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
const BreadCrumbs = () => {
  return (
    <ul className=' flex mx-2 items-center gap-3 transition-all text-gray-700'>
      <li><IoHome className=' w-6 text-lg'/></li>
      <li><IoIosArrowForward className=' text-sm'/></li>
      <Link to='' className=' text-md  hover:underline'>Dashboard</Link>
      <li><IoIosArrowForward className=' text-sm'/></li>
      <Link to='' className=' text-md hover:underline'>Tasks</Link>
      <li><IoIosArrowForward className=' text-sm'/></li>
      <Link 
        to='' 
        className=' text-md hover:underline text-blue-600 bg-blue-100 p-1 px-4 rounded-md text-sm'>
          Add
      </Link>
    </ul>
  )
}

export default BreadCrumbs