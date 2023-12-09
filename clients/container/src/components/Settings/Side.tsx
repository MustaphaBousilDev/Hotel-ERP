import React,{useContext} from 'react'
import { LayoutContext } from '../hooks/useLayouts';
import { IoColorPaletteOutline } from "react-icons/io5";
import LightMode from '../../assets/lightMod.png'
import DarkMode from '../../assets/darkMod.png'
const Side = () => {
  const { openSide, handleToggleOpenSide} = useContext(LayoutContext)
  return (
    <div 
    className={`
    fixed   h-screen   top-0 bg-white shadow-lg transition-all duration-300
     right-0 p-4 z-40
    ${openSide ? 'w-80 flex' : 'w-0 p-0 -right-6 opacity-0'}
    `}
    >
        <div className=' flex flex-col gap-4  relative w-full'>
            <div className='flex w-full justify-center  font-semibold text-xl 
            items-center gap-2 text-textColor'>
                <span>
                    <IoColorPaletteOutline
                      className=' w-6 h-6'
                      />
                </span>
                <span>Theme Customizer</span>
            </div>
            <p className=' text-xs'>
              Explore different styles according to your preferences
            </p>
            <div className='bg-gray-100 rounded-lg p-4'>
              <h3 className=' text-md  py-0 mb-2'>Color Scheme</h3>
              <div className='   flex gap-1'>
                <div className=' border-2 flex flex-col gap-1 cursor-pointer rounded-md border-blue-400 overflow-hidden'>
                  <img className='w-full h-full' src={LightMode} alt='' />
                  
                </div>
                <div className='border-2 flex flex-col gap-1 cursor-pointer rounded-md  overflow-hidden'>
                  <img className='w-full h-full' src={DarkMode} alt='' />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Side