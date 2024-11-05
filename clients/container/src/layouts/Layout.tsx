<<<<<<< HEAD
import React,{useState } from 'react'
=======
import React,{useState,useContext} from 'react'
>>>>>>> typeorm
import '../styles/Dashboard.css'
import {Outlet} from "react-router-dom";
import Sidebar from '../components/shared/Sidebar';
import TopBar from '../components/shared/TopBar/TopBar';
<<<<<<< HEAD
=======
import Side from '../components/Settings/Side';
import Settings from '../components/Settings/Settings';
import Shadow from '../components/shared/Shadow';
import { LayoutContext } from '../hooks/useLayouts';
import BreadCrumbs from '../components/shared/BreadCrumbs/BreadCrumbs';
>>>>>>> typeorm
interface Props {
    children?: React.ReactNode
}
const DashboardLayout: React.FC<Props> = (props:Props) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
<<<<<<< HEAD
  return (
    <>
    <Sidebar menuActive={menuActive} />
    <div className={`main ${menuActive ? "active" : ""}`}>
      <TopBar menuActive={menuActive} setMenuActive={setMenuActive} />
=======
    const {openSide} =useContext(LayoutContext)
  return (
    <>
    <Sidebar menuActive={menuActive} />
    <div className={`main bg-gray-50 ${menuActive ? "active" : ""}`}>
      <TopBar menuActive={menuActive} setMenuActive={setMenuActive} />
      <Side/>
      <Settings  />
      <Shadow className={`z-30 bg-textColor ${openSide ? '' : 'hidden'}`} />
      {/* <BreadCrumbs/> */}
>>>>>>> typeorm
      <Outlet />
    </div>
    </>
  )
}

export default DashboardLayout