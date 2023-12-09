import React,{useContext} from 'react'
import { LayoutContext } from '../hooks/useLayouts';
import { IoColorPaletteOutline } from "react-icons/io5";
import Shadow from '../shared/Shadow';
const Side = () => {
  const { openSide, handleToggleOpenSide} = useContext(LayoutContext)
  return (
    <div 
    className={`
    fixed   h-screen   top-0 bg-white shadow-lg transition-all duration-300
     right-0 p-3 z-40
    ${openSide ? 'w-80 flex' : 'w-0 p-0 -right-6 opacity-0'}
    `}
    >
        <div className=' flex flex-col relative w-full'>
            <div className='flex w-full justify-center  font-semibold text-xl 
            items-center gap-2 text-textColor'>
                <span>
                    <IoColorPaletteOutline
                      className=' w-6 h-6'
                      />
                </span>
                <span>Customes Styles</span>
            </div>
        </div>
    </div>
  )
}

export default Side