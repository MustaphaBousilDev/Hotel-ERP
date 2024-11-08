import React, { ReactNode } from 'react';
interface CardProps {
  children: ReactNode;
  className?: string;
  styles?:any,
  title?:string
}
import { Header as HeaderCard } from './Header';
const Card: React.FC<CardProps> = ({ children, className, styles, title }) => {
  return (
    <div style={{...styles}} className={
      ` 
       border border-gray-200 rounded-md bg-white flex flex-col gap-1
      ${className}
      `}>
      <HeaderCard title={title} />
      <span className=' w-full bg-gray-300 h-1' style={{width:'95%',height:'1px' , margin:'0 auto'}} />
      {children}
    </div>
  );
};

export default Card;