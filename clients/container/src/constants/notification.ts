import { HiMiniUsers } from "react-icons/hi2";
import { MdMeetingRoom } from "react-icons/md";
import { IoRestaurant } from "react-icons/io5";
import { GrConfigure } from "react-icons/gr";
import { CgDanger } from "react-icons/cg";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";
const ListNotification = [
    {
      name: "WARNING",
      color: "text-yellow-300",
      colorFocus:'text-yellow-400',
      bg:'bg-yellow-50',
      border:'yellow-400',
      icon: IoWarningOutline,
      child:[
        {
          name: "Guasts",
          id:'GUAST',
          color:"text-gray-600",
          icon: HiMiniUsers,
          colorFocus:'text-dark',
        },
        {
          name: "ROOMS",
          id:'ROOMS',
          color:"text-gray-600",
          icon: MdMeetingRoom,
          colorFocus:'text-dark',
        },
        {
          name: "FOOD",
          id:'FOOD',
          color:"text-gray-600",
          icon: IoRestaurant,
          colorFocus:'text-dark',
        },
        {
          name: "Guasts",
          id:'CONFIG',
          color:"text-gray-600",
          icon: GrConfigure,
          colorFocus:'text-dark',
        },
      ]
    },
    {
      name: "DANGER",
      color: "text-red-400",
      colorFocus:'text-red-600',
      bg:'bg-red-50',
      border:'red-600',
      icon: CgDanger,
      child:[
        {
          name: "Guasts",
          id:'GUAST',
          color:"text-gray-600",
          icon: HiMiniUsers,
          colorFocus:'text-dark',
        },
        {
          name: "ROOMS",
          id:'ROOMS',
          color:"text-gray-600",
          icon: MdMeetingRoom,
          colorFocus:'text-dark',
        },
        {
          name: "FOOD",
          id:'FOOD',
          color:"text-gray-600",
          icon: IoRestaurant,
          colorFocus:'text-dark',
        },
        {
          name: "Guasts",
          id:'CONFIG',
          color:"text-gray-600",
          icon: GrConfigure,
          colorFocus:'text-dark',
        },
        {
          name: "Fuckers",
          id:'FUCKER',
          color:"text-gray-600",
          icon: GrConfigure,
          colorFocus:'text-dark',
        },
      ]
    },
    {
      name: "INFO",
      color: "text-blue-500",
      colorFocus:'text-blue-600',
      bg:'bg-blue-50',
      border:'blue-600',
      icon: IoIosInformationCircleOutline,
      child:[
        {
          name: "Guasts",
          id:'GUAST',
          color:"text-gray-600",
          icon: HiMiniUsers,
          colorFocus:'text-dark',
        },
        {
          name: "ROOMS",
          id:'ROOMS',
          color:"text-gray-600",
          icon: MdMeetingRoom,
          colorFocus:'text-dark',
        },
      ]
    },
];

export default ListNotification