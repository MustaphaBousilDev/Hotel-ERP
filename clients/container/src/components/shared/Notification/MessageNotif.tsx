import React from "react";
import CustomTabs from "./CustomTabs";
import ListNotification from "../../../constants/notification";
interface props{
  onClick?:()=>void,
  child?:any
}
export const WarningNotif:React.FC<props>=({onClick})=>{
  return (
    <CustomTabs child={ListNotification[0].child} />
  )

}
export const DangergNotif:React.FC<props>=({onClick})=>{
  return (
    <CustomTabs child={ListNotification[1].child}/>
  )
}
export const InfoNotif:React.FC<props>=({onClick})=>{
  return (
    <CustomTabs child={ListNotification[2].child}/>
  )
}