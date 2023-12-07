import React,{ useEffect, useState } from 'react'
import '../styles/Dashboard.css'
import { IoIosNotifications } from "react-icons/io";
import { FaSun } from "react-icons/fa";
import { Outlet,Link } from "react-router-dom";
import Sidebar from '../components/shared/Sidebar';
interface Props {
    children?: React.ReactNode
}
const DashboardLayout: React.FC<Props> = (props:Props) => {
    
    
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const [notification, setNotification] = useState<number>(0);
    
    
      const toggleMenu = () => {
        setMenuActive(!menuActive);
      };
    
      const toggleDropdown = () => {
        setDropdownOpen((prevState) => !dropdownOpen);
      };
  return (
    <>
    <Sidebar menuActive={menuActive} />
    <div className={`main ${menuActive ? "active" : ""}`}>
      kdfkldf
      {/* Main content here */}
      <div className="topbar shadow-sm">
        <div
          className="toggle"
          onClick={toggleMenu}
          onKeyDown={toggleMenu}
        >
          <FaSun/>
        </div>

        <div className="search">
          <label>
            <input type="text" placeholder="Search here" />
            <FaSun/>
          </label>
        </div>

        <div className=" flex  gap-3 items-center pr-4">
          <div className=" relative w-9 h-9">
            <span
              className="
                                  absolute right-1 z-20 top-0 w-[16px] h-[16px] bg-red-500 rounded-full text-[10px] 
                                  font-semibold text-white flex justify-center items-center"
            >
              {notification}
            </span>
            <span>
              <IoIosNotifications className=" w-9 h-9 text-gray-300" />
            </span>
          </div>
          <span className="w-8 h-8">
            <FaSun className="  w-7 h-7 text-gray-300" />
          </span>
          <div
            className="relative inline-block text-left"
            onClick={toggleDropdown}
            onKeyDown={toggleDropdown}
          >
            <div className="flex items-center cursor-pointer" >
              <img
                className="rounded-full h-10 w-10"
                src="../../public/imgs/customer01.jpg"
                alt=""
              />
            </div>
            {dropdownOpen && (
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
        </div>
      </div>
      <Outlet />
    </div>
    </>
  )
}

export default DashboardLayout