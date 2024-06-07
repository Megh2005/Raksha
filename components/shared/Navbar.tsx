"use client";
import Link from "next/link";
import { navLinks } from "@/constants";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FcBusinesswoman } from "react-icons/fc";
import Button from "../frontend/Button";
import { useState } from "react";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const handleOpenMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <nav className="py-5 bg-transparent relative top-0 z-10 w-full">
      <div className="max-w-[1450px] w-[90%] mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <div className="items-center flex gap-1">
            <FcBusinesswoman className="text-purple-500 text-3xl" title="Raksha" />{" "}
            <h1 className="text-black font-extrabold capitalize text-xl">
              Raksha
            </h1>
          </div>
        </Link>
        <ul className="flex gap-16 items-center max-md:hidden">
          {navLinks.map((link, index) => (
            <Link href={link.route} key={index}>
              <li>{link.name}</li>
            </Link>
          ))}
        </ul>
        <div className="max-md:flex justify-center items-center gap-10">
          <Link href="/create">
            <Button>Post Job</Button>
          </Link>
          <div
            className="md:hidden text-3xl cursor-pointer text-black ease-in-out transition-all duration-500"
            onClick={handleOpenMobileMenu}
          >
            {openMobileMenu ? <MdClose /> : <FiMenu />}
          </div>
          {openMobileMenu && (
            <ul className="md:hidden bg-purple-700 absolute top-14 right-5 px-4 py-6 text-center text-white rounded-md flex flex-col gap-3 shadow-md font-semibold">
              {navLinks.map((link, index) => (
                <Link
                  href={link.route}
                  key={index}
                  onClick={() => setOpenMobileMenu(false)}
                >
                  <li>{link.name}</li>
                </Link>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

// 18 min
