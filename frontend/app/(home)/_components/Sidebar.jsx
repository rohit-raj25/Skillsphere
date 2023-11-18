"use client";
import {
  Search,
  Shield,
  Layout,
  Mail,
  Video,
  CalendarDays,
} from "lucide-react";
import Image from "next/image";
import { UserButton, useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Sidebar = () => {
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    console.log(user);
  }, [user]);
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
      name: "Student",
      icon: Shield,
      path: "/student",
    },
    {
      id: 4,
      name: "Mailbox",
      icon: Mail,
      path: "/newsletter ",
    },
    {
      id: 5,
      name: "Calender",
      icon: CalendarDays,
      path: "/calender ",
    },
    {
      id: 6,
      name: "Recordings",
      icon: Video,
      path: "/recording ",
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
      <div className="p-5">
        {!user ? (
          <button onClick={() => router.push("./sign-in")}>Login</button>
        ) : (
          <div className="flex gap-4 fixed">
            <UserButton />
            <h3 className="font-bold text-xl">{user.fullName}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
