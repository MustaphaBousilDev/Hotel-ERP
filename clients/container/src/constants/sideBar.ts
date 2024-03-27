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
import { MdAddTask } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { PiVanThin } from "react-icons/pi";
import { IoBagCheckOutline } from "react-icons/io5";
import { FcParallelTasks } from "react-icons/fc";
import { GrDocumentConfig } from "react-icons/gr";
import { IoMdStats } from "react-icons/io";

const listLinks = [
    {
      name: "overwies",
      path: "/dashboard",
      icon: TfiDashboard,
      child:[
        {
          name: "all",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "housekeeping",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "restaurants",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "spaServices",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "mantanance",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "guasts",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "rooms",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "stockes",
          path: "/dashboard",
          icon: TfiDashboard,
        }
      ]
    },
    {
      name: "tasks",
      path: "/dashboard/tasks",
      icon: FaTasks,
      child:[
        {
          name: "all",
          path: "/dashboard/tasks",
          icon: FcParallelTasks,
        },
        {
          name: "add",
          path: "/dashboard/tasks/add",
          icon: MdAddTask,
        },
        {
          name: "config",
          path: "/dashboard/tasks/config",
          icon: GrDocumentConfig,
        },
        {
          name: "report",
          path: "/dashboard/tasks/report",
          icon: IoMdStats,
        },
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
          icon: TfiDashboard,
        },
        {
          name: "reserveé",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "add",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "lists",
          path: "/dashboard",
          icon: TfiDashboard,
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
          icon: TfiDashboard,
        },
        {
          name: "lists",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "add",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "satistic",
          path: "/dashboard",
          icon: TfiDashboard,
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
          icon: TfiDashboard,
        },
        {
          name: "statistics",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "orders",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "employéé",
          path: "/dashboard",
          icon: TfiDashboard,
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
          icon: TfiDashboard,
        },
        {
          name: "lists",
          path: "/dashboard",
          icon: TfiDashboard,
        },
      ]
    },
    {
      name: "employes",
      path: "/dashboard/employes",
      icon: FaUserTie,
      child:[
        {
          name: "all",
          path: "/dashboard/employes",
          icon: TfiDashboard,
        },
        {
          name: "lists",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "add",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "statistics",
          path: "/dashboard",
          icon: TfiDashboard,
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
          icon: TfiDashboard,
        },
        {
          name: "tasks",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "addTask",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "overview",
          path: "/dashboard",
          icon: TfiDashboard,
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
          icon: TfiDashboard,
        },
        {
          name: "add",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "lists",
          path: "/dashboard",
          icon: TfiDashboard,
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
          icon: TfiDashboard,
        },
        {
          name: "rooms",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "restaurant",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "spaService",
          path: "/dashboard",
          icon: TfiDashboard,
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
          icon: TfiDashboard,
        },
        {
          name: "orders",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "stock",
          path: "/dashboard",
          icon: TfiDashboard,
        },
        {
          name: "stock",
          path: "/dashboard",
          icon: TfiDashboard,
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
          icon: TfiDashboard,
        },
        {
          name: "add",
          path: "/dashboard",
          icon: TfiDashboard,
        }
      ]
    },
];

export default listLinks