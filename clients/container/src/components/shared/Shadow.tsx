import React,{useContext} from 'react'
import { LayoutContext } from '../../hooks/useLayouts'
interface props{className?:string}
const Shadow:React.FC<props> = ({className}) => {
  const {handleToggleOpenSide}=useContext(LayoutContext)
  return (
    <div
      onClick={handleToggleOpenSide}
      className={`
      fixed bg-white  opacity-10 top-0 left-0 w-full h-full
      ${className}
    `}>

    </div>
  )
}

export default Shadow