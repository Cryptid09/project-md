"use client";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useState, useEffect } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

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
    <nav className="max-w-screen  md:h-screen w-screen md:w-auto md:grid  dark:text-white text-black dark:bg-[#0001] fixed top-0 border-r bg-white border-gray-700 ">
      {/* Heading */}
      <div className="flex dark:bg-[#0001] bg-white justify-between">
        <Link href="/">
          <div className="text-4xl font-Sankofa p-4 md:mt-10 cursor-pointer mb-6">
            Nexus
          </div>
        </Link>
        <button
          onClick={toggleMenu}
          className="block w-full md:hidden pb-5 focus:outline-none"
        >
          {isOpen ? (
            <div className="h-screen bg-[#191818] flex justify-end opacity-70">
              <CloseIcon className="mt-4 mr-3" />
            </div>
          ) : (
            <div className=" flex justify-end ">
              {" "}
              <MenuIcon />
            </div>
          )}
        </button>
      </div>

      {/* Menu */}
      <div
        className={`${
          isOpen ? `block` : `hidden`
        } bg-[#bbb6b6] md:bg-white border-r md:border-0 dark:bg-[#212121] md:dark:bg-[#0001] absolute top-0  md:relative h-screen  z-50 w-3/4 md:w-full md:block text-xs`}
      >
        <div className="grid pt-20 md:pt-0 gap-5 ">
          <div
            className={` ${
              pathname === "/" ? `bg-[#2f2f31] text-gray-300` : `bg-inherit`
            } mx-1.5 py-1 rounded-lg text-center`}
          >
            <Link href="/">
              <HomeOutlinedIcon className="text-3xl" />
              <p>Home</p>
            </Link>
          </div>

          <div
            className={` ${
              pathname === "/community"
                ? `bg-[#1e1e1f] text-gray-300`
                : `bg-inherit`
            } mx-1.5 py-1 rounded-lg text-center`}
          >
            <Link href="/community">
              <PeopleAltOutlinedIcon className="text-3xl" />
              <p>Communtiy</p>
            </Link>
          </div>

          <div
            className={` ${
              pathname === "/chat" ? `bg-[#1e1e1f] text-gray-300` : `bg-inherit`
            } mx-1.5 py-1 rounded-lg text-center`}
          >
            <Link href="/chat">
              <QuestionAnswerOutlinedIcon className="text-3xl" />
              <p>Chat</p>
            </Link>
          </div>

          <div
            className={` ${
              pathname === "/notes"
                ? `bg-[#1e1e1f] text-gray-300`
                : `bg-inherit`
            } mx-1.5 py-1 rounded-lg text-center`}
          >
            <Link href="/notes">
              <ClassOutlinedIcon className="text-3xl" />
              <p>Notes</p>
            </Link>
          </div>
        </div>
        <hr className="hidden md:block mx-3 border-t dark:border-white  border-black my-8"></hr>

        <div className="  w-full text-sm grid gap-4 justify-center">
          <div className="mx-1.5 py-1 rounded-lg md:mt-0 mt-4 text-center">
            {isAuthenticated ? (
              <Link
                href="#_"
                class="relative inline-flex items-center justify-center px-6 py-3 overflow-hidden hover:text-white font-bold text-[#383838] dark:text-white rounded-md shadow-2xl group"
              >
                <span class="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-pink-600 via-purple-700 to-blue-400 group-hover:opacity-100"></span>
                <span class="absolute top-0 left-0 w-full bg-gradient-to-b from-[#1c1b1b] dark:from-white to-transparent opacity-5 h-1/3"></span>
                <span class="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0001] dark:from-white to-transparent opacity-5"></span>
                <span class="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-[#0001] dark:from-white to-transparent opacity-5"></span>
                <span class="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-[#0001] dark:from-white to-transparent opacity-5"></span>
                <span class="absolute inset-0 w-full h-full border border-gray-700 dark:border-white rounded-md opacity-10"></span>
                <span class="absolute w-0 h-0 transition-all duration-300 ease-out  bg-[#2d2c2c] dark:bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
                <span class="relative">Sign In</span>
              </Link>
            ) : (
              <Link href="/setting">
                <SettingsIcon
                  onClick={() => setIsRotated(!isRotated)}
                  className={`transform transition-transform duration-300 ${
                    isRotated ? "rotate-90" : "rotate-0"
                  }`}
                />
                <p onClick={() => setIsRotated(!isRotated)}>Settings</p>
              </Link>
            )}
          </div>
          <button
            onClick={toggleDarkMode}
            className=" p-1 text-white bg-[#201e1e] rounded-full focus:outline-none"
          >
            {isDarkMode ? (
              <LightModeRoundedIcon />
            ) : (
              <NightlightRoundOutlinedIcon />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
