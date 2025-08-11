import { UserButton, useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-slate-700 px-4 py-4 bg-slate-900/80 backdrop-blur-sm">
      <div className="flex items-center">
        {/*<div className="size-7 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />*/}
        <Link href="/" className="relative h-11 w-23">  
          <Image 
            src="/logo.png" 
            alt="Logo" 
            fill
            sizes="(max-width: 768px) 150px, 150px"
            className="object-contain" 
            priority
          />
        </Link>
        <h1 className="text-base font-bold md:text-2xl text-white">BIT-AID</h1>
      </div>
      <div className="flex items-center gap-4">
        <UserButton/>
        <Link href={"/dashboard"}>
        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">Dashboard</Button>
        </Link>
      </div>
    </nav>
  )};

  export default Navbar;
