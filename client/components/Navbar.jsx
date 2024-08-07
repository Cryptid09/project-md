"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/Brightness7";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="font-mono my-3 pb-3 flex justify-between fixed top-0 w-full z-50 ">
      <Link href="/">
        <div className="text-2xl pl-8 font-bold cursor-pointer">Nexus</div>
      </Link>

      <div className="flex pr-3 items-center">
        <button
          onClick={toggleMenu}
          className="block md:hidden text-black dark:text-white focus:outline-none"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } text-lg pr-3 gap-8 grid mt-2 md:flex `}
        >
          <Link href="/">
            <div className=" cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">
              Home
            </div>
          </Link>
          <Link href="/notes">
            <div className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">
              Notes
            </div>
          </Link>
          <Link href="/community">
            <div className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">
              Community
            </div>
          </Link>
          <Link href="/chat">
            <div className="cursor-pointer hover:text-gray-500 dark:hover:text-gray-300">
              Chat
            </div>
          </Link>
        </div>
        <button
          onClick={toggleDarkMode}
          className=" p-1 text-white bg-gray-800 rounded-full focus:outline-none"
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
    </nav>
  );
}
