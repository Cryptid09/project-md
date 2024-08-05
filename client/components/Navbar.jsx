"use client";
import { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" p-4">
      <div className=" mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="text-white text-lg font-bold">My Website</div>
        </Link>
        <div className="grid container">
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          <div
            className={`flex-col md:flex-row md:flex md:items-center w-full md:w-auto ${isOpen ? "block" : "hidden"} md:block`}
          >
            <Link href="/">
              <div className="text-white px-3 py-2 block md:inline">Home</div>
            </Link>
            <Link href="/notes">
              <div className="text-white px-3 py-2 block md:inline">Notes</div>
            </Link>
            <Link href="/community">
              <div className="text-white px-3 py-2 block md:inline">
                Community
              </div>
            </Link>
            <Link href="/chat">
              <div className="text-white px-3 py-2 block md:inline">Chat</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
