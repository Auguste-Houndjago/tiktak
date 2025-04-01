import React from "react";

import Profile from "./profile";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { IoMenu } from "react-icons/io5";
import Logo from "./Logo";
import Search from "./Search";
import Sidebar from "./sidebar";
export default function Navbar() {
  return (
    <nav className="p-6 border-b">
      {/* PC NAVBAR */}
      <div className="hidden md:flex justify-between items-center">
        <Logo />
        <Search />
        <Profile />
      </div>

      {/* MOBILE NAVBAR */}
      <div className="flex md:hidden justify-between items-center">
        <Logo />
        <Profile />
        <Sheet>
          <SheetTrigger>
            <IoMenu />
          </SheetTrigger>
          <SheetContent className="flex flex-col justify-between items-center">
          <SheetHeader>
        <SheetTitle>Menu</SheetTitle>
        <Sidebar />
      </SheetHeader>
    
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
