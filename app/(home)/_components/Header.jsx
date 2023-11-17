"use client";
import { UserButton, useUser } from "@clerk/clerk-react";
import SearchBar from "./SearchBar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user } = useUser();
  const router = useRouter();
  useEffect(() => {
    console.log(user);
  }, [user]);
  return (
    <div className="ml-64 border-b p-6 flex items-center justify-between">
      <SearchBar />
      {!user ? (
        <button onClick={() => router.push("./sign-in")}>Login</button>
      ) : (
        <UserButton />
      )}
    </div>
  );
};

export default Header;
