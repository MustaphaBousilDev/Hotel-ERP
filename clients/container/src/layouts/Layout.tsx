import React,{useState,useContext} from 'react'
import '../styles/Dashboard.css'
import {Outlet} from "react-router-dom";
import Sidebar from '../components/shared/Sidebar';
import TopBar from '../components/shared/TopBar/TopBar';
import Side from '../components/Settings/Side';
import Settings from '../components/Settings/Settings';
import Shadow from '../components/shared/Shadow';
import { LayoutContext } from '../hooks/useLayouts';
import BreadCrumbs from '../components/shared/BreadCrumbs/BreadCrumbs';
interface Props {
    children?: React.ReactNode
}
const DashboardLayout: React.FC<Props> = (props:Props) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const {openSide} =useContext(LayoutContext)
  return (
    <>
    <Sidebar menuActive={menuActive} />
    <div className={`main bg-gray-50 ${menuActive ? "active" : ""}`}>
      <TopBar menuActive={menuActive} setMenuActive={setMenuActive} />
      <Side/>
      <Settings  />
      <Shadow className={`z-30 bg-textColor ${openSide ? '' : 'hidden'}`} />
      <BreadCrumbs/>
      <Outlet />
    </div>
    </>
  )
}

export default DashboardLayout