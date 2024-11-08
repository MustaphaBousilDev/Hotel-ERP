<<<<<<< HEAD
import React, { useState } from 'react'
import { FaSun } from 'react-icons/fa';
import Logo from '../../icons/Logo';
import Accordion from '../custom/AccordionSideBar';
import {dataConstant} from '../../constants'
=======
import React, { useEffect, useState } from 'react'
import Logo from '../../icons/Logo';
import Accordion from '../custom/AccordionSideBar';
import {dataConstant} from '../../constants'
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
>>>>>>> typeorm
interface NavbarProps {
  menuActive: boolean;
}
const Navbar: React.FC<NavbarProps>= ({menuActive}) => {

  const links = [
    "Brand Name",
    "Dashboard",
    "Categorie",
    "Messages",
    "Help",
    "Settings",
    "Password",
    "Sign Out",
];
  const [activeLink, setActiveLink] = useState<string | number>(links.indexOf("Dashboard"));
<<<<<<< HEAD
=======
  const {colorTheme} = useThemeSwitcher()
  const [theme,setTheme]=useState<string | null>(localStorage.getItem('theme'))
>>>>>>> typeorm
  const { listLinks } = dataConstant;
  const handleClick = (index:any) => {
    setActiveLink(index);
    console.log(`Link ${index} clicked`);
    // Add your click handling logic here
  };

  return (
<<<<<<< HEAD
    <div className={`navigation shadow-md  bg-primary   ${menuActive ? "active" : ""} `}>
        <ul className={`  ${menuActive ? 'p-0' : 'p-2'} flex flex-col `}>
          <span className=' flex gap-2 items-center mb-5'>
            <Logo w='65px' h='65px' color='#333'
            className={``}
            />
            <p className={`
              ${menuActive ? "hidden" : "flex"}
              text-2xl font-semibold text-textColor
              `}>HotelERP</p>
          </span>
          {listLinks.map((link, index) => (
            <Accordion 
              dataLink={link}
              activeMenu={menuActive} />
          ))}
        </ul>
=======
    <div className={`navigation navigations  bg-white   shadow-md ${menuActive ? ' py-2 ' : 'p-2 px-3 shadow-lg'}     dark:bg-darkTopBar   
    
    ${menuActive ? "active" : ""} `}>
        <div 
          style={{height:'99.5%'}}  
          className={` 
          relative bg-white p-4 rounded-md 
          overflow-hidden overflow-y-scroll child_side `}>
          <ul className={`  ${menuActive ? '' : 'p-2'} flex flex-col `}>
            <span className=' flex gap-2 items-center mb-5'>
              <Logo w='65px' h='65px' color={`${ theme==='dark' ? '#fff' : '#333'}`}
              className={` ${menuActive ? '' : ' ml-3 mt-3'}`}
              />
              <p className={`
                ${menuActive ? "hidden" : "flex"}
                text-2xl font-semibold text-textColor
                `}>HotelERP</p>
            </span>
            {listLinks.map((link, index) => (
              <Accordion 
                className='  bg-white'
                dataLink={link}
                activeMenu={menuActive} />
            ))}
          </ul>
        </div>
>>>>>>> typeorm
    </div>
  )
}

export default Navbar