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
<<<<<<< HEAD
import { PiVanThin } from "react-icons/pi";
import { IoBagCheckOutline } from "react-icons/io5";
=======
import { MdAddTask } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { PiVanThin } from "react-icons/pi";
import { IoBagCheckOutline } from "react-icons/io5";
import { FcParallelTasks } from "react-icons/fc";
import { GrDocumentConfig } from "react-icons/gr";
import { IoMdStats } from "react-icons/io";

>>>>>>> typeorm
const listLinks = [
    {
      name: "overwies",
      path: "/dashboard",
      icon: TfiDashboard,
      child:[
        {
          name: "all",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "housekeeping",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "restaurants",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "spaServices",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "mantanance",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "guasts",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "rooms",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "stockes",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        }
      ]
    },
    {
<<<<<<< HEAD
=======
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
>>>>>>> typeorm
      name: "reservations",
      path: "/dashboard",
      icon: CiCalendarDate,
      child:[
        {
          name: "all",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "reserveé",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "add",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "lists",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
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
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "lists",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "add",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "satistic",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
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
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "statistics",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "orders",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "employéé",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
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
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "lists",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
      ]
    },
    {
<<<<<<< HEAD
      name: "employéé",
      path: "/dashboard/brands",
      icon: FaUserTie,
      child:[
        {
          name: "overview",
          path: "/dashboard",
          icon: "Logo",
=======
      name: "employes",
      path: "/dashboard/employes",
      icon: FaUserTie,
      child:[
        {
          name: "all",
          path: "/dashboard/employes",
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "lists",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "add",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "statistics",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
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
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "tasks",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "addTask",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "overview",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
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
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "add",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "lists",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
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
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "rooms",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "restaurant",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "spaService",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
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
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "orders",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "stock",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "stock",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
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
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        },
        {
          name: "add",
          path: "/dashboard",
<<<<<<< HEAD
          icon: "Logo",
=======
          icon: TfiDashboard,
>>>>>>> typeorm
        }
      ]
    },
];

export default listLinks