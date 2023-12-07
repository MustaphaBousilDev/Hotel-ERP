import {Icons} from '../icons'


import { TfiDashboard } from "react-icons/tfi";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineBedroomChild } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa6";
import { LuUsers2 } from "react-icons/lu";
import { FaSprayCanSparkles } from "react-icons/fa6";
import { FaHandSparkles } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { PiVanThin } from "react-icons/pi";
import { IoBagCheckOutline } from "react-icons/io5";
const listLinks = [
    {
      name: "overwies",
      path: "/dashboard",
      icon: TfiDashboard,
      child:[
        {
          name: "all",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "housekeeping",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "restaurants",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "spaServices",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "mantanance",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "guasts",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "rooms",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "stockes",
          path: "/dashboard",
          icon: "Logo",
        }
      ]
    },
    {
      name: "reservations",
      path: "/dashboard",
      icon: CiCalendarDate,
      child:[
        {
          name: "all",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "reserveé",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "add",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "lists",
          path: "/dashboard",
          icon: "Logo",
        }
      ]
    },
    {
      name: "rooms",
      path: "/dashboard/restaurant",
      icon: MdOutlineBedroomChild,  // Updated icon name
      child:[
        {
          name: "overview",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "lists",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "add",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "satistic",
          path: "/dashboard",
          icon: "Logo",
        },
      ]
    },
    {
      name: "restaurants",
      path: "/dashboard/items",
      icon: IoFastFoodOutline,
      child:[
        {
          name: "stock",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "statistics",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "orders",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "employéé",
          path: "/dashboard",
          icon: "Logo",
        },
      ]
    },
    {
      name: "guasts",
      path: "/dashboard/category",
      icon: LuUsers2,
      child:[
        {
          name: "overview",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "lists",
          path: "/dashboard",
          icon: "Logo",
        },
      ]
    },
    {
      name: "employéé",
      path: "/dashboard/brands",
      icon: FaUserTie,
      child:[
        {
          name: "overview",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "lists",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "add",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "statistics",
          path: "/dashboard",
          icon: "Logo",
        },
      ]
    },
    {
      name: "HouseKeeping",
      path: "/dashboard/orders",
      icon: FaSprayCanSparkles,  // Updated icon name
      child:[
        {
          name: "overview",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "tasks",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "addTask",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "overview",
          path: "/dashboard",
          icon: "Logo",
        },
      ]
    },
    {
      name: "transpart",
      path: "/dashboard/deliveryPersone",
      icon: PiVanThin,  // Updated icon name
      child:[
        {
          name: "overview",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "add",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "lists",
          path: "/dashboard",
          icon: "Logo",
        },
      ]
    },
    {
      name: "mantenance",
      path: "/dashboard/menus",
      icon: FaUsersGear,  // Updated icon name
      child:[
        {
          name: "overview",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "rooms",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "restaurant",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "spaService",
          path: "/dashboard",
          icon: "Logo",
        },
      ]
    },
    {
      name: "spa service",
      path: "/dashboard/cuisine",
      icon: FaHandSparkles,  // Updated icon name
      child:[
        {
          name: "overview",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "orders",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "stock",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "stock",
          path: "/dashboard",
          icon: "Logo",
        },
      ]
    },
    {
      name: "orders",
      path: "/dashboard/payment",
      icon: IoBagCheckOutline,  // Updated icon name
      child:[
        {
          name: "overview",
          path: "/dashboard",
          icon: "Logo",
        },
        {
          name: "add",
          path: "/dashboard",
          icon: "Logo",
        }
      ]
    },
];

export default listLinks