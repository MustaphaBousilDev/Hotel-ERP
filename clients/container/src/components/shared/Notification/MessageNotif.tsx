import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import CustomTabs from "./CustomTabs";
interface props{
  onClick?:()=>void
}
export const WarningNotif:React.FC<props>=({onClick})=>{
  return (
    <CustomTabs/>
  )

}
export const DangergNotif:React.FC<props>=({onClick})=>{
  return (
    <CustomTabs/>
  )
}
export const InfoNotif:React.FC<props>=({onClick})=>{
  return (
    <CustomTabs/>
  )
}