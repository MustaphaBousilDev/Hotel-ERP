import React, { useState } from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import {Dropdown,DropdownTrigger,DropdownMenu,DropdownItem} from '@nextui-org/dropdown'
import {Tabs,Tab,} from '@nextui-org/tabs';
import {WarningNotif,DangergNotif,InfoNotif} from './MessageNotif'

interface props{
    count:number
}
const Notifications:React.FC<props> = ({count}) => {
    const [activeTab, setActiveTab] = useState<any>(0);
    let tabs = [
        {
          id: "photos",
          label:WarningNotif,
          content: "Lorem .",
          color:'yellow-500'
        },
        {
          id: "music",
          label: DangergNotif,
          content: "pariatur.",
          color:'red-500'
        },
        {
          id: "videos",
          label: InfoNotif,
          content: "laborum.jjjj",
          color:'blue-500'
        }
    ];
  return (
    <Dropdown>
        <DropdownTrigger>
            <div className=" relative w-9 h-9 bg-light dark:bg-gray-700 dark:text-white  items-center justify-center rounded-full cursor-pointer hidden md:flex">
                <span
                    className="
                    absolute right-3 z-20  top-0 w-3 h-3 bg-danger rounded-full text-xs
                    text-white flex justify-center items-center"
                >
                    {count}
                </span>
                <span>
                    <IoIosNotificationsOutline className=" w-7 h-7 text-greyNormal dark:text-light" />
                </span>
            </div>
        </DropdownTrigger>
        <DropdownMenu 
            className=' shadow-lg w-52'
            aria-label="Dynamic Actions" 
            closeOnSelect={false}
        >
            <DropdownItem 
            style={{alignItems:''}}
            className=' flex p-0 flex-col  '>
            <div className='  w-[70%]  bg-white p-2 border rounded-md'>
                <Tabs 
                    className='h-9 flex items-center justify-center  p-0 scrollbar-hide m-0 w-full'
                    aria-label="Dynamic tabs" 
                    selectedIndex={activeTab}
                    
                    items={tabs}>
                    {(item:any, index:number) => (
                        <Tab 
                        
                        className={`
                            text-sm  px-3  flex items-center justify-center  w-[30%]
                            
                        `}
                        key={item.index} 
                        title={<item.label/>}>
                            {item.content}
                        </Tab>
                    )}
                </Tabs>
            </div>
            </DropdownItem>
        </DropdownMenu>
    </Dropdown>
  )
}

export default Notifications