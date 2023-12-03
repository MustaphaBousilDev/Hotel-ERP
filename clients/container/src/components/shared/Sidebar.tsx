import React, { useState } from 'react'
import { FaSun } from 'react-icons/fa';
import Logo from '../../icons/Logo';

interface NavbarProps {
  menuActive: boolean;
}
const Navbar: React.FC<NavbarProps>= ({menuActive}) => {
  const links = [
    "Brand Name",
    "Dashboard",
    "Categorie",
    "Messages",
    "Help",
    "Settings",
    "Password",
    "Sign Out",
];
  const [activeLink, setActiveLink] = useState<string | number>(links.indexOf("Dashboard"));
  
  const handleClick = (index:any) => {
    setActiveLink(index);
    console.log(`Link ${index} clicked`);
    // Add your click handling logic here
  };
const listLinks = [
    {
      name: "Brand Name",
      path: "/dashboard",
      icon: "Logo",
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: "home-outline",
    },
    {
      name: "Restaurant",
      path: "/dashboard/restaurant",
      icon: "restaurant-outline",  // Updated icon name
    },
    {
      name: "Product",
      path: "/dashboard/items",
      icon: "box-outline",
    },
    {
      name: "Category",
      path: "/dashboard/category",
      icon: "list-outline",
    },
    {
      name: "Brand",
      path: "/dashboard/brands",
      icon: "list-outline",
    },
    {
      name: "Order",
      path: "/dashboard/orders",
      icon: "cart-outline",  // Updated icon name
    },
    {
      name: "Delivery",
      path: "/dashboard/deliveryPersone",
      icon: "car-outline",  // Updated icon name
    },
    {
      name: "Menus",
      path: "/dashboard/menus",
      icon: "person-outline",  // Updated icon name
    },
    {
      name: "Cuisines",
      path: "/dashboard/cuisine",
      icon: "star-outline",  // Updated icon name
    },
    {
      name: "Payment",
      path: "/dashboard/payment",
      icon: "credit-card-outline",  // Updated icon name
    },
];
  return (
    <div className={`navigation bg-red-400   ${menuActive ? "active" : ""} `}>
        <ul className={`  ${menuActive ? 'p-3' : 'p-3'}`}>
          <span className=' flex gap-2 items-center mb-5'>
            <Logo/>
            <p className={`
              ${menuActive ? "hidden" : "flex"}
              text-2xl font-semibold
              `}>HotelERP</p>
          </span>
          {listLinks.map((link, index) => (
            <li
              key={index}
              className={`
                     flex items-center gap-3
                    ${index === activeLink ? "hovered" : ""}
                    ${menuActive ? ' flex items-center  p-0 pr-2  justify-center' : ''}
                    `}
              onClick={() => handleClick(index)}
              onKeyDown={() => handleClick(index)}
            >
              
                <span className="icon  text-2xl">
                  <FaSun className=' '/>
                </span>
                <span className={`title text-xl ${menuActive ? "hidden" : "flex"}`}>
                    {link.name}
                </span>
              
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Navbar