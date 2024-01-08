import React, { ReactNode } from 'react';
import { ImUserTie } from "react-icons/im";
import { IoIosArrowForward } from "react-icons/io";
import { DefaultButton as ButtonHeaderCard } from '../Buttons/DefaultButton';
interface HeaderCardProps {
  className?: string;
  styles?:any,
  title?:string,
}
export const Header:React.FC<HeaderCardProps> = ({
  className,
  styles,
  title
}) => {
  return (
    <div className={` p-2  flex justify-between items-center ${className}`}>
      <div className=' flex gap-2 items-center text-gray-700'>
        <ImUserTie/>
        <span className=' text-sm font-semibold'>{title}</span>
      </div>
      <div>
        <ButtonHeaderCard className=' text-sm flex gap-2'>
          <span className=' font-semibold'>See All</span>
          <span>
            <IoIosArrowForward className=' w-4 h-4' />
          </span>
        </ButtonHeaderCard>
      </div>
    </div>
  )
}

