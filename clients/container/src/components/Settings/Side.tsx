import React,{useContext} from 'react'
import { LayoutContext } from '../hooks/useLayouts';
import { IoColorPaletteOutline } from "react-icons/io5";
import LightMode from '../../assets/lightMod.png'
import DarkMode from '../../assets/darkMod.png';
import SideDark from '../../assets/navdark.png'
import NavDark from '../../assets/nav.png'
import TopBar from '../../assets/topBar.png'
import SwitchInput from '../shared/Switch/Switch';
const Side = () => {
  const {
    openSide,
    switchRTL,
    handleSwitchRTL
  } = useContext(LayoutContext)
  return (
    <div 
    className={`
    fixed   min-h-screen   top-0 bg-white dark:bg-darkTopBar dark:text-gray-500  shadow-lg transition-all duration-300
     right-0 p-4 z-40 w-80 overflow-hidden
    ${openSide ?  '  right-0 flex' : '  -right-80  p-0 opacity-0'}
    `}
    >
        <div className=' flex flex-col gap-3  relative w-full'>
            <div className='flex w-full justify-center  font-semibold text-xl 
            items-center gap-2 text-textColor'>
                <span>
                    <IoColorPaletteOutline
                      className=' w-6 h-6 dark:text-gray-400'
                      />
                </span>
                <span className=' dark:text-gray-400'>Theme Customizer</span>
            </div>
            <p className=' text-xs dark:text-gray-400'>
              Explore different styles according to your preferences
            </p>
            <div className='bg-gray-100 dark:bg-gray-500 rounded-lg p-4'>
              <h3 className=' text-md font-semibold  py-0 mb-2 dark:text-gray-200'>Color Scheme</h3>
              <div className='   flex gap-1'>
                <div className=' border-2 flex flex-col gap-1 cursor-pointer rounded-md border-blue-400 overflow-hidden'>
                  <img className='w-full h-full' src={LightMode} alt='' />
                </div>
                <div className='border-2 flex flex-col gap-1 cursor-pointer rounded-md  overflow-hidden'>
                  <img className='w-full h-full' src={DarkMode} alt='' />
                </div>
              </div>
            </div>
            <div className='bg-gray-100 dark:bg-gray-500 rounded-lg p-4 font-semibold'>
              <div className=' flex items-center justify-between'>
                <h3 className=' text-md  py-0 mb-2 dark:text-gray-200'>RTL</h3>
                <SwitchInput 
                  id="switch-01" 
                  color="#333" 
                  onChange={handleSwitchRTL}
                  value={switchRTL}  
                />
                </div>
                <p className=' font-normal text-sm text-gray-500 dark:text-gray-200'>Change Text Direction</p>
            </div>
            <div className='bg-gray-100 dark:bg-gray-500 rounded-lg p-4 font-semibold'>
            <p className=' font-normal text-sm text-gray-500 dark:text-gray-200'>Change Color Primary</p>
            <ul className='flex gap-1 mt-3 h-9 items-center'>
              <li className='  w-9 h-9 cursor-pointer transition rounded-full border border-gray-400 bg-red-500'>
                
              </li>
              <li className=' w-8 h-8 cursor-pointer  transition rounded-full bg-blue-500  opacity-70 hover:w-9 hover:h-9 hover:opacity-100'>
                
              </li>
              <li className=' w-8 h-8 cursor-pointer hover:w-9 hover:h-9 transition rounded-full bg-yellow-300 opacity-70 hover:opacity-100'>
                
              </li>
              <li className=' w-8 h-8 cursor-pointer hover:w-9 hover:h-9 transition rounded-full bg-black opacity-70 hover:opacity-100'>
                
              </li>
              <li className=' w-8 h-8 cursor-pointer hover:w-9 hover:h-9 transition rounded-full bg-gray-300 opacity-70 hover:opacity-100'>
                
              </li>
              <li className=' w-8 h-8 cursor-pointer hover:w-9 hover:h-9 transition rounded-full bg-green-500 opacity-70 hover:opacity-100'>
                
              </li>
              <li className=' w-8 h-8 cursor-pointer hover:w-9 hover:h-9 transition rounded-full bg-purple-600 opacity-70 hover:opacity-100'>
                
              </li>
              
            </ul>
                
            </div>
            {/*SideBar Dark*/}
            <div className='bg-gray-100 dark:bg-gray-500 rounded-lg p-4'>
              <h3 className=' text-md font-semibold  py-0 mb-2 dark:text-gray-200'>Color SideBar Theme</h3>
              <div className='   flex gap-1'>
                <div className=' border-2 flex flex-col gap-1 cursor-pointer rounded-md border-blue-400 overflow-hidden'>
                  <img className='w-full h-full' src={LightMode} alt='' />
                  
                </div>
                <div className='border-2 flex flex-col gap-1 cursor-pointer rounded-md  overflow-hidden'>
                  <img className='w-full h-full' src={SideDark} alt='' />
                </div>
              </div>
            </div>
            {/*Navbar Dark */}
            <div className='bg-gray-100 dark:bg-gray-500 rounded-lg p-4'>
              <h3 className=' text-md font-semibold  py-0 mb-2 dark:text-gray-200'>Color Navbar Theme</h3>
              <div className='   flex gap-1'>
                <div className=' border-2 flex flex-col gap-1 cursor-pointer rounded-md border-blue-400 overflow-hidden'>
                  <img className='w-full h-full' src={LightMode} alt='' />
                  
                </div>
                <div className='border-2 flex flex-col gap-1 cursor-pointer rounded-md  overflow-hidden'>
                  <img className='w-full h-full' src={NavDark} alt='' />
                </div>
              </div>
            </div>
            {/*TopBar */}
            <div className='bg-gray-100 dark:bg-gray-500 rounded-lg p-4'>
              <h3 className=' text-md font-semibold  py-0 mb-2 dark:text-gray-200'>Change Position Bar</h3>
              <div className='   flex gap-1'>
                <div className=' border-2 flex flex-col gap-1 cursor-pointer rounded-md border-blue-400 overflow-hidden'>
                  <img className='w-full h-full' src={LightMode} alt='' />
                  
                </div>
                <div className='border-2 flex flex-col gap-1 cursor-pointer rounded-md  overflow-hidden'>
                  <img className='w-full h-full' src={TopBar} alt='' />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Side