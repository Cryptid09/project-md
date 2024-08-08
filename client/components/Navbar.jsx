"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/Brightness7";
import HomeIcon from "@mui/icons-material/Home";
import ForumIcon from "@mui/icons-material/Forum";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import ArticleIcon from "@mui/icons-material/Article";
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
    <nav className="text-white absolute top-0 border h-screen">
      <Link href="/">
        <div className="text-2xl p-4 mt-10 font-bold cursor-pointer">Nexus</div>
      </Link>

      <div className=" pr-3 items-center">
        <button
          onClick={toggleMenu}
          className="block md:hidden   focus:outline-none"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div>
          <Link href="/">
            <HomeIcon />
            <div className="font-sm cursor-pointer">Home</div>
          </Link>
          <Link href="/notes">
            <ArticleIcon />
            <div className="cursor-pointer ">Notes</div>
          </Link>
          <Link href="/community">
            <PeopleIcon />
            <div className="cursor-pointer ">Community</div>
          </Link>
          <Link href="/chat">
            <ForumIcon />
            <div className="cursor-pointer ">Chat</div>
          </Link>
        </div>
      </div>
      <button
        onClick={toggleDarkMode}
        className=" p-1 text-white bg-gray-800 rounded-full focus:outline-none"
      >
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </nav>
  );
}
