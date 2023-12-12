import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { CgDanger } from "react-icons/cg";
import { IoIosInformationCircleOutline } from "react-icons/io";
interface props{
  onClick?:()=>void
}
export const WarningNotif:React.FC<props>=({onClick})=>{
  return (
    <div onClick={onClick} className=" flex gap-1 items-center">
        <IoWarningOutline className=" text-yellow-500" />
        <span className=" text-yellow-500">warning</span>
    </div>
  )

}
export const DangergNotif:React.FC<props>=({onClick})=>{
  return (
    <div onClick={onClick} className=" flex gap-1 items-center">
        <CgDanger className=" text-red-500" />
        <span className=" text-red-500">Danger</span>
    </div>
  )
}
export const InfoNotif:React.FC<props>=({onClick})=>{
  return (
    <div onClick={onClick} className=" flex gap-1 items-center">
        <IoIosInformationCircleOutline className=" text-blue-500" />
        <span className=" text-blue-500">Info</span>
    </div>
  )
}