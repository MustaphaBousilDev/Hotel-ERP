import React from 'react'
interface props{
    className:string
}
const Shadow:React.FC<props> = ({className}) => {
  return (
    <div className={`
      fixed bg-white opacity-10 top-0 left-0 w-full h-full
      ${className}
    `}>

    </div>
  )
}

export default Shadow