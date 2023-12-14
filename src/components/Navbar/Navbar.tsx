"use client";
import Container from "@/app/container/Container";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import Image from "next/image";

const Navbar = () => {
  const links = [
    {
      title: "Home",
      route: "/",
    },
    {
      title: "Services",
      route: "/services",
    },
    {
      title: "Types of Insurance",
      icon: <IoIosArrowDown />,
    },
    {
      title: "Contact Us",
      route: "/contact-us",
    },
  ];

  return (
    <div className="py-2 shadow-md">
      <Container>
        <div className="flex items-center justify-between">
          <Image
            src="/assets/logo.png"
            className="w-[100px] object-contain h-[70px] mobile:w-[70px] mobile:h-[50px]"
            width={200}
            height={200}
            alt="Logo"
          />
          <DesktopNavbar links={links} />
          <MobileNavbar links={links} />
          <div className="flex mobile:hidden items-center gap-5">
            <button className="rounded-[10px] text-secondary font-[600] border border-secondary px-5 py-1">
              Call Now
            </button>
            <button className="bg-secondary rounded-[10px] border border-secondary text-white px-5 py-1 font-[600]">
              Book Now
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
