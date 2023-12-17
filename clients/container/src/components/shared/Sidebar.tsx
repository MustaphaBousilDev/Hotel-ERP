import React, { useEffect, useState } from 'react'
import Logo from '../../icons/Logo';
import Accordion from '../custom/AccordionSideBar';
import {dataConstant} from '../../constants'
import useThemeSwitcher from '../hooks/useThemeSwitcher';
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
  const {colorTheme} = useThemeSwitcher()
  const [theme,setTheme]=useState<string | null>(localStorage.getItem('theme'))
  const { listLinks } = dataConstant;
  const handleClick = (index:any) => {
    setActiveLink(index);
    console.log(`Link ${index} clicked`);
    // Add your click handling logic here
  };

  return (
    <div className={`navigation navigations shadow-md  bg-primary dark:bg-darkTopBar   
    
    ${menuActive ? "active" : ""} `}>
        <ul className={`  ${menuActive ? 'p-0' : 'p-2'} flex flex-col `}>
          <span className=' flex gap-2 items-center mb-5'>
            <Logo w='65px' h='65px' color={`${ theme==='dark' ? '#fff' : '#333'}`}
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
    </div>
  )
}

export default Navbar