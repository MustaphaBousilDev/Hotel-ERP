import React from 'react'
import { Accordion as AccordionLib, AccordionItem } from '@nextui-org/accordion'
import Content from './Content';
import { FaSun } from 'react-icons/fa';
import { AccorProps } from './interface';
<<<<<<< HEAD
const Accordion:React.FC<AccorProps> = ({onClick,activeMenu,dataLink}) => {
  return (
    <AccordionLib variant="splitted" className='mx-1  w-auto'>
=======
import { Link } from 'react-router-dom';
const Accordion:React.FC<AccorProps> = ({onClick,activeMenu,dataLink,className}) => {
  return (
    <AccordionLib 
      variant="splitted" 
      className={`mx-1  w-auto ${className}`}
    >
>>>>>>> typeorm
       <AccordionItem isCompact 
        key="1" 
        className=' text-left text-lg relative' 
        aria-label={<Content activeMenu dataLink={dataLink} />}
        title={<Content dataLink={dataLink} activeMenu={activeMenu}/>}
       >
        <div className=' flex flex-col gap-2'>
            {
                dataLink?.child.map((c:any,key:number)=>(
<<<<<<< HEAD
                    <p className={`${activeMenu ? ' ' : 'mx-3'}
                    flex gap-2 transition-all cursor-pointer items-center 
                    hover:bg-textColor hover:text-white py-1 rounded-md`}>
                        <FaSun className=' scale-150 ml-4' />
                        <span className={`${activeMenu ? 'hidden' : ''}`}>
                            {c.name}
                        </span>
                    </p>
=======
                    <Link to={c.path} className={`${activeMenu ? ' ' : 'mx-3'}
                    flex gap-2 transition-all cursor-pointer items-center 
                    hover:bg-textColor dark:bg-gray-600 dark:text-white hover:text-white py-1 
                    rounded-md`}>
                        <c.icon className=' scale-150 ml-4' />
                        <span className={`${activeMenu ? 'hidden' : ''}`}>
                            {c.name}
                        </span>
                    </Link>
>>>>>>> typeorm
                ))
            }
        </div>
      </AccordionItem>
    </AccordionLib>
  );
}


export default Accordion