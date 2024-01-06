import React, { ReactNode } from 'react';
interface ButtonProps {
  children: ReactNode;
  className?: string;
  styles?:any
}
export const DefaultButton:React.FC<ButtonProps> = ({
  children,className,styles
}) => {
  return (
    <div 
      className={` flex items-center border p-2 px-3 cursor-pointer border-gray-300 bg-white text-gray-600
      rounded-md
      ${className}`} 
      style={{...styles}}
    >
      {children}
    </div>
  )
}