import React ,{useContext} from 'react'
import './setting.css'
import { IoSettingsSharp } from "react-icons/io5";
import { LayoutContext } from '../hooks/useLayouts';
const Settings = () => {
  const { openSide, handleToggleOpenSide} = useContext(LayoutContext)
  console.log(openSide)
  return (
    <div
    style={{right:`${openSide ? '272px' : '-48px'}`,}}
    onClick={handleToggleOpenSide}
    className='fixed flex cursor-pointer bg-white border-2 rounded-tl-lg rounded-tr-lg border-greyLight 
    px-4 py-3 z-50 justify-center items-center transform -rotate-90  
    transition-all duration-300
    gap-2   top-1/2 -right-12
   '>
        <span className='rotate-icon'>
            <IoSettingsSharp 
               className=' w-6 h-6 text-bluePrimary'
            />
        </span>
        <span className=' text-sm text-greyNormal font-semibold'>
            CUSTOMIZE
        </span>
    </div>
  )
}

export default Settings