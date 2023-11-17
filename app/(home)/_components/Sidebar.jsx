"use client";
import { Search, Shield, Layout, Mail } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Sidebar = () => {
  const menuList = [
    {
      id: 1,
      name: "Browse",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: Layout,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
    {
      id: 4,
      name: "NewsLetter",
      icon: Mail,
      path: "/newsletter ",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="h-full bg-white border-right flex flex-col overflow-y-auto shadow-md">
      <div className="p-5 border-b z-50">
        <Image src="/homelogo.png" alt="logo" width={170} height={100} />
      </div>
      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <div
            className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 cursor-pointer
              ${
                activeIndex == index
                  ? "bg-purple-200 text-purple-800 font-semibold"
                  : null
              }`}
            onClick={() => setActiveIndex(index)}
          >
            <item.icon />
            <h2>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
