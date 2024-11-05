import React,{ReactNode} from 'react'
interface Props{
    icon?:ReactNode,
    type:string,
    placeholder?:string,
    value?:string | number,
    onChange:()=>void,
    name?:string,
    className?:string,
}
const Input:React.FC<Props> = ({
    icon,type,placeholder,value,onChange,name,className
}) => {
  return (
    <div className=' relative h-11 bg-greyLight border-0
    rounded-md overflow-hidden 
    '>
        {
            icon && (
                <div className=' absolute z-50 text-greyNormal  top-3 left-3  h-full text-xl'>
                    {icon}
                </div>
            )
        }
        <input 
<<<<<<< HEAD
           className='outline-none transition duration-200 
=======
           className='outline-none dark:text-gray-300 dark:bg-gray-600 transition duration-200 
>>>>>>> typeorm
           px-9 border rounded-md  w-full h-full border-greyLight
           focus:border-greyNormal'
           type={type}
           name={name}
           placeholder={placeholder}
        />
    </div>
  )
}

export default Input