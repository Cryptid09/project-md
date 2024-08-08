"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/Brightness4";
import LightModeIcon from "@mui/icons-material/Brightness7";
import HomeTwoToneIcon from "@mui/icons-material/HomeTwoTone";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SummarizeOutlinedIcon from "@mui/icons-material/SummarizeOutlined";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  return (
    <nav className="font-mono text-white absolute top-0 border-r border-gray-500 h-screen">
      <Link href="/">
        <div className="text-2xl p-4 mt-10 font-bold cursor-pointer">Nexus</div>
      </Link>

      <div className="grid gap-5 text-sm">
        <div
          className={` ${
            pathname === "/" ? `bg-[#1e1e1f]` : `text-gray-400`
          } mx-1.5 py-1 rounded-lg text-center`}
        >
          <Link href="/">
            <HomeTwoToneIcon />
            <p>Home</p>
          </Link>
        </div>

        <div
          className={` ${
            pathname === "/community" ? `bg-[#1e1e1f]` : `text-gray-400`
          } mx-1.5 py-1 rounded-lg text-center`}
        >
          <Link href="/community">
            <PeopleAltOutlinedIcon />
            <p>Communtiy</p>
          </Link>
        </div>

        <div
          className={` ${
            pathname === "/chat" ? `bg-[#1e1e1f]` : `text-gray-400`
          } mx-1.5 py-1 rounded-lg text-center`}
        >
          <Link href="/chat">
            <QuestionAnswerOutlinedIcon />
            <p>Chat</p>
          </Link>
        </div>

        <div
          className={` ${
            pathname === "/notes" ? `bg-[#1e1e1f]` : `text-gray-400`
          } mx-1.5 py-1 rounded-lg text-center`}
        >
          <Link href="/notes">
            <SummarizeOutlinedIcon />
            <p>Notes</p>
          </Link>
        </div>
      </div>

      <div className=" w-full text-sm grid gap-4 justify-center">
        <div className="text-center">
          <SettingsIcon />
          <p>Settings</p>
        </div>

        <button
          onClick={toggleDarkMode}
          className=" p-1 text-white bg-[#201e1e] rounded-full focus:outline-none"
        >
          {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
        </button>
      </div>
    </nav>
  );
}
