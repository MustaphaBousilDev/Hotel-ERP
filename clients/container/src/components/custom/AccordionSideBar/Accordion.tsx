import React from 'react'
import { Accordion as AccordionLib, AccordionItem } from '@nextui-org/accordion'
import Content from './Content';
import { FaSun } from 'react-icons/fa';
import { AccorProps } from './interface';
const Accordion:React.FC<AccorProps> = ({onClick,activeMenu,dataLink}) => {
  return (
    <AccordionLib variant="splitted" className='mx-1  w-auto'>
       <AccordionItem isCompact 
        key="1" 
        className=' text-left text-lg relative' 
        aria-label={<Content activeMenu dataLink={dataLink} />}
        title={<Content dataLink={dataLink} activeMenu={activeMenu}/>}
       >
        <div className=' flex flex-col gap-2'>
            {
                dataLink?.child.map((c:any,key:number)=>(
                    <p className={`${activeMenu ? ' ' : 'mx-3'}
                    flex gap-2 transition-all cursor-pointer items-center 
                    hover:bg-textColor dark:bg-gray-600 dark:text-white hover:text-white py-1 
                    rounded-md`}>
                        <FaSun className=' scale-150 ml-4' />
                        <span className={`${activeMenu ? 'hidden' : ''}`}>
                            {c.name}
                        </span>
                    </p>
                ))
            }
        </div>
      </AccordionItem>
    </AccordionLib>
  );
}


export default Accordion