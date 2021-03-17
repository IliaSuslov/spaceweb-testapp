import React from "react";
import * as FaIcons from "react-icons/fa";


const MenuData = [
  {
    title: "Аккаунт",
    path: "/account",
    icon: <FaIcons.FaUserCircle />,
  },
  {
    title: "VPS",
    path: "/vps",
    icon: <FaIcons.FaServer />,
  },
  {
    title: "Домены",
    path: "/domains",
    icon: <FaIcons.FaList />,
  },
  {
    title: "Бортовой журнал",
    path: "/journal",
    icon: <FaIcons.FaStackExchange />,
  },
];

export default MenuData;
