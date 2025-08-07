import React from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const menuOptions = [
  {
    id: 1,
    name: "Home",
    path: "/dashboard",
  },
  {
    id: 2,
    name: "History",
    path: "/dashboard/history",
  },
  {
    id: 3,
    name: "Pricing",
    path: "/pricing",
  },
  {
    id: 4,
    name: "Profile",
    path: "/profile",
  },
];
const AppHeader = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="relative w-[150px] h-[40px]">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          fill
          sizes="(max-width: 768px) 150px, 150px"
          className="object-contain"
          priority
        />
      </div>
      <nav className="hidden md:flex md:gap-8 lg:gap-12 items-center">
        {menuOptions.map((option) => (
          <Link 
            key={option.id} 
            href={option.path}
            className="hover:font-bold text-sm md:text-base transition-all hover:text-primary"
          >
            {option.name}
          </Link>
        ))}
      </nav>
      <div className="flex items-center">
        <UserButton afterSignOutUrl="/" />
      </div>
    </header>
  );
};

export default AppHeader;
