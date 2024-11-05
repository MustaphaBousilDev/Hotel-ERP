<<<<<<< HEAD
import React from 'react'
import { FaSun } from 'react-icons/fa'
interface props {
    onClick:()=>void,
    dropDown:boolean
}
const Picture:React.FC<props> = ({onClick,dropDown}) => {
  return (
    <div
            className="relative inline-block text-left"
            onClick={onClick}
            onKeyDown={onClick}
          >
            <div className="flex items-center cursor-pointer" >
              <img
                className="rounded-full h-10 w-10"
                src="../../public/imgs/customer01.jpg"
                alt=""
              />
            </div>
            {dropDown && (
              <div className="origin-top-right absolute  right-[16px]  mt-2 w-[100px] rounded-md shadow-lg bg-blue-900 ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <FaSun/>
                    Profile
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <FaSun/>
                    Settings
                  </a>
                  <a
                    href="#"
                    className="flex items-center px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                  >
                    <FaSun/>
                    Logout
                  </a>
                </div>
              </div>
            )}
          </div>
=======
import React, { useState } from 'react'
//import profilePict from '../../../../public/me.jpeg'
import { CiUser,CiSettings } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import {
  Dropdown,DropdownTrigger,DropdownMenu,DropdownItem
} from '@nextui-org/dropdown'
import CustomButton from '../Buttons/Button';
import { Link } from 'react-router-dom';
interface props {
    onClick?:()=>void,
    dropDown?:boolean,
}
const Picture:React.FC<props> = ({onClick,dropDown}) => {
  return (
    <Dropdown>
      <DropdownTrigger className=' '>
        <img 
          className='w-11 h-11 rounded-full cursor-pointer' 
          src={'https://media.licdn.com/dms/image/D4E35AQGb2pdS-kHm7g/profile-framedphoto-shrink_200_200/0/1698369427585?e=1702731600&v=beta&t=UA8aJBZIi5KXGq2tf7mD_nnqBhV4pzMwh4kuLceI2j4'} alt='' 
        />
      </DropdownTrigger>
      <DropdownMenu 
        className=' shadow-lg w-60'
        aria-label="Dynamic Actions" 
        >
        <DropdownItem 
        style={{alignItems:'flex-start'}}
        className=' flex flex-col  py-2  gap-4 relative z-50 bg-white'>
          <div className='  w-full px-5'>
            <h3 className='text-center my-0 text-textColor font-semibold '>
              Mustapha Bousil
            </h3>
            <span className=' text-sm text-center text-greyNormal'>
              bousilmustapha@gmail.com
            </span>
          </div>
          <div className='mt-3 px-1'>
            <ul className=' flex flex-col relative z-50 '>
              <li className='
                  flex items-center transition gap-2 
                  py-2 px-2 hover:bg-greyHover rounded-md'>
                <span>
                  <CiUser className=' w-5 h-5' />
                </span>
                <span className=' text-base'>
                  Profile
                </span>
              </li>
              <li className='
                  flex items-center transition gap-2 
                  py-2 px-2 hover:bg-greyHover rounded-md'>
                <span>
                  <CiSettings className=' w-5 h-5' />
                </span>
                <span className=' text-base'>
                  Settings & Privacy
                </span>
              </li>
              <li className='
                  flex items-center transition gap-2 
                  py-2 px-2 hover:bg-greyHover rounded-md'>
                <span>
                  <IoIosHelpCircleOutline className=' w-5 h-5' />
                </span>
                <span className=' text-base'>
                  Help Center
                </span>
              </li>
            </ul>
          </div>
          <div className=' mt-6'>
            <CustomButton>
              <CiLogout className=' text-white' />
              <span className=' text-sm text-white'>Sign out</span>
            </CustomButton>
            <ul className=' flex gap-2 text-greyNormal justify-center mt-1 items-center text-xs'>
              <li className=' hover:underline'><Link to=''>Privacy policy</Link></li>
              <li className=' hover:underline'><Link to=''>Terms</Link></li>
              <li className=' hover:underline'><Link to=''>Cookies</Link></li>
            </ul>
          </div>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
>>>>>>> typeorm
  )
}

export default Picture