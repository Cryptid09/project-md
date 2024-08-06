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
    <nav className="flex justify-between p-2 fixed top-0 w-full z-50">
      <Link href="/">
        <div>Nexus</div>
      </Link>

      <div>
        <button
          onClick={toggleMenu}
          className="hidden md:block text-white focus:outline-none"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <div className={`${isOpen ? `block` : `hidden`} gap-3 grid md:flex`}>
          <Link href="/">
            <div>Home</div>
          </Link>
          <Link href="/notes">
            <div>Notes</div>
          </Link>
          <Link href="/community">
            <div>Community</div>
          </Link>
          <Link href="/chat">
            <div>Chat</div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
