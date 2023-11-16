import Image from "next/image";
import React from "react";

const Sidebar = () => {
  const menuList = [
    {
      id: 1,
      name: "Browse",
      icom: "Search",
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icom: "Search",
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Upgrade",
      icom: "Search",
      path: "/upgrade",
    },
    {
      id: 4,
      name: "NewsLetter",
      icom: "Search",
      path: "/newsletter ",
    },
  ];
  return (
    <div className="h-full b-white border-right flex flex-col overflow-auto shadow-md">
      <div className="p-5 border-b">
        <Image src="/homelogo.png" alt="logo" width={170} height={100} />
      </div>
    </div>
  );
};

export default Sidebar;
