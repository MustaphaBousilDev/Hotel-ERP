import React, { useState } from 'react'
import Notifications from '../Notification/Notifications';
import Searchs from '../Search/Searchs';
import Bars from '../Bar/Bars';
import Theme from '../Dark/Theme';
import Picture from '../Avatar/Picture';
interface NavbarProps {
    menuActive: boolean;
    setMenuActive:any
}
const TopBar:React.FC<NavbarProps> = ({menuActive,setMenuActive}) => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [notification, setNotification] = useState<number>(0);
    const [dark,setDark]=useState<boolean>(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };
    
    const toggleDropdown = () => {
    setDropdownOpen((prevState) => !dropdownOpen);
    };
  return (
    <div className="topbar shadow-sm">
        <Bars menuActive={menuActive} onClick={toggleMenu}/>
        <Searchs/>
        <div className=" flex  gap-2 items-center pr-4">
          <Notifications count={notification} />
          <Theme onClick={()=>setDark(!dark)} dark={dark} />
          <Picture dropDown={dropdownOpen} onClick={toggleDropdown} />
        </div>
      </div>
  )
}

export default TopBar