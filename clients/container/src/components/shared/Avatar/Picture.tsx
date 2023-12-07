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
  )
}

export default Picture