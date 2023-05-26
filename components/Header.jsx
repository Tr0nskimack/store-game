"use client";
import Link from "next/link";
import { useState } from "react";
import {
  RiShoppingCart2Line,
  RiCloseLine,
  RiHeart3Line,
  RiMenuLine,
} from "react-icons/ri";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <header className="h-[10vh] text-gray-400 py-4 px-10 justify-between items-center flex bg-[#181a20] z-40">
        {/* MOBILE */}

        <button
          onClick={() => setShowMenu(!showMenu)}
          className="lg:hidden text-gray-500 text-2xl"
        >
          <RiMenuLine />
        </button>
        <div
          className={`fixed top-0 -left-full bg-[#181a20] w-full h-full z-50 transition-all ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          <ul>
            <button
              className="text-gray-500 text-3xl p-4"
              onClick={() => setShowMenu(!showMenu)}
            >
              <RiCloseLine />
            </button>

            <li className=" block text-center p-14 text-4xl">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-[#e58d27] transition-colors block text-center p-14 text-4xl">
              <Link href={"/"}>Streams</Link>
            </li>
            <li className="text-[#e58d27] transition-colors block text-center p-14 text-4xl">
              <Link href={"/"}>Games Store</Link>
            </li>
            <li className="hover:text-[#e58d27] transition-colors block text-center p-14 text-4xl">
              <Link href={"/"}>New</Link>
            </li>
          </ul>
        </div>
        {/* MENU */}
        <ul className="hidden lg:flex gap-6"></ul>
        {/* USER MENU */}
        <ul className="text-gray-300 flex gap-6 items-center text-xl">
          <li>
            <button className="hover:text-[#e58d27] transition-colors">
              <RiShoppingCart2Line />
            </button>
          </li>
          <li>
            <button className="hover:text-[#e58d27] transition-colors">
              <RiHeart3Line />
            </button>
          </li>
          <li>
            <button>
              <img
                src="profile-pic.png"
                className="rounded-full object-cover w-8 h-8 ring-2 ring-[#e58d27]"
              />
            </button>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
