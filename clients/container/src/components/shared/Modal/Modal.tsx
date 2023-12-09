import React from 'react'
import Shadow from '../Shadow'
interface props{open:boolean}
const Modal:React.FC<props>= ({open}) => {
  return (
    <>
    <Shadow className={`${
        open 
        ? 'top-12  z-40'
        : 'opacity-0 z-0' 
    }`} />
    <div className={`
    absolute   shadow-xl right-2  md:-right-5 w-56 h-60 
     bg-primary transition
    ${
        open 
        ? 'opacity-100 top-12 z-50'
        : 'opacity-0 z-0' 
    }
    `}
    >
    </div>
    </>
  )
}

export default Modal