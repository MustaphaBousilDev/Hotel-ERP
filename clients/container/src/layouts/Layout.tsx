import React,{useState } from 'react'
import '../styles/Dashboard.css'
import {Outlet} from "react-router-dom";
import Sidebar from '../components/shared/Sidebar';
import TopBar from '../components/shared/TopBar/TopBar';
interface Props {
    children?: React.ReactNode
}
const DashboardLayout: React.FC<Props> = (props:Props) => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
  return (
    <>
    <Sidebar menuActive={menuActive} />
    <div className={`main ${menuActive ? "active" : ""}`}>
      <TopBar menuActive={menuActive} setMenuActive={setMenuActive} />
      <Outlet />
    </div>
    </>
  )
}

export default DashboardLayout