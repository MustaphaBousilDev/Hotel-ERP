import React, { useState } from 'react'
import Notifications from '../Notification/Notifications';
import Searchs from '../Search/Searchs';
import Bars from '../Bar/Bars';
import Theme from '../Dark/Theme';
import Picture from '../Avatar/Picture';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
interface NavbarProps {
    menuActive: boolean;
    setMenuActive:any
}
const TopBar:React.FC<NavbarProps> = ({menuActive,setMenuActive}) => {
    const {colorTheme, setTheme} = useThemeSwitcher();
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [notification, setNotification] = useState<number>(0);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    
    const toggleDropdown = () => {
      setDropdownOpen((prevState) => !dropdownOpen);
    };
    const handleDark=()=>{
      setTheme(colorTheme)
      console.log('mode',colorTheme)
    }
  return (
    <div className={`topbar my-2 ${menuActive ? 'mx-2': ' mx-1'}  shadow-sm rounded-md dark:bg-darkTopBar bg-white transition duration-300`}>
        <Bars menuActive={menuActive} onClick={toggleMenu}/>
        <Searchs/>
        <div className=" flex  gap-2 items-center md:pr-10">
          <Notifications count={notification} />
          <Theme onClick={handleDark} dark={colorTheme} />
          <Picture dropDown={dropdownOpen} onClick={toggleDropdown} />
        </div>
      </div>
  )
}

export default TopBar